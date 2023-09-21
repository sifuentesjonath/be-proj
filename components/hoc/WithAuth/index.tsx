"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAuthApp, getUser } from '@auth/users';

const WithAuth = ({ children }) => {
	const router = useRouter();
	const user = getUser();

	useEffect(() => { // Listen to user state and redirect if is not logged in
		const unsubscribe = getAuthApp().onAuthStateChanged((user) => {
			if (!user) router.replace('/login');
		});
		return () => unsubscribe();
	}, [user]);

	return children;
};

export default WithAuth;