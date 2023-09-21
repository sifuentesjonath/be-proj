import breakPoints from '@styles/breakpoints';
import { CustomHomeSection } from '@styles/common/sectionStyle';
import mainTheme from '@styles/theme';
import styled from 'styled-components';

export const SteppingContainer = styled(CustomHomeSection)`
/* Title */
.stepping-title h2 {
	font-size: 40px;
	display: flex;
	flex-direction: column;
	gap: 4px;
	text-align: center;
}
.stepping-title .two-first-color {
	color: ${mainTheme.headingPrimaryDark};
}
.stepping-title .two-second-color {
	color: ${mainTheme.headingSecondaryDark};
	font-weight: 400;
}

/* Bubble cards */
.stepping-bubble-cards {
	padding-top: 24px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 auto;
	gap: 24px;
}

@media screen and (min-width: ${breakPoints.tabletMin}px){
	.stepping-bubble-cards {
		row-gap: 40px;
	}
}
@media screen and (min-width: ${breakPoints.tabletMax}px){
	.stepping-bubble-cards {
		width: 80%;
	}
}
@media screen and (min-width: ${breakPoints.laptopSmallMax}px){
	.stepping-bubble-cards {
		row-gap: 120px;
	}
}
@media screen and (min-width: ${breakPoints.laptopMax}px){
	.stepping-bubble-cards {
		width: auto;
	}
}
`;