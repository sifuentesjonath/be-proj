import { ReadonlyURLSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface IStripeParams {
	payment_intent: string;
	payment_intent_client_secret: string;
	redirect_status: string;
}
/**
 * When Stripe is confirming a payment intent by `stripe.confirmPayment()` it needs a `return_url`.
 * Stripe uses the given URL to redirect along with some query params:
 * - payment_intent
 * - payment_intent_client_secret
 * - redirect_status
*/
export default function usePaymentConfirmationUrlParams(searchParams: ReadonlyURLSearchParams) {
	const [stripeParams, setStripeParams] = useState<IStripeParams>({
		payment_intent: undefined,
		payment_intent_client_secret: undefined,
		redirect_status: undefined
	});
	useEffect(() => {
		const params = {
			payment_intent: searchParams.get('payment_intent'),
			payment_intent_client_secret: searchParams.get('payment_intent_client_secret'),
			redirect_status: searchParams.get('redirect_status')
		}
		setStripeParams(params);
	}, [searchParams]);
	return stripeParams;
}