import { useState, useEffect } from 'react';
import { createSubscriptionPaymentIntent } from '@service/payments';

/**
 * Returns a valid `options` object for passing to Stripe Elements
 *
 * Stripe docs say:
 * > Immediately make a request to the endpoint on your server to create a new PaymentIntent as soon as your checkout page loads.
 *
 * This hook was made for this requirement
 *
 * Docs: https://stripe.com/docs/payments/quickstart
 * @param {customerId} - the stripe customer Id
 * @param {priceId} - the priceId of the selected plan
 */
export default function useSubscriptionPaymentIntent(paymentIntentType: { customerId: string; priceId: string; }) {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(undefined);
	const [clientSecret, setClientSecret] = useState('');

	useEffect(() => {
		if (clientSecret) return;
		createSubscriptionPaymentIntent(paymentIntentType)
			.then((data) => {
				console.log('PaymentIntent data', data)
				setClientSecret(data.clientSecret);
				setIsLoading(false);
			})
			.catch(error => {
				console.log('PaymentIntent error', error)
				setError(error)
			})
	}, []);

	return {
		isLoading,
		isError: error,
		data: {
			clientSecret,
			theme: 'stripe',
		},
	};
}
