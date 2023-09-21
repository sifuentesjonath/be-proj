import { CustomHomeSection } from '@styles/common/sectionStyle';
import fontSizes from '@styles/fontSizes';
import mainTheme from '@styles/theme';
import styled from 'styled-components';

export const FeaturesContainer = styled(CustomHomeSection)`
.features-box {
	display: flex;
	flex-direction: column;
	gap: 32px;
}
.features-title {
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
}
.features-title p {
	max-width: 450px;
	color: ${mainTheme.textSecondary};
}
.features-title h2 {
	font-size: ${fontSizes.mediumHeading}px;
	display: flex;
	flex-direction: column;
	gap: 4px;
}
.features-title .two-first-color {
	color: ${mainTheme.headingPrimary};
}
.features-title .two-second-color {
	color: ${mainTheme.headingSecondaryDark};
	font-weight: 400;
}

/* Feature cards */
.features-cards-container {
	display: grid;
	/* This rules makes responsive in a single line! */
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	justify-items: center;
	gap: 24px;
}
`;
