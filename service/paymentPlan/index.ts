import axios from '@service/customAxios';
import { SubscriptionPlan } from './type';

const ENDPOINT = 'payment-plan';

export function getPaymentPlans(){
	return axios.get<SubscriptionPlan[]>(ENDPOINT).then(response => response.data);
}