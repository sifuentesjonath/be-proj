import { FC } from 'react'
// Stripe
import {
	PaymentElement,
	LinkAuthenticationElement,
	useStripe,
	useElements
} from "@stripe/react-stripe-js";
import usePaymentIntentStatus from '@hooks/stripe/usePaymentIntentStatus';
import usePaymentForm from '@hooks/stripe/usePaymentForm';
// Components
import Button from '@components/element/buttons/Button';

interface IPaymentInformationFormProps {
	paymentIntentOptions: {
		clientSecret: string;
		theme: string;
	}
}
const PaymentInformationForm: FC<IPaymentInformationFormProps> = ({
	paymentIntentOptions
}) => {
	const {
		formState: { isSubmitting },
		handleSubmit,
	} = usePaymentForm('');
	// Stripe hooks
	const stripe = useStripe();
	const elements = useElements();
	// const paymentStatus = usePaymentIntentStatus(stripe, paymentIntentOptions.clientSecret);
	const onSubmit = async (e) => {
		const domain = window.location.origin;
		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: `${domain}/setup/3`,
			},
		});
		// This point will only be reached if there is an immediate error when
		// confirming the payment. Otherwise, your customer will be redirected to
		// your `return_url`. For some payment methods like iDEAL, your customer will
		// be redirected to an intermediate site first to authorize the payment, then
		// redirected to the `return_url`.
		const isCommonError = error.type === "card_error" || error.type === "validation_error";
		if (isCommonError) console.error('[Stripe] an error ocurred', error.message);
		else console.error('[Stripe] an error ocurred', error);
	}
	return (
		<form id="payment-form" onSubmit={handleSubmit(onSubmit)}>
			<LinkAuthenticationElement id="link-authentication-element" />
			<PaymentElement id="payment-element" options={{ layout: 'tabs' }} />
			<Button className='payment-screen-button' disabled={isSubmitting || !stripe || !elements} id="submit">
				{isSubmitting ? <div className="spinner" id="spinner"></div> : "Pay now"}
			</Button>
		</form>
	)
}

export default PaymentInformationForm