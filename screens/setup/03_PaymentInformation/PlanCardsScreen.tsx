import { FC, useEffect, useState } from 'react'
// Components
import PlanCard, { IPaymentPlan } from '@components/block/cards/Plan';
// Service
import { getPaymentPlans } from '@service/paymentPlan';
import { SubscriptionPlan } from '@service/paymentPlan/type';

interface IPlanCardsScreenProps {
	onSelect: (plan: IPaymentPlan) => void;
}
const PlanCardsScreen: FC<IPlanCardsScreenProps> = ({
	onSelect
}) => {
	const [plans, setPlans] = useState<SubscriptionPlan[]>([] as SubscriptionPlan[])
	useEffect(() => {
		getPaymentPlans().then(data => setPlans(data))
	}, [])
	return (
		<div className='plan-cards'>
			{plans.map((props) => (
				<PlanCard key={props.Name} onClick={onSelect} {...props} />
			))}
		</div>
	)
}

export default PlanCardsScreen