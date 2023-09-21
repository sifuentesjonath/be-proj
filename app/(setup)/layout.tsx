import React from 'react'
import SetupLayout from '@components/layout/Setup';
import WithSetupStep from '@components/hoc/WithSetupStep';
import WithAuth from '@components/hoc/WithAuth';
import SetupContextProvider from '@components/layout/Setup/SetupContext';

export default function SetupSiteLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<WithAuth>
			<WithSetupStep>
				<SetupContextProvider>
					<SetupLayout>{children}</SetupLayout>
				</SetupContextProvider>
			</WithSetupStep>
		</WithAuth>
	)
}
