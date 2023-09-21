import { useEffect, useState } from 'react'
import { Stripe, PaymentIntent } from '@stripe/stripe-js';
/**
 * Verifies the payment intent status and returns it
 * - `requires_payment_method`
 * - `requires_confirmation`
 * - `requires_action`
 * - `processing`
 * - `requires_capture`
 * - `canceled`
 * - `succeeded`
 * 
 * Needs Stripe instance, which can only be initialized
 * in a component that is being wrapped by Stripe 'Elements' component
 */
export default function usePaymentIntentStatus(stripe: Stripe, clientSecret: string) {
	const [status, setStatus] = useState<PaymentIntent['status']>('' as PaymentIntent['status']);
	useEffect(() => {
		if (!stripe) return;
		stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
			setStatus(paymentIntent.status);
		});
	}, [stripe]);
	return status;
}