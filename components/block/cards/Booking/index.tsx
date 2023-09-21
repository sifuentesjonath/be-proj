import Link from '@/components/element/Link';
import mainTheme from '@/styles/theme';
import { FC } from 'react'
import styled from 'styled-components'

interface IBookingCardProps {
	title: string;
	description: string;
	anchor: {
		title: string;
		href: string;
	}
}
const BookingCard: FC<IBookingCardProps> = ({
	title,
	description,
	anchor,
}) => {
	return (
		<BookingCardContainer className='bookingCard'>
			<h3>{title}</h3>
			<p>{description}</p>
			<Link type='button' href={anchor.href}>{anchor.title}</Link>
		</BookingCardContainer>
	)
}

const BookingCardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

padding: 25px;
border-radius: 4px;

background-color: ${mainTheme.cardBackground};
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

.card-body {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	margin-top: auto;

`;

export default BookingCard