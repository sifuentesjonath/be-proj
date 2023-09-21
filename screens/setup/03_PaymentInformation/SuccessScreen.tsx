import { useContext } from 'react';
import { SetupContext } from '@components/layout/Setup/SetupContext';
// Component
import Button from '@components/element/buttons/Button';
// Icons
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

const SuccessScreen = () => {
	const { handleGoNext } = useContext(SetupContext);
	return (
		<div className='success-screen-container'>
			<div className='success-screen-icons'>
				<SentimentSatisfiedAltIcon className='face-icon' />
				<LoyaltyIcon className='label-icon' />
			</div>
			<h2>¡Subscripción exitosa!</h2>
			<Button onClick={handleGoNext}>Seguir adelante</Button>
		</div>
	)
}

export default SuccessScreen