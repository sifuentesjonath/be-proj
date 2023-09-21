import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';

interface IUsePaymentForm {
	email: string;
}
export default function usePaymentForm(email: string) {
	return useForm<IUsePaymentForm>({
		defaultValues: {
			email,
		},
		resolver: yupResolver(
			object({
				email: string(),
			})
		),
	});
}