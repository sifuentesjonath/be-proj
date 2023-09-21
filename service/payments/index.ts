import axios from '@service/customAxios';
import { Subscription } from './type';

const ENDPOINT = 'payments'

export function createSubscriptionPaymentIntent(paymentIntentType: {
	customerId: string;
	priceId: string;
}) {
	return axios
		.post(ENDPOINT + '/create-subscription', paymentIntentType)
		.then((response) => response.data);
}

export function getSubscription(customerId: string) {
	return axios
		.get<Subscription[]>(ENDPOINT + '/subscription/' + customerId)
		.then((response) => response.data)
}