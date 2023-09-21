import Link from '@/components/element/Link';
import Button from '@/components/element/buttons/Button';
import mainTheme from '@/styles/theme';
import { FC } from 'react'
import styled from 'styled-components'

interface IFooterCardProps {
	text: string[];
	buttonText: string;
	href: string;
}
const FooterCard: FC<IFooterCardProps> = ({
	text,
	buttonText,
	href,
}) => {
	const texts = text.map((text, index) => (
		<p key={`${text.split(" ")[0]}-${index}`}>{text}</p>
	))
	return (
		<FooterCardContainer>
			<div className='card-content'>
				<div className='card-text'>{texts}</div>
				<div className='card-button'>
					<Link type='button' href={href}>{buttonText}</Link>
				</div>
			</div>
		</FooterCardContainer>
	)
}

const FooterCardContainer = styled.div`
display: inline-block;
padding: 12px;
max-width: 280px;
color: ${mainTheme.textPrimary};

.card-content {
	display: flex;
	flex-direction: column;
	gap: 8px;
}
.card-text {
	display: flex;
	flex-direction: column;
	gap: 4px;
	text-align: center;
}
.card-button {
	margin: 0 auto;
	/* button {
		width: 160px;
	} */
}
`;

export default FooterCard