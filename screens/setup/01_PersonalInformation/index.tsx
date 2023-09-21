import PersonalInformationForm from '@components/form/setup/PersonalInformation';
import { CustomSetupStyle } from '@styles/common/setupStyle';
import mainTheme from '@styles/theme';
import styled from 'styled-components'

const PersonalInformationStep = () => {
	return (
		<PersonalInformationStepContainer>
			<div className='personal-inf-box'>
				<h1>Información personal</h1>
				<PersonalInformationForm />
			</div>
		</PersonalInformationStepContainer>
	)
}

const PersonalInformationStepContainer = styled(CustomSetupStyle)`
.personal-inf-box {
	max-width: 360px;
	margin: 0 auto;
	padding: 16px;
	border: 1px ${mainTheme.primaryBorder} solid;
	border-radius: 8px;
}	
.personal-inf-box h1 {
	margin-bottom: 12px;
}
`;

export default PersonalInformationStep