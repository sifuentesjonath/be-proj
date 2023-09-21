import Button from '@components/element/buttons/Button';
import { SubscriptionPlan } from '@service/paymentPlan/type';
import mainTheme from '@styles/theme'
import { FC } from 'react'
import styled from 'styled-components'

export interface IPaymentPlan {
	id: number;
	plan: string;
	priceId: string;
	type: 'month' | 'year';
}
interface IPlanCardProps extends SubscriptionPlan {
	onClick: (plan: IPaymentPlan) => void;
}
const PlanCard: FC<IPlanCardProps> = ({
	Id,
	Name,
	Description,
	MonthPriceId,
	YearPriceId,
	MonthlyPrice,
	YearlyPrice,
	onClick
}) => {
	const plan = { id: Id, plan: Name };
	const handleMonthlyPaymentClick = () => onClick({ ...plan, priceId: MonthPriceId, type: 'month' });
	const handleYearlyPaymentClick = () => onClick({ ...plan, priceId: YearPriceId, type: 'year' });
	return (
		<PlanCardContainer>
			<div className='plan-card-content'>
				<h3>
					{Name}
					<span>Plan</span>
				</h3>
				<p>{Description}</p>
				<div className='payments-plans-container'>
					<h4>
						{MonthlyPrice} MXN
						<span>per month</span>
					</h4>
					<h4>
						{YearlyPrice} MXN
						<span>per year</span>
					</h4>
				</div>
				<div className='payment-plans-buttons'>
					<Button onClick={handleMonthlyPaymentClick}>Choose Month Plan</Button>
					<Button onClick={handleYearlyPaymentClick}>Choose Year Plan</Button>
				</div>
			</div>
		</PlanCardContainer>
	)
}

export const PlanCardContainer = styled.div`
	max-width: 400px;
	text-decoration: none;

	border: 1px solid ${mainTheme.headingPrimaryDark};
	border-radius: 8px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;

	.plan-card-content {
		background-color: ${mainTheme.secondaryBackground};
		padding: 8px 18px;
		border-radius: 8px;
	}

	.payments-plans-container,
	.payment-plans-buttons {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.payment-plans-buttons {
		gap: 8px;
	}
	.payment-plans-buttons button {
		width: 100%;
	}

	h3 {
		color: ${mainTheme.headingPrimaryDark};
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 24px;
	}

	p {
		color: ${mainTheme.textTertiary};
		padding: 0 8px;
		line-height: 23px;
		text-align: center;
	}

	h4 {
		color: ${mainTheme.textSecondary};
		display: flex;
		align-items: center;
		justify-content: space-around;
		gap: 8px;
	}
	h4 span {
		width: 40px;
	}
`;

export default PlanCard