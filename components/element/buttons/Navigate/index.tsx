import { FC } from 'react'
import styled from 'styled-components'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import mainTheme from '@styles/theme';

interface INavigateButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonType: "prev" | "next"
}
const NavigateButton: FC<INavigateButtonProps> = ({
	buttonType,
	children,
	...props
}) => {
	return (
		<NavigateButtonContainer {...props} >
			{buttonType === "prev" ?
				<>
					<WestIcon />
					{children}
				</>
				:
				<>
					{children}
					<EastIcon />
				</>
			}
		</NavigateButtonContainer>
	)
}

const NavigateButtonContainer = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 6px;
	border-radius: 8px;
	padding: 4px 12px;
	cursor: pointer;
	background-color: inherit;
	border: 2px ${mainTheme.progressBarBackgroundColor} solid;
	&:not(:disabled):hover {
		background-color: ${mainTheme.progressBarBackgroundColor};
	}
	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

export default NavigateButton