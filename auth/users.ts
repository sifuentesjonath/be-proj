import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, signOut } from 'firebase/auth';

import { app } from '@auth/firebaseApp';
import axios, { setAuthHeader } from "@service/customAxios";

import { ISignUpForm } from '@components/form/SignUp/useSignUpForm'; 
import { IUseLoginForm } from '@components/form/Login/useLoginForm';
import { Profile } from '@service/profile/type';
import { getProfile } from '@service/profile';

// Apps

export const getAuthApp = () => getAuth(app);

// Actions

export const signup = async (data: ISignUpForm) => {
    try {
        const auth = getAuthApp();
        const credentials = await createUserWithEmailAndPassword(auth, data.Email, data.Password);
        if (credentials) await sendEmailVerification(auth.currentUser);
        const requestBody = {
            Email: data.Email,
            FirebaseAuthId: credentials.user.uid
        }
        const newUserResponse = await axios.post<Profile>("/auth/signup", requestBody);
        await signOut(auth);
        return newUserResponse.data;
    } catch(error) {
        return error;
    }
}

export const login = async (data: IUseLoginForm) => {
    const auth = getAuthApp();
    try {
        const signedIn = await signInWithEmailAndPassword(auth, data.Email, data.Password);
        if (!signedIn.user.emailVerified) {
            auth.signOut();
            throw ('Email is not verified');
        }
        const { data: { token } } = await axios.post<{ token: string }>('auth/login', data);
        setAuthHeader(token);
        const profile = await getProfile();
        return {
            token,
            profile
        };
    } catch(error) {
        console.error('[Log In] error', error);
        if (auth.currentUser) auth.signOut();
        throw(error);
    }
}

export const getUser = () => {
    const auth = getAuthApp();
    return auth.currentUser;
}

export const logOut = async () => {
    const auth = getAuthApp();
    await auth.signOut();
}
