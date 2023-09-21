import TwoColorText from '@/components/element/text/TwoColorText';
import mainTheme from '@/styles/theme';
import breakPoints from '@styles/breakpoints';
import { CustomHomeSection } from '@styles/common/sectionStyle';
import fontSizes from '@styles/fontSizes';
import React from 'react'
import styled from 'styled-components'
import homeComponentIds from '../componentIds';
import SolvingCards from './SolvingCards';

const SolvingProcess = () => {
	const texts = {
		first: 'Nullam Nec',
		second: 'Purus Diam'
	}
	return (
		<SolvingProcessContainer id={homeComponentIds.solvingProcess}>
			<div className='solving-box'>
				<div className='solving-title-container'>
					<TwoColorText wrapper='h2' text={texts} />
					<p>Nuc fermentum blandit arcu, in tempus lorem hendrerit ac. Morbi egestas malesuada pretium. Phasellus ultrices sit amet ipsum vitae porta.</p>
				</div>
				<div className='solving-cards-container'>
					<SolvingCards />
				</div>
			</div>
		</SolvingProcessContainer>
	)
}

const SolvingProcessContainer = styled(CustomHomeSection)`
.solving-box {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 24px;
	gap: 38px;
}

/* Title container */
.solving-title-container {
	text-align: center;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 32px;
}
.solving-title-container h2 {
	display: flex;
	justify-content: center;
	flex-direction: column;
	font-size: ${fontSizes.mediumHeading}px;
}
/* .solving-title-container h2 {
	display: flex;
	justify-content: center;
	gap: 8px;
	font-size: 50px;
	margin: 41.5px 0;
} */
.solving-title-container p {
	text-align: center;
	max-width: 600px;
	color: ${mainTheme.textSecondary};
	font-size: ${fontSizes.smallText}px;
}
.two-first-color {
	color: ${mainTheme.headingPrimary};
}
.two-second-color {
	color: ${mainTheme.headingSecondaryDark};
	font-weight: 400;
}
/* Solving Cards container */
.solving-cards-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
}

@media screen and (min-width: ${breakPoints.tabletMax}px){
	.solving-cards-container {
		gap: 50px;
	}
}
`;

export default SolvingProcess