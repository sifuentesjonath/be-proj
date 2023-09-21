"use client"
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import paths, { getSetupStepPath } from '@utils/paths';
import { updateProfileStep } from '@service/profile';
import { Profile } from '@service/profile/type';
import useProfileData from '@hooks/data/useProfileData';
import { UseQueryResult } from 'react-query';

interface ISetupContext {
	isGoNextAllowed: boolean;
	setIsGoNextAllowed: Dispatch<SetStateAction<boolean>>;
	handleGoBack: () => Promise<void>;
	handleGoNext: () => Promise<void>;
	Profile: UseQueryResult<Profile, unknown>
}
export const SetupContext = createContext<ISetupContext>({} as ISetupContext);
const SetupContextProvider = ({ children }) => {
	const [isGoNextAllowed, setIsGoNextAllowed] = useState(false);
	const router = useRouter();
	const currentStep = getSetupStepPath(usePathname());

	const handleGoBack = async () => {
		const updated = await updateProfileStep(`${currentStep - 1}`);
		if (updated) router.push(`${paths.setup}/${currentStep - 1}`);
	}
	const handleGoNext = async () => {
		const updated = await updateProfileStep(`${currentStep + 1}`);
		if (updated) router.push(`${paths.setup}/${currentStep + 1}`);
	}

	const Profile = useProfileData({ refetchOnWindowFocus: false });

	return (
		<SetupContext.Provider value={{ isGoNextAllowed, setIsGoNextAllowed, handleGoBack, handleGoNext, Profile }}>
			{children}
		</SetupContext.Provider>
	);
};

export default SetupContextProvider;