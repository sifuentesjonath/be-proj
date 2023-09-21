// Form use
import useAdministrativeInformationForm, { IAdministrativeInformationForm } from './useAdministrativeInfoForm'
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
// Components
import Button from '@components/element/buttons/Button';
import TextFieldInput from '@components/element/input/TextField';
// Style
import styled from 'styled-components'

const AdministrativeInfoForm = () => {
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useAdministrativeInformationForm();

	const onValid: SubmitHandler<IAdministrativeInformationForm> = async (data) => console.log('[Administrative Information - Submit]', data);
	const onError: SubmitErrorHandler<IAdministrativeInformationForm> = (errors) => console.error('[Administrative Information - Error]', errors);

	return (
		<AdministrativeInformationFormContainer>
			<TextFieldInput name='ComissionsAndFees' control={control} placeholder='Comissions and Fees' errorMessage={errors?.ComissionsAndFees?.message} />
			<TextFieldInput name='IncomesToEmployees' control={control} placeholder='Incomes to employees' errorMessage={errors?.IncomesToEmployees?.message} />
			<TextFieldInput name='CostPerInsumes' control={control} placeholder='Cost per insumes' errorMessage={errors?.CostPerInsumes?.message} />
			<Button className='submit-button' type='submit'>Submit</Button>
		</AdministrativeInformationFormContainer>
	)
}

const AdministrativeInformationFormContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 12px;
	.submit-button {
		width: 140px;
		margin: 0 auto;
	}
`;

export default AdministrativeInfoForm