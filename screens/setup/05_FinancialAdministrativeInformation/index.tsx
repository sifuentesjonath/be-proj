import { useState } from 'react'
// Components
import Alert, { IAlertProps } from '@components/block/notice/Alert';
import SuppliesScreen from './SuppliesScreen';
// import AdministrativeInfoForm from '@components/form/setup/AdministrativeInformation';
// Stylee
import styled from 'styled-components'
import mainTheme from '@styles/theme';
import { CustomSetupStyle } from '@styles/common/setupStyle';

const FinancialAndAdministrativeInformationStep = () => {
	const [alert, setAlert] = useState<{ isOpen: boolean, props: IAlertProps }>({ isOpen: false, props: undefined });
	const handleCloseAlert = () => setAlert({ isOpen: false, props: undefined });
	const handleError = (error: string) => {
		setAlert({
			isOpen: true,
			props: {
				type: 'warning',
				onClose: () => handleCloseAlert(),
				title: 'No se pueden guardar campos vacíos',
				children: <p>{error}</p>
			}
		})
	}
	return (
		<>
			<AdministrativeInformationStepContainer>
				<div className='administrative-inf-box'>
					<h1>Información administrativa</h1>
					<p>Cuentanos un poco del inventario de tu negocio</p>
					{/* <AdministrativeInfoForm /> */}
					<SuppliesScreen onError={handleError} />
				</div>
			</AdministrativeInformationStepContainer>

			{alert.isOpen && <Alert onClose={() => setAlert({ isOpen: false, props: undefined })} {...alert.props} />}
		</>
	)
}

const AdministrativeInformationStepContainer = styled(CustomSetupStyle)`
.administrative-inf-box {
	max-width: 610px;
	margin: 0 auto;
	padding: 16px;
	border: 1px ${mainTheme.primaryBorder} solid;
	border-radius: 8px;
}	
.administrative-inf-box p {
	color: ${mainTheme.textSecondary};
	margin-bottom: 12px;
}
`;

export default FinancialAndAdministrativeInformationStep