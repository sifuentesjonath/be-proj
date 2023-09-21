import { FC } from 'react'
import { IImageProps } from '@/types'
import styled, { css } from 'styled-components'
import Image from 'next/image';
import mainTheme from '@/styles/theme';

interface IWindowFrameProps {
	image: IImageProps;
	framed?: boolean;
}
const WindowFrame: FC<IWindowFrameProps> = ({
	image: { alt, src },
	framed = false
}) => {
	return (
		<WindowFrameContainer is_framed={framed}>
			<div className='frame'>
				<Image className='image-in-frame' fill alt={alt} src={src} />
			</div>
		</WindowFrameContainer>
	)
}

const framed = css`
/* FIXME: theme color is not setting correctly */
/* border: 1px solid ${mainTheme.headingPrimaryDark}; */
border: 1px solid #B6863D; 
border-top-left-radius: 190px;
border-top-right-radius: 190px; 
`

const WindowFrameContainer = styled.div<{ is_framed: boolean }>`
position: relative;
/* TODO: Which is better? */
height: 450px;
/* height: 500px; */ 
width: 400px;

${({ is_framed }) => is_framed ? `${framed}` : ''}

.image-in-frame {
	border-top-left-radius: 190px;
	border-top-right-radius: 190px;
	height: 90% !important;
	width: 90% !important;
	margin: auto;
}

`;

export default WindowFrame