import { FC } from "react";
import { useRouter } from "next/navigation";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import useLoginForm, { IUseLoginForm } from './useLoginForm';
// Redux
import { useAppDispatch } from "@redux/hooks";
import user, { setState as setUserState } from "@redux/slices/user";
// Service
import { login } from '@auth/users';
// Components
import Button from "@/components/element/buttons/Button";
import TextFieldInput from '@components/element/input/TextField';
import PasswordInput from '@components/element/input/Password';
// Utils
import paths from "@utils/paths";
// Styles
import styled from 'styled-components'
import mainTheme from '@styles/theme';
import fontSizes from '@styles/fontSizes';
// Auth

interface ILoginForm {
  onError: (message: { title: string, description?: string }) => void;
}
const LoginForm: FC<ILoginForm> = ({ onError }) => {
  const router = useRouter();
  const appDispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useLoginForm();

  const onValid: SubmitHandler<IUseLoginForm> = async (data) => {
    try {
      const { token, profile } = await login(data);
      // Set necessary data
      appDispatch(setUserState({
        FirstName: profile.FirstName,
        Email: data.Email
      }));
      // Route the user to setup or app
      if (profile.Step == 'complete') router.push(paths.app);
      else router.push(`${paths.setup}/${profile.Step}`);
    } catch (error) {
      const errorMessage = error || error.message;
      onError({ title: 'Something went wrong', description: errorMessage });
    }
  }

  const onSubmitError: SubmitErrorHandler<ILoginForm> = (errors) => {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onValid, onSubmitError)}>
      <h1>Log In</h1>
      <TextFieldInput name='Email' placeholder="Email" control={control} errorMessage={errors?.Email?.message} />
      <PasswordInput name='Password' placeholder="Password" control={control} errorMessage={errors?.Password?.message} />
      <Button className='submit-button' disabled={isSubmitting}>Submit</Button>
    </Form>
  )
}

const Form = styled.form`
  height: 300px;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 16px;
  padding: 24px;
  margin: 0 auto;
  border-radius: 12px;

  background-color: ${mainTheme.cardBackground};
  box-shadow: -2px 10px 19px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -2px 10px 19px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 10px 19px 0px rgba(0, 0, 0, 0.75);

  h1 {
    text-align: center;
    font-size: ${fontSizes.mediumHeading}px;
    font-weight: 400;
  }

  .submit-button {
    width: 140px;
    margin: 0 auto;
  }
`;

export default LoginForm