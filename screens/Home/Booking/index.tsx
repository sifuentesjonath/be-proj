// Components
import WindowFrame from '@/components/block/frame/Window';
import BookingCard from '@/components/block/cards/Booking';
import Link from '@/components/element/Link';
import TwoColorText from '@/components/element/text/TwoColorText';
// Image
import barberChairsImage from '@/public/png/frame_barber_chairs.png'
// Utils
import paths from '@/utils/paths';
// Style
import styled from 'styled-components'
import mainTheme from '@/styles/theme';
import fontSizes from '@styles/fontSizes';
import breakPoints from '@styles/breakpoints';
import { CustomHomeSection } from '@styles/common/sectionStyle';
import homeComponentIds from '../componentIds';

const Booking = () => {
	const texts = {
		first: 'Nulla mne pur',
		second: 'condintum lorem',
	}
	const image = {
		src: barberChairsImage,
		alt: 'Barber chairs'
	}
	const anchor = {
		title: 'Booking Now',
		href: paths.home
	}
	return (
		<BookingContainer id={homeComponentIds.booking}>
			<div className='booking-box'>
				<div className='booking-description'>
					<TwoColorText wrapper='h2' text={texts} />
					<h3>Proin imperdiet est libero, et laoreet lorem semper quis</h3>
					<p>Donec vel justo at orci accumsan molestie quis in sapien. Vivamus suscipit vestibulum gravida. Donec nec metus fermentum, mattis diam quis, ultricies dolor. Sed non enim leo. Nullam urna felis, rhoncus cursus eros vel, ultrices tempus ligula.</p>
					<p>Donec vel justo at orci accumsan molestie quis in sapien. Vivamus suscipit vestibulum gravida. Donec nec metus fermentum, mattis diam quis, ultricies dolor.</p>
					<Link type='button' href={paths.home}>Learn More</Link>
				</div>
				<div className='booking-window'>
					<WindowFrame framed image={image} />
					<BookingCard title='For Booking' description='convallis nunc eu congue volutpat.' anchor={anchor} />
				</div>
			</div>
		</BookingContainer>
	)
}

const BookingContainer = styled(CustomHomeSection)`
display: flex;
justify-content: center;
height: auto;

.booking-box {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin: 0 auto;
	gap: 70px;
}

.booking-description {
	max-width: 515px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
}
.booking-description h2 {
	font-size: ${fontSizes.mediumHeading}px;
	display: flex;
	flex-direction: column;
	gap: 4px;
}	
.booking-description h3 {
	font-size: ${fontSizes.smallText}px;
}
.booking-description p {
	color: ${mainTheme.textSecondary};
}
.booking-description .two-first-color {
	color: ${mainTheme.headingPrimaryDark};
}
.booking-description .two-second-color {
	font-weight: 400;
}
.booking-description a {
	margin-top: 12px;
	max-width: 140px;
}

.booking-window {
	display: none;
	position: relative;
}
.bookingCard {
	position: absolute;
	bottom: 0;
	left: -42px;
	min-height: 150px;
	max-width: 130px;
	h3 {
		margin: 0;
		text-align: center;
	}
	p {
		font-size: ${fontSizes.smallText}px;
		text-align: center;
	}
	a {
		font-size: ${fontSizes.smallerText}px;
	}
}

@media screen and (min-width: ${breakPoints.tabletMin}px){
	.booking-window {
		display: block;
	}
}
@media screen and (min-width: ${breakPoints.tabletMax}px){
	min-height: 520px;
}
`;

export default Booking