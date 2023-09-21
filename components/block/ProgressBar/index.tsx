import mainTheme from '@styles/theme';
import { FC } from 'react';
import styled from 'styled-components';

interface IProgressBarProps {
	handleStep: {
		current: number;
		totalSteps: number;
	};
}
const ProgressBar: FC<IProgressBarProps> = ({
	handleStep: { current, totalSteps },
}) => {
	const progressWidth = (current / totalSteps) * 100;
	return (
		<ProgressBarContainer>
			<div className='progress-bar'>
				<div className='progress-bar-display' style={{ width: `${progressWidth}%` }}></div>
			</div>
			<p className='progressbar-title'>Paso {current} de {totalSteps}</p>
		</ProgressBarContainer>
	);
};

export const ProgressBarContainer = styled.div`
	.progress-bar {
		height: 10px;
		border-radius: 1.5rem;
		/* background-color: ${mainTheme.progressBarBackgroundColor}; */
		border: 2px ${mainTheme.progressBarBackgroundColor} solid;
	}
	.progress-bar-display {
		height: 100%;
		border-radius: 1.5rem;
		background-color: ${mainTheme.progressBarColor};
		/* Transition */
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 1000ms;
	}
	.progressbar-title {
		margin-top: 12px;
		text-align: center;
	}
`;

export default ProgressBar;
