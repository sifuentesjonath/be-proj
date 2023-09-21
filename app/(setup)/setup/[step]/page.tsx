"use client"
import { useMemo, FC } from "react"
import PersonalInformationStep from "@screens/setup/01_PersonalInformation"
import BusinessInformationStep from "@screens/setup/02_BusinessInformation"
import PaymentInformationStep from "@screens/setup/03_PaymentInformation"
import OperativeInformationStep from "@screens/setup/04_OperativeInformation"
import FinancialAndAdministrativeInformationStep from "@screens/setup/05_FinancialAdministrativeInformation"

const SetupPage = ({ params }: { params: { step: string } }) => {
	const StepScreen: FC = useMemo(() => {
		const screens = {
			"1": PersonalInformationStep,
			"2": BusinessInformationStep,
			"3": PaymentInformationStep,
			"4": OperativeInformationStep,
			"5": FinancialAndAdministrativeInformationStep
		}
		return screens[params.step];
	}, [params.step])

	return (
		<StepScreen />
	)
}

export default SetupPage