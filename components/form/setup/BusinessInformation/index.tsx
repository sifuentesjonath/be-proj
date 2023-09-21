import { useRef, useContext, useEffect } from 'react';
// Form use
import useBusinessInformationForm, { IBusinessInformationForm, ACTIVITY_TYPES, PLAN_TYPES } from './useBusinessInfoForm';
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
// Components
import Button from '@components/element/buttons/Button';
import TextFieldInput from '@components/element/input/TextField';
// Style
import styled from 'styled-components'
import SelectInput from '@components/element/input/Select';
// Services
import { createBusiness, getBusinesses, updateBusiness } from '@service/business';
import { SetupContext } from '@components/layout/Setup/SetupContext';

const BusinessInformationForm = () => {
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors }
	} = useBusinessInformationForm();

	const { setIsGoNextAllowed, handleGoNext } = useContext(SetupContext)
	const businessUpdate = useRef<{ canUpdate: boolean, id: number }>({ canUpdate: false, id: undefined });

	const onValid: SubmitHandler<IBusinessInformationForm> = async (data) => {
		// console.log('[Business Information - Submit]', data)
		if (!businessUpdate.current.canUpdate) {
			const response = await createBusiness(data);
			if (response) await handleGoNext();
		}
		else {
			// console.log('Updating business', businessUpdate.current, data);
			const { Address, ...payload } = data; // TODO: enable updating Address.Name too
			const response = await updateBusiness(businessUpdate.current.id, payload);
			if (response) await handleGoNext()
		}
	};
	const onError: SubmitErrorHandler<IBusinessInformationForm> = (errors) => console.error('[Business Information - Error]', errors);

	useEffect(() => {
		const checkBusiness = async () => {
			const business = await getBusinesses();
			if (!business || !business.length) return;
			const { Name, Activity, Address } = business[0];
			reset({
				Name,
				Activity,
				Address: Address.Name
			})
			businessUpdate.current = {
				canUpdate: true,
				id: business[0].Id
			}
			console.log('Switched to update business mode:', businessUpdate.current)
			setIsGoNextAllowed(true);
		}
		setIsGoNextAllowed(false);
		checkBusiness();
	}, [])

	return (
		<BusinessInformationFormContainer onSubmit={handleSubmit(onValid, onError)}>
			<TextFieldInput name='Address' control={control} placeholder='Dirección' errorMessage={errors?.Address?.message} />
			<TextFieldInput name='Name' control={control} placeholder='Nombre ' errorMessage={errors?.Name?.message} />
			{/* <SelectInput options={planOptions} name='Plan' control={control} label='Plan' /> */}
			<SelectInput options={[...ACTIVITY_TYPES]} name='Activity' control={control} label='Actividad que realiza' />
			<Button className='submit-button' type='submit'>Submit</Button>
		</BusinessInformationFormContainer>
	)
}

const BusinessInformationFormContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 12px;
	.submit-button {
		width: 140px;
		margin: 0 auto;
	}
`;

export default BusinessInformationForm