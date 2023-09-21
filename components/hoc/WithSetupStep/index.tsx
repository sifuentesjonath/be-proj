"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getProfile } from '@service/profile';
import { usePathname } from 'next/navigation';
import paths, { getSetupStepPath } from '@utils/paths';

/** Controls the setup positioning to position the user in the correct step */
const WithSetupStep = ({ children }) => {
	const router = useRouter();
	const pathName = usePathname();

	useEffect(() => { // Check wether user is in correct step
		const checkProfileStep = async () => {
			const currentStep = getSetupStepPath(pathName);
			const { Step } = await getProfile();
			if (currentStep != parseInt(Step))
				router.replace(`${paths.setup}/${Step}`);
		}
		checkProfileStep();
	}, [pathName]);

	return children;
};

export default WithSetupStep;