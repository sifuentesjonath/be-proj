import breakPoints from '@styles/breakpoints';
import styled from 'styled-components';

interface ICustomHomeSection {
	is_full_background?: boolean;
}
export const CustomHomeSection = styled.section<ICustomHomeSection>`
	padding: 8px 24px;

	@media screen and (min-width: ${breakPoints.tabletMin}px) {
		padding: 12px 28px;
	}

	@media screen and (min-width: ${breakPoints.desktop}px) {
		width: ${({is_full_background}) => is_full_background ? 'auto' : '1300px' };
		margin: 0 auto;
	}
`;

const landingBackgroundUrl = 'png/landing_header_background.png'
export const CustomBackgroundTriangleFrame = styled.div<{ height?: string }>`
	background-image: linear-gradient(rgba(0, 0, 20, 0.5), rgba(0, 0, 20, 0.5)), url(${landingBackgroundUrl});
	clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%);
	background-size: cover;
	height: ${({ height }) => height ?? '550px' };
	width: 100%;
`;