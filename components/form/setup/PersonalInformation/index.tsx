import { useContext, useEffect } from 'react';
// Form use
import usePersonalInformationForm, { IPersonalInformationForm } from './usePersonalInfoForm';
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
// Components
import Button from '@components/element/buttons/Button';
import TextFieldInput from '@components/element/input/TextField';
import PhoneNumberInput from '@components/element/input/PhoneNumber';
// Style
import styled from 'styled-components'
// Services
import DateInput from '@components/element/input/Date';
import { getProfile, updateProfile } from '@service/profile';
import { SetupContext } from '@components/layout/Setup/SetupContext';
import moment from 'moment';

const PersonalInformationForm = () => {
	const {
		control,
		handleSubmit,
		reset,
		getValues,
		formState: { errors }
	} = usePersonalInformationForm();

	const { setIsGoNextAllowed, handleGoNext, Profile } = useContext(SetupContext);

	const onValid: SubmitHandler<IPersonalInformationForm> = async (data) => {
		// console.log('[Personal Information - Submit]', data);
		const updated = await updateProfile(data);
		if (updated) handleGoNext();
	};
	const onError: SubmitErrorHandler<IPersonalInformationForm> = (errors) => console.error('[Personal Information - Error]', errors);

	useEffect(() => {
		const getProfileAndPopulateForm = async () => {
			const profile = Profile.data; 
			const profileForm: IPersonalInformationForm = {
				FirstName: profile.FirstName,
				LastName: profile.LastName,
				//@ts-ignore // DateField needs it as moment object to process it
				BirthDate: moment(profile.BirthDate, "YYYY-MM-DD"),
				PhoneNumber: profile.PhoneNumber,
				RFC: profile.RFC
			}
			const areFieldsEmptyYet = [
				// profileForm.BirthDate, // ? how to validate ?
				!!profileForm.FirstName,
				!!profileForm.LastName,
				!!profileForm.PhoneNumber,
				!!profileForm.RFC
			].includes(false);
			if (areFieldsEmptyYet) return;
			// Populate form and allow to move
			reset({ ...profileForm, });
			setIsGoNextAllowed(true);
		}
		if (!Profile.data) return;
		getProfileAndPopulateForm();
	}, [Profile.data])

	return (
		<PersonalInformationFormContainer onSubmit={handleSubmit(onValid, onError)}>
			<TextFieldInput name='FirstName' control={control} placeholder='Nombre' errorMessage={errors?.FirstName?.message} />
			<TextFieldInput name='LastName' control={control} placeholder='Apellidos' errorMessage={errors?.LastName?.message} />
			<DateInput name='BirthDate' control={control} label='Fecha de nacimiento' />
			<PhoneNumberInput name='PhoneNumber' control={control} />
			<TextFieldInput name='RFC' control={control} placeholder='RFC' errorMessage={errors?.RFC?.message} />
			<Button className='submit-button' type='submit'>Submit</Button>
		</PersonalInformationFormContainer>
	)
}

const PersonalInformationFormContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 12px;
	.submit-button {
		width: 140px;
		margin: 0 auto;
	}
`;

export default PersonalInformationForm