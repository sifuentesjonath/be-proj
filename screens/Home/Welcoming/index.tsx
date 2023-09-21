// Components
import Image from 'next/image';
import Link from "@/components/element/Link";
import TwoColorText from '@/components/element/text/TwoColorText';
// Utils
import homeComponentIds from '../componentIds';
import paths from "@/utils/paths";
// Styles
import styled from 'styled-components'
import mainTheme from '@/styles/theme';
import breakPoints from '@styles/breakpoints';
import fontSizes from '@styles/fontSizes';
import { CustomBackgroundTriangleFrame } from '@styles/common/sectionStyle';

const landingBackgroundUrl = 'png/landing_header_background.png'
const galaxyImage = 'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg'

const Welcoming = () => {
	const text = {
		first: 'Feel Your New',
		second: 'Nelson Style',
	}

	return (
		<WelcomingContainer id={homeComponentIds.welcoming}>
			<CustomBackgroundTriangleFrame className='welcoming-background-box'>
				<div className="welcoming-title-container">
					<TwoColorText wrapper="h1" text={text} />
					<p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, tempus congue ullamcorper volutpat enim risus donec sed id.</p>
					<Link type="button" href={paths.home}>Get in touch</Link>
				</div>
			</CustomBackgroundTriangleFrame>
			<div className='welcoming-image-box'>
				<div className='welcoming-images-container'>
					<Image className='pressed-down-image' src={galaxyImage} alt='galaxy image' width={320} height={190} />
					<Image className='pressed-down-image' src={galaxyImage} alt='galaxy image' width={320} height={190} />
					<Image src={galaxyImage} alt='galaxy image' width={320} height={190} />
				</div>
			</div>
		</WelcomingContainer>
	)
}

const WelcomingContainer = styled.section`
position: relative;

display: flex;
flex-direction: column;
align-items: center;
height: 700px;

/* Background box */
.welcoming-background-box {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
/* TODO: Add a blue_desaturated_transparent filter to bg-image */
/* .welcoming-background-box ::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${mainTheme.primaryBackgroundTransparent};
	mix-blend-mode: multiply;
} */
.welcoming-title-container {
	width: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.welcoming-title-container a {
	width: 140px;
	margin: 0 auto;
	margin-top: 44px;
}
.welcoming-title-container h1 {
	display: flex;
	flex-direction: column;
	text-align: center;
	font-size: ${fontSizes.bigHeading}px;
	font-weight: 500;
}
.welcoming-title-container .two-first-color {
	color: ${mainTheme.headingPrimary};
}
.welcoming-title-container .two-second-color {
	color: ${mainTheme.headingSecondary};
}
.description {
	font-size: ${fontSizes.smallText};
	text-align: center;
	color: ${mainTheme.textSecondary};
	max-width: 305px;
	margin: 12px 0;
}

/* Images box */

.welcoming-image-box {
	position: absolute;
	bottom: 60px;
}

.welcoming-images-container {
	display: none;
}

.welcoming-images-container .pressed-down-image {
	margin-top: 20px;
}

@media screen and (min-width: ${breakPoints.laptopSmallMax}px) {
	.welcoming-images-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 50px;
	}
}

`;

export default Welcoming