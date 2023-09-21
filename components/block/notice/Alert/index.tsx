import { FC, ReactNode } from 'react'
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export interface IAlertProps {
	type: AlertProps['severity'];
	title?: string;
	children?: ReactNode;
	className?: string;
	onClose?: () => void;
}
const Alert: FC<IAlertProps> = ({
	type,
	title,
	children,
	className,
	onClose
}) => {
	return (
		<MuiAlert onClose={onClose} className={className} severity={type}>
			<AlertTitle>{title}</AlertTitle>
			{children}
		</MuiAlert>
	)
}

export default Alert