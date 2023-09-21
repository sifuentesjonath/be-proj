'use client';
import { usePathname } from 'next/navigation';
// Context
import { useContext } from 'react';
import { SetupContext } from './SetupContext';
// Components
import SetupHeader from '@components/common/Header/SetupHeader';
import ProgressBar from '@components/block/ProgressBar';
import NavigateButton from '@components/element/buttons/Navigate';
// Utils
import breakPoints from '@styles/breakpoints';
import { getSetupStepPath } from '@utils/paths';
// Style
import styled from 'styled-components'

const SetupLayout = (props) => {
	const currentStep = getSetupStepPath(usePathname());
	const { isGoNextAllowed, handleGoBack, handleGoNext } = useContext(SetupContext)

	const navigationButtonBack = currentStep != 1
		? <NavigateButton onClick={handleGoBack} className='button-position-back' buttonType='prev'>Anterior</NavigateButton>
		: null;

	const navigationButtonNext = currentStep != 5
		? <NavigateButton disabled={!isGoNextAllowed} onClick={handleGoNext} className='button-position-next' buttonType='next'>Siguiente</NavigateButton>
		: null;

	return (
		<>
			<SetupHeader />
			<SetupLayoutContainer>
				<div className='top-content'>
					<div className='progress-bar-container'>
						<ProgressBar handleStep={{ current: currentStep, totalSteps: 5 }} />
					</div>
					<div className='navigation-buttons'>
						{navigationButtonBack}
						{navigationButtonNext}
					</div>
				</div>
				{props.children}
			</SetupLayoutContainer>
		</>
	);
};

const SetupLayoutContainer = styled.div`
	position: relative;

	.progress-bar-container {
		width: 40%;
		margin: 0 auto;
		padding-top: 12px;
		/* padding: 12px 0; */
	}

	/* Navigation buttons */

	.navigation-buttons {
		padding: 8px 0;
		display: flex;
		justify-content: space-around;
	}

	@media screen and (min-width: ${breakPoints.tabletMax}px){
		height: calc(100vh - 90px);
		.button-position-back,
		.button-position-next {
			position: absolute;
			bottom: 30px;
		}
		.button-position-back {
			left: 20px;
		}

		.button-position-next {
			right: 20px;
		} 
	}
`;

export default SetupLayout;
