import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, boolean } from 'yup';

export interface IUseJoinForm {
	FirstName: string;
	LastName: string;
	Email: string;
	PhoneNumber: string;
	Subject: string;
	allowCookies: boolean;
}

export default function useJoinForm() {
	return useForm<IUseJoinForm>({
		defaultValues: {
			FirstName: '',
			LastName: '',
			Email: '',
			PhoneNumber: '',
			Subject: '',
			allowCookies: false
		},
		resolver: yupResolver(
			object({
				FirstName: string().required(),
				LastName: string().required(),
				Email: string().email().required(),
 				// todo: have a better validator for phone number
				PhoneNumber: string().required().transform(removeSpacesInSentence),
				Subject: string().required(),
				allowCookies: boolean()
			})
		) 
	})
}

const removeSpacesInSentence = (phrase: string) => phrase.replace(' ', '');