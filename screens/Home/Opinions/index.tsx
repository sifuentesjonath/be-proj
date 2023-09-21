// Component
import CitationCard from '@components/block/cards/Citation';
import WindowFrame from '@components/block/frame/Window';
import TwoColorText from '@components/element/text/TwoColorText';
// Style
import styled from 'styled-components'
import womanWork from '@/public/jpg/frame_woman_with_phone.jpg'
import mainTheme from '@styles/theme';
import homeComponentIds from '../componentIds';
import { CustomHomeSection } from '@styles/common/sectionStyle';
import fontSizes from '@styles/fontSizes';
import breakPoints from '@styles/breakpoints';

const Opinions = () => {
	const image = {
		src: womanWork,
		alt: 'Woman work'
	}
	const texts = {
		first: 'Vestibulum vel',
		second: 'tincidunt pellent',
	}
	const citeText = 'Donec vel justo at orci accumsan molestie quis in sapien. Vivamus suscipit vestibulum gravida. Donec nec metus fermentum, mattis diam quis, ultricies dolor.ed non enim leo. Nullam urna felis, rhoncus cursus eros vel, ultrices tempus ligula. Ut sollicitudin magna sit amet leo'
	return (
		<OpinionsContainer id={homeComponentIds.opinions}>
			<div className='opinions-box'>
				<div className='opinions-description'>
					<TwoColorText wrapper='h2' text={texts} />
					<p className='opinions-paragraph'>Donec vel justo at orci accumsan moleste quis in sapien. Vivamus suscipit vestibulum gravida.</p>
					<CitationCard author='Esther B. Brock' text={citeText} />
				</div>
				<div className='opinions-window-frame'>
					<WindowFrame image={image} />
				</div>
			</div>
		</OpinionsContainer>
	)
}

const OpinionsContainer = styled(CustomHomeSection)`
.opinions-box {
	display: flex;
	flex-wrap: wrap;
	flex-direction: row-reverse;
	justify-content: center;
	gap: 24px;
}
.opinions-description {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 12px;
}
.opinions-description h2 {
	display: flex;
	font-size: ${fontSizes.mediumHeading}px;
	flex-direction: column;
}
.opinions-description p {
	font-size: ${fontSizes.smallText}px;
}
.opinions-paragraph {
	max-width: 440px;
}
.opinions-description .two-first-color {
	color: ${mainTheme.headingPrimaryDark};
}
.opinions-description .two-second-color {
	font-weight: 400;
}

.opinions-window-frame {
	display: none;
}
@media screen and (min-width: ${breakPoints.tabletMin}px){
	.opinions-window-frame {
		display: block;
	}
}
`;

export default Opinions