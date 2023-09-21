import { useState, useEffect } from "react";
// Service
import { getSubscription } from "@service/payments";
// Types
import { Profile } from "@service/profile/type";
import { Subscription } from "@service/payments/type";

interface IUseCheckSubscriptionOptions {
	onValid?: (subscription: Subscription) => void;
	onFinish?: () => void;
}
export default function useCheckSubscriptionStatus(profile: Profile, options?: IUseCheckSubscriptionOptions){
	const [isSubscriptionActive, setIsSubscriptionActive] = useState(false);

	const checkSubscription = async () => {
		if (profile.CustomerId) {
			const subscription = await getSubscription(profile.CustomerId);
			if (subscription[0]) {
				const isActiveSubscription = subscription[0].status == 'active';
				if (isActiveSubscription) {
					setIsSubscriptionActive(true);
					options?.onValid(subscription[0]);
				}
			}
		}
		options?.onFinish();
	}

	useEffect(() => {
		if (!profile) return;
		checkSubscription();
	}, [profile]);

	return {
		isActive: isSubscriptionActive
	}
}