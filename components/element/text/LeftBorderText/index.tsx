import { FC } from 'react'
import { IStyledComponentsWrapper } from '@/types';
import styled from 'styled-components'

interface IColoredLeftBorderTextProps {
	text: string;
	borderColor: string;
	wrapper?: IStyledComponentsWrapper;
}
const ColoredLeftBorderText: FC<IColoredLeftBorderTextProps> = ({
	text,
	borderColor,
	wrapper = 'p',
}) => {
	const borderStyle = { borderColor };
	return (
		<ColoredLeftBorderTextContainer as={wrapper} style={borderStyle}>
			{text}
		</ColoredLeftBorderTextContainer>
	)
}

const ColoredLeftBorderTextContainer = styled.p`
	border-left: 2px solid;
	padding-left: 5px;
`;

export default ColoredLeftBorderText