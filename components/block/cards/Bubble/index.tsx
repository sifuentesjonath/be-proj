import { IImageProps } from '@/types'
import breakPoints from '@styles/breakpoints';
import fontSizes from '@styles/fontSizes';
import mainTheme from '@styles/theme';
import Image from 'next/image';
import { FC } from 'react'
import styled from 'styled-components'

interface IBubbleCardProps {
	image: IImageProps;
	title: string;
	description: string;
}
const BubbleCard: FC<IBubbleCardProps> = ({
	image: { alt, src },
	title,
	description
}) => {
	return (
		<BubbleCardContainer>
			<div className='card-box'>
				<div className='card-image-bubble'>
					<Image className='card-image' alt={alt} src={src} fill />
				</div>
				<div className='card-description'>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</div>
		</BubbleCardContainer>
	)
}

const BubbleCardContainer = styled.div`
.card-box,
.card-description {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
}
/* Card image & bubble image */
.card-image-bubble {
	position: relative;
	border-radius: 50%;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
	padding: 16px;
	height: 60px;
	width: 60px;
}
.card-image {
	height: 50% !important;
	width: 50% !important;
	margin: auto;
}

/* Card description */
.card-description {
	text-align: center;
	h3 {
		font-size: ${fontSizes.smallText}px;
	}
	p {
		font-size: ${fontSizes.smallerText}px;
		max-width: 160px;
		color: ${mainTheme.textSecondary};
	}
}
@media screen and (min-width: ${breakPoints.tabletMin}px){
	.card-image-bubble {
		height: 90px;
		width: 90px;
	}
}
@media screen and (min-width: ${breakPoints.tabletMax}px){
	.card-image-bubble {
		height: 180px;
		width: 180px;
	}
}
`;

export default BubbleCard