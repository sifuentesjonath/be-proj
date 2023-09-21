import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, number,  } from 'yup';

export interface IAdministrativeInformationForm {
	ComissionsAndFees: number;
	IncomesToEmployees: number;
	CostPerInsumes: number;
}
export default function useAdministrativeInformationForm() {
	return useForm<IAdministrativeInformationForm>({
		defaultValues: {
			ComissionsAndFees: null,
			IncomesToEmployees: null,
			CostPerInsumes: null
		},
		resolver: yupResolver(
			object({
				ComissionsAndFees: number().required().typeError('Please enter a valid number'),
				IncomesToEmployees: number().required().typeError('Please enter a valid number'),
				CostPerInsumes: number().required().typeError('Please enter a valid number')
			})
		),
	});
}