import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, date } from 'yup';

export interface IPersonalInformationForm {
	FirstName: string;
	LastName: string;
	BirthDate: Date;
	PhoneNumber: string;
	RFC: string;
}
export default function usePersonalInformationForm() {
	return useForm<IPersonalInformationForm>({
		defaultValues: {
			FirstName: '',
			LastName: '',
			BirthDate: null,
			PhoneNumber: '',
			RFC: ''
		},
		resolver: yupResolver(
			object({
				FirstName: string().required(),
				LastName: string().required(),
				BirthDate: date().required(),
				PhoneNumber: string().required(),
				RFC: string().required()
			})
		),
	});
}