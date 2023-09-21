import { IImageProps } from '@/types';
import mainTheme from '@styles/theme';
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import styled from 'styled-components'

interface IFeatureCardProps {
	image: IImageProps;
	title: string;
	description: string;
}
const FeatureCard: FC<IFeatureCardProps> = ({
	image: { alt, src },
	title,
	description
}) => {
	return (
		<FeatureCardContainer>
			<div className='card-image-container'>
				<Image className='card-image' alt={alt} src={src} fill />
			</div>
			<div className='card-description'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</FeatureCardContainer>
	)
}

const FeatureCardContainer = styled.div`
max-width: 260px;
height: auto;

padding: 24px 10px 55px;
border-radius: 4px;
background-color: ${mainTheme.cardBackground};
box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

display: flex;
flex-direction: column;

.card-image-container {
	height: 190px;
	position: relative;
}
.card-image {
	margin: auto;
}
.card-description {
	text-align: center;
	h3 {
		font-size: 14px;
	}
	p {
		color: ${mainTheme.textSecondary};
		font-size: 14px;
	}
}	
`;

export default FeatureCard