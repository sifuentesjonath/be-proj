import styled from "styled-components";
import useSignUpForm, { ISignUpForm } from "./useSignUpForm";
import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
// Service
import { signup } from '@auth/users';
// Components
import Button from "@components/element/buttons/Button";
import PasswordInput from "@components/element/input/Password";
import TextFieldInput from "@components/element/input/TextField";
import CheckInput from "@components/element/input/Check";
// Style
import breakPoints from "@styles/breakpoints";
import fontSizes from '@styles/fontSizes';
import mainTheme from "@styles/theme";

const SignUpForm = () => {
  const { control, register, handleSubmit, formState: { errors, isSubmitting } } = useSignUpForm();

	const onValid: SubmitHandler<ISignUpForm> = async (data) => {
    const newUser = await signup(data);
    // ToDo: Notify the user that his sign up was successful and needs to verify it's account by checking his email
    // if(newUser.Id)
	}

	const onError: SubmitErrorHandler<ISignUpForm> = (errors) => {
		// console.log(errors);
	}

	return (
		<Form onSubmit={handleSubmit(onValid, onError)}>
      <h1>Sign Up</h1>
      <TextFieldInput name="Email" placeholder="Email" control={control} errorMessage={errors?.Email?.message} />
      <PasswordInput name="Password" control={control} placeholder="Password" errorMessage={errors?.Password?.message} />
      <PasswordInput name="ConfirmPassword" control={control} placeholder="Confirm password" errorMessage={errors?.ConfirmPassword?.message} />
      <CheckInput name="AboveLegalAge" control={control} label="I'm above the legal age" />
      <Button className="submit-button" type='submit' disabled={isSubmitting}>Submit</Button>
		</Form>
	)
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  box-shadow: -2px 10px 19px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -2px 10px 19px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 10px 19px 0px rgba(0, 0, 0, 0.75);

  max-width: 500px;
  border-radius: 12px;
  background-color: ${mainTheme.cardBackground};

	h1 {
		text-align: center;
		font-size: ${fontSizes.mediumHeading}px;
		font-weight: 400;
	}

  .submit-button {
    width: 140px;
    margin: 0 auto;
  }

  .double-inline-inputs .MuiFormControl-root {
    width: 100%;
  }

  .double-inline-inputs, 
  .double-inline-inputs-password {
    display: flex;
    gap: 16px;
  }
  .double-inline-inputs-password {
    flex-direction: column;
  }

  @media screen and (min-width: ${breakPoints.tabletMax}px){
    .double-inline-inputs-password {
      flex-direction: row;
    }
  }

`;

export default SignUpForm