import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, boolean } from 'yup';

export interface ISignUpForm {
	Email: string;
	Password: string;
	ConfirmPassword: string;
	AboveLegalAge: boolean;
}
export default function useSignUpForm() {
	return useForm<ISignUpForm>({
		defaultValues: {
			Email: '',
			Password: '',
			ConfirmPassword: '',
			AboveLegalAge: false
		},
		resolver: yupResolver(
			object({
				Email: string().email().required(),
				Password: string().required(),
				ConfirmPassword: string().test(
					'passwords-match',
					'Passwords must match',
					function (value) {
						return this.parent.Password === value;
					}
				),
				AboveLegalAge: boolean().oneOf([true], 'You must declare you are above the legal age')
			})
		),
	});
}
