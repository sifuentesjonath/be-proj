import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, number, string } from 'yup';

export interface IOperativeInformationForm {
	WorkStations: number;
	Branches: number;
	WorkScheduleFrom: string;
	WorkScheduleTo: string;
	Employees: number;
}
export default function useOperativeInformationForm() {
	return useForm<IOperativeInformationForm>({
		defaultValues: {
			WorkStations: 1,
			Branches: 1,
			WorkScheduleFrom: null,
			WorkScheduleTo: null,
			Employees: 1
		},
		resolver: yupResolver(
			object({
				WorkStations: number().required().min(1).typeError('Inserta un número válido').positive(),
				Branches: number().required().min(1).typeError('Inserta un número válido').positive(),
				WorkScheduleFrom: string().required('This field is required'),
				WorkScheduleTo: string().required('This field is required'),
				Employees: number().required().min(1).typeError('Inserta un número válido').positive()
			})
		),
	});
}