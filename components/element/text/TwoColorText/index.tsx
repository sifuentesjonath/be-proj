import { IStyledComponentsWrapper } from '@/types';
import { FC } from 'react'
import styled from 'styled-components'

interface ITwoColorTextProps {
	wrapper?: IStyledComponentsWrapper;
	// colors?: string[];
	text: {
		first: string;
		second: string;
	}
}
// todo: make this component had style types just like <Link> custom component
const TwoColorText: FC<ITwoColorTextProps> = ({
	wrapper = 'p',
	text: { first, second }
}) => {
	return (
		<TwoColorTextContainer as={wrapper}>
			<span className='two-first-color'>{first}</span>
			<span className='two-second-color'>{second}</span>
		</TwoColorTextContainer>
	)
}

const TwoColorTextContainer = styled.p`
`;

export default TwoColorText