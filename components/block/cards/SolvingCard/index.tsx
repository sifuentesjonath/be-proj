import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import styled from 'styled-components'
import { IImageProps } from '@/types';

interface ISolvingCardProps {
	image: IImageProps
	title: string;
}
const SolvingCard: FC<ISolvingCardProps> = ({
	image: { src, alt },
	title
}) => {
	return (
		<SolvingCardContainer>
			<div className='solving-card-image'>
				<Image src={src} alt={alt} width={75} height={75} />
			</div>
			<h3 className='solving-card-title'>{title}</h3>
		</SolvingCardContainer>
	)
}

const SolvingCardContainer = styled.div`
display: flex;
align-items: center;
gap: 8px;
.solving-card-title {
	font-size: 22px;
	max-width: 180px;
}
`;

export default SolvingCard