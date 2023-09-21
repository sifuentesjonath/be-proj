import BusinessInformationForm from "@components/form/setup/BusinessInformation"
import { CustomSetupStyle } from "@styles/common/setupStyle";
import mainTheme from "@styles/theme";
import styled from 'styled-components'

const BusinessInformationStep = () => {
	return (
		<BusinessInformationStepContainer>
			<div className="business-inf-box">
				<h1>Información del negocio</h1>
				<p>Cuentanos sobre tu negocio</p>
				<BusinessInformationForm />
			</div>
		</BusinessInformationStepContainer>
	)
}

const BusinessInformationStepContainer = styled(CustomSetupStyle)`
.business-inf-box {
	max-width: 360px;
	margin: 0 auto;
	padding: 16px;
	border: 1px ${mainTheme.primaryBorder} solid;
	border-radius: 8px;
}	
.business-inf-box p {
	color: ${mainTheme.textSecondary};
	margin-bottom: 12px;
}
	
`;

export default BusinessInformationStep