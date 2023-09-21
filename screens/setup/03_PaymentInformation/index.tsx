import { useContext, useEffect, useMemo, useState } from 'react';
// Hooks
import { useSearchParams } from 'next/navigation'
import useCheckSubscriptionStatus from '@hooks/stripe/useCheckSubscriptionStatus';
import usePaymentConfirmationUrlParams from '@hooks/stripe/usePaymentConfirmationUrlParams';
// Context
import { SetupContext } from '@components/layout/Setup/SetupContext';
// Components
import { IPaymentPlan } from '@components/block/cards/Plan';
// Components - Screens
import PlanCardsScreen from './PlanCardsScreen';
import PaymentScreen from './PaymentScreen';
import SuccessScreen from './SuccessScreen';
// Components - MUI
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircularProgress from '@mui/material/CircularProgress';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// Style
import styled from 'styled-components'
import mainTheme from '@styles/theme';
import { CustomSetupStyle } from '@styles/common/setupStyle';
// Steps
const steps = [
	'Selecciona un plan de subscripcion',
	'Procede al pago',
	'¡Subscripción exitosa!',
]

const PaymentInformationStep = () => {
	const [stepIndex, setStepIndex] = useState(0);
	const [plan, setPlan] = useState<IPaymentPlan>(null);
	const [isLoading, setIsLoading] = useState(true);
	const { Profile, setIsGoNextAllowed } = useContext(SetupContext)
	// Hooks
	const searchParams = useSearchParams();
	const stripeParams = usePaymentConfirmationUrlParams(searchParams);
	// Actions
	const onNavArrowClick = (movement: number) => setStepIndex(movement);
	const onPlanCardClick = (plan: IPaymentPlan) => {
		setPlan(plan);
		setStepIndex(1);
	}
	const handleMarkStepAsComplete = () => {
		setStepIndex(2);
		setIsGoNextAllowed(true)
	}
	// Elements
	const StepsDisplay = (
		<Stepper className='stepper' activeStep={1}>
			{steps.map((label, index) => (
				<Step key={label} active={index <= stepIndex}>
					<StepLabel>{label}</StepLabel>
				</Step>
			))}
		</Stepper>
	)
	const BackArrowIcon = (
		(stepIndex == 0 || stepIndex == 2)
			? null
			: <ArrowBackIcon className='step-arrow step-arrow-left' onClick={() => onNavArrowClick(stepIndex - 1)} />
	)
	// Subscription 
	useCheckSubscriptionStatus(Profile?.data, {
		onValid: () => handleMarkStepAsComplete(),
		onFinish: () => setIsLoading(false)
	});
	// Step actions
	const canMoveToSuccessScreen = stripeParams.redirect_status == 'succeeded' && stepIndex != 2;
	if (canMoveToSuccessScreen) handleMarkStepAsComplete();

	// Screens
	const paymentScreens = useMemo(() => {
		return [
			<PlanCardsScreen onSelect={onPlanCardClick} />,
			<PaymentScreen paymentMetadata={{ plan, customer: Profile?.data?.CustomerId }} />,
			<SuccessScreen />
		]
	}, [stepIndex, plan, Profile?.data]);

	useEffect(() => { Profile.refetch() }, []);

	return (
		<PaymentInformationStepContainer>
			<div className='select-plan-container'>
				<div className='steps-display-container'>
					{BackArrowIcon}
					{StepsDisplay}
				</div>
				{isLoading
					? <CircularProgress className='select-plan-loader' />
					: paymentScreens[stepIndex]
				}
			</div>
		</PaymentInformationStepContainer>
	)
}

const PaymentInformationStepContainer = styled(CustomSetupStyle)`
	.select-plan-container {
		max-width: 800px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
		padding: 16px 100px;
		margin: 0 auto;
	}
	.select-plan-container .Mui-active svg  {
		color: #B6863D;
	}
	.steps-display-container {
		width: 100%;
		position: relative;
	}
	.stepper {
		width: 80%;
		margin: 0 auto;
	}
	.step-arrow {
		cursor: pointer;
	}
	.step-arrow-left {
		position: absolute;
		left: 0;
	}
	.select-plan-loader {
		color: #B6863D;
	}

	/* Screen styles */
	// PlanCardsScreen
	.plan-cards {
		display: flex;
		justify-content: space-around;
		gap: 32px;
	}
	// PaymentScreen
	.payment-screen form {
		display: flex;
  		flex-direction: column;
	}
	.payment-screen-button {
		width: 130px;
		margin: 0 auto;
		margin-top: 12px;
	}
	// SuccessScreen
	.success-screen-container {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.success-screen-icons {
		display: flex;
		justify-content: center;
	}
	.success-screen-icons svg {
		font-size: 60px;
		color: #B6863D;
	}
	.success-screen-icons svg:last-child {
		font-size: 50px;
		margin-top: auto;
	}
`;

export default PaymentInformationStep