import React, { useContext } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import { SetupContext } from '@components/layout/Setup/SetupContext';

interface IConfirmActionProps {
	id: string;
	keepMounted: boolean;
	open: boolean;
	description: React.ReactNode;
	okText?: string;
	onClose: () => void;
	onConfirm: () => void;
	onCancel: () => void;
}
const ConfirmAction = (props: IConfirmActionProps) => {
	const { open, onClose, onConfirm, onCancel, description, okText = 'Ok', ...other } = props;

	const { handleGoNext } = useContext(SetupContext);

	const handleCancel = () => {
		onCancel();
		onClose();
	};

	const handleOk = () => {
		onConfirm();
		onClose();
	};

	return (
		<Dialog
			sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
			maxWidth="xs"
			open={open}
			{...other}
		>
			<DialogContent>
				{description}
			</DialogContent>
			<DialogActions>
				<Button autoFocus onClick={handleCancel}>
					Cancelar
				</Button>
				<Button onClick={handleOk}>{okText}</Button>
			</DialogActions>
		</Dialog>
	)
}

export default ConfirmAction