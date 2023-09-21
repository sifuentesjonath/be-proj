import Button from '@/components/element/buttons/Button';
import PhoneNumberInput from '@components/element/input/PhoneNumber';
import TextFieldInput from '@components/element/input/TextField';
import joinFormSubmit from '@service/actions/joinFormSubmit';
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components'
import useJoinForm, { IUseJoinForm } from './useJoinForm';

const JoinForm = () => {
	const { register, handleSubmit, control, formState: {errors} } = useJoinForm();

	const onValid: SubmitHandler<IUseJoinForm> = async (data) => {
		await joinFormSubmit(data);
	}

	const onError: SubmitErrorHandler<IUseJoinForm> = (errors) => {
		console.log(errors);
	}

	return (
		<JoinFormContainer onSubmit={handleSubmit(onValid, onError)}>
			<div className='double-inline-inputs'>
				<TextFieldInput name='FirstName' placeholder='First Name' control={control} errorMessage={errors?.FirstName?.message} />
				<TextFieldInput name='LastName' placeholder='Last Name' control={control} errorMessage={errors?.LastName?.message} />
			</div>
			<TextFieldInput name='Email' placeholder='Email' control={control} errorMessage={errors?.Email?.message} />
			<PhoneNumberInput name='PhoneNumber' placeholder='Phone Number' control={control} />
			<TextFieldInput name='Subject' placeholder='Subject' control={control} errorMessage={errors?.Subject?.message} />
			<div className='check-input'>
				<input className='input-style' type="checkbox" {...register("allowCookies")} />
				<label>Praesent sit armet nibh rutrum, elementum nibh</label>
			</div>
			<Button className='submit-button' type='submit'>Submit</Button>
		</JoinFormContainer>
	)
}

const JoinFormContainer = styled.form`
display: flex;
flex-direction: column;
gap: 12px;

.MuiInputBase-root {
	background-color: white;
}

.input-style {
	padding: 14px 0 8px 8px;
	border-radius: 6px;
	border: 0;
}
.submit-button {
	width: 140px;
}

.double-inline-inputs {
	display: flex;
	justify-content: space-between;
	width: 100%;
	gap: 12px;
}

.check-input {
	display: flex;
	align-items: center;
	gap: 12px;
}
`;

export default JoinForm