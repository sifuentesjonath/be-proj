import OperativeInformationForm from '@components/form/setup/OperativeInformation';
import { CustomSetupStyle } from '@styles/common/setupStyle';
import mainTheme from '@styles/theme';
import styled from 'styled-components'

const OperativeInformationStep = () => {
	return (
		<OperativeInformationStepContainer>
			<div className='operative-inf-box'>
				<h1>Información operativa</h1>
				<p>Cuentanos como manejas tu negocio</p>
				<OperativeInformationForm />
			</div>
		</OperativeInformationStepContainer>
	)
}

const OperativeInformationStepContainer = styled(CustomSetupStyle)`
.operative-inf-box {
	max-width: 360px;
	margin: 0 auto;
	padding: 16px;
	border: 1px ${mainTheme.primaryBorder} solid;
	border-radius: 8px;
}	
.operative-inf-box p {
	color: ${mainTheme.textSecondary};
	margin-bottom: 12px;
}
`;

export default OperativeInformationStep