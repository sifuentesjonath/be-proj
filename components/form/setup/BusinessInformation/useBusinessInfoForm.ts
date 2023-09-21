import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, date,  } from 'yup';

export const PLAN_TYPES = ['', 'Starter', 'Business', 'High-Scale'] as const;
export const ACTIVITY_TYPES = ['', 'Spa', 'Barber Shop', 'Beauty Studio', 'Tattoo Studio', 'Otro'] as const;

type PlanType = typeof PLAN_TYPES[number];
type ActivityType = typeof ACTIVITY_TYPES[number];

export interface IBusinessInformationForm {
	Address: string;
	Name: string;
	// Logo: any;
	// Plan: PlanType;
	Activity: ActivityType;
}
export default function useBusinessInformationForm() {
	return useForm<IBusinessInformationForm>({
		defaultValues: {
			Address: '',
			Name: '',
			// Logo: {},
			// Plan: '',
			Activity: '',
		},
		resolver: yupResolver(
			object({
				Address: string().required(),
				Name: string().required(),
				// Logo: AnySchema()
				// Plan: string<PlanType>().required(),
				Activity: string<ActivityType>().required()
			})
		),
	});
}