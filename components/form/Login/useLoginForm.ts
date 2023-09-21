import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, boolean } from 'yup';

export interface IUseLoginForm {
	Email: string;
	Password: string;
}
export default function useLoginForm() {
	return useForm<IUseLoginForm>({
		defaultValues: {
			Email: '',
			Password: ''
		},
		resolver: yupResolver(
			object({
				Email: string().email().required(),
				Password: string().required(),
			})
		)
	})
}