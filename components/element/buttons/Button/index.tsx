import { FC } from 'react'
import { StyledButton } from './style'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }
const Button: FC<IButtonProps> = ({
	children,
	...props
}) => {
	return (
		<StyledButton {...props}>
			{children}
		</StyledButton>
	)
}


export default Button