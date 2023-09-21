import { FC } from 'react'
// Components
import { CircularProgress } from '@mui/material';
// Stripe
import useSubscriptionPaymentIntent from '@hooks/stripe/useSubscriptionPaymentIntent';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
// Type
import { IPaymentPlan } from '@components/block/cards/Plan';
import PaymentInformationForm from '@components/form/setup/PaymentInformation';
// Needed to initialize Stripe Elements
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

interface IPaymentScreenProps {
	paymentMetadata: {
		plan: IPaymentPlan;
		customer: string // receive the customer from stripe
	};
}
const PaymentScreen: FC<IPaymentScreenProps> = ({
	paymentMetadata: { plan, customer },
}) => {
	const { isLoading, data: paymentIntentOptions, isError } = useSubscriptionPaymentIntent({
		priceId: plan.priceId,
		customerId: customer
	});

	if (isLoading) return <CircularProgress className='select-plan-loader' />
	return (
		<div className='payment-screen'>
			<h1>Buy {plan.type} {plan.plan} plan</h1>
			{/* Elements needs to wrap the component that uses stripe hooks */}
			{!isLoading && !isError && paymentIntentOptions?.clientSecret && (
				<Elements options={paymentIntentOptions} stripe={stripePromise}>
					<PaymentInformationForm paymentIntentOptions={paymentIntentOptions} />
				</Elements>
			)}
			{isError && <p>Error {isError}</p>}
		</div>
	)
}

export default PaymentScreen