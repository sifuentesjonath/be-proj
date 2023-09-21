export interface SubscriptionPlan {
	Id: number;
	Name: string;
	Description: string;
	MonthPriceId: string;
	YearPriceId: string;

	MonthlyPrice: number;
	YearlyPrice: number;
}
