import breakPoints from '@styles/breakpoints';
import styled from 'styled-components';

export const CustomSetupStyle = styled.div`
	padding: 8px 24px;

	@media screen and (min-width: ${breakPoints.tabletMin}px) {
		padding: 12px 28px;
	}

	@media screen and (min-width: ${breakPoints.desktop}px) {
		width: 1300px;
		margin: 0 auto;
	}
`;