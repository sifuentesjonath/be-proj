// Components
import TwoColorText from '@components/element/text/TwoColorText';
import WindowFrame from '@components/block/frame/Window';
import JoinForm from '@/components/form/Join';
// Images
import barberChairsImage from '@/public/png/frame_barber_chairs.png'
// Utils
import homeComponentIds from '../componentIds';
// Style
import styled from 'styled-components'
import mainTheme from '@/styles/theme';
import fontSizes from '@styles/fontSizes';
import breakPoints from '@styles/breakpoints';
import { CustomHomeSection } from '@styles/common/sectionStyle';

const JoinUs = () => {
	const texts = {
		first: 'Ready To Join',
		second: 'With Us'
	}
	const image = {
		src: barberChairsImage,
		alt: 'Barber chairs'
	}
	return (
		<JoinUsContainer id={homeComponentIds.joinUs} is_full_background>
			<div className='join-box'>
				<div className='join-description'>
					<div className='join-description-heading'>
						<TwoColorText wrapper='h2' text={texts} />
						<p className='join-description-paragraph'>Vivamus Vel Mi Id Nibh Dapibus Luctus Vitae Eu Odio. Mauris Cursus Sodales Ipsum Commodo.</p>
					</div>
					<div className='join-description-form'>
						<JoinForm />
					</div>
				</div>
				<div className='join-frame'>
					<WindowFrame framed image={image} />
				</div>
			</div>
		</JoinUsContainer>
	)
}

const JoinUsContainer = styled(CustomHomeSection)`
background-color: ${mainTheme.secondaryBackground};

.join-box {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row-reverse;
	gap: 70px;
}

.join-description-heading  {
	max-width: 300px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	font-size: ${fontSizes.mediumText}px;
}
.join-description-heading h2 {
	font-size: ${fontSizes.smallHeading}px;
	display: flex;
	flex-direction: column;
	gap: 2px;
}
.join-description-heading .two-first-color {
	color: ${mainTheme.headingPrimary};
}
.join-description-heading .two-second-color {
	color: ${mainTheme.headingSecondaryDark};
	font-weight: 400;
}
.join-description-paragraph {
	max-width: 380px;
	margin: 8px 0 24px;
	color: ${mainTheme.textSecondary};
}

.join-frame {
	display: none;
}

@media screen and (min-width: ${breakPoints.tabletMax}px){
	.join-frame {
		display: block;
	}
}
`;

export default JoinUs