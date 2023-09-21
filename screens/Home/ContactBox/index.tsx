// Components
import Link from '@/components/element/Link';
import TwoColorText from '@/components/element/text/TwoColorText';
// Utils
import paths from '@/utils/paths';
import homeComponentIds from '../componentIds';
// Style
import styled from 'styled-components'
import { BoxStyle } from '@/styles/common/boxStyle';
import mainTheme from '@/styles/theme';
import { CustomHomeSection } from '@styles/common/sectionStyle';
import fontSizes from '@styles/fontSizes';

const ContactBox = () => {
	const texts = {
		first: 'How Can We',
		second: 'Help You?'
	}
	return (
		<ContactBoxContainer id={homeComponentIds.contactBox}>
			<div className='contact-box-content'>
				<TwoColorText wrapper='h2' text={texts} />
				<div className='contact-box-description'>
					<p>Donec vel justo at orci accumsan moleste quis in sapien. Vivamus suscipit vestibulum gravida.</p>
					<Link type='button' href={paths.home}>Contact us</Link>
				</div>
			</div>
		</ContactBoxContainer>
	)
}

const ContactBoxContainer = styled(CustomHomeSection)`
display: flex;
justify-content: center;
margin-top: 80px;
margin-bottom: 80px;

.contact-box-content {
	${BoxStyle};
	padding: 40px 60px;
	
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 24px;

	min-height: 150px;
}
/* Two text */
.contact-box-content h2 {
	font-size: ${fontSizes.bigHeading}px;
	display: flex;
	flex-direction: column;
	gap: 4px;
}
.two-first-color {
	color: ${mainTheme.headingPrimary};
}
.two-second-color {
	color: ${mainTheme.headingSecondary};
}

.contact-box-description {
	max-width: 423px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 30px;
	p {
		font-size: ${fontSizes.mediumText}px;
	}
	a {
		max-width: 130px;
	}
}
`;

export default ContactBox