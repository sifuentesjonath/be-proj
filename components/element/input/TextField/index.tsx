import { forwardRef } from 'react';
import { InputProps } from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import { Controller, Control } from 'react-hook-form';

interface ITextFieldInputProps extends InputProps {
	control: Control<any>;
	errorMessage: string;
}

const TextFieldInput = forwardRef((props: ITextFieldInputProps, ref: any) => {
	return (
		<Controller
			name={props.name}
			control={props.control}
			render={({ field: { onChange, value } }) => (
				<TextField
					variant='outlined'
					ref={ref}
					label={props.placeholder}
					placeholder={props.placeholder}
					onChange={onChange}
					value={value}
					error={!!props.error}
					helperText={props.errorMessage}
					type={props.type}
				/>
			)}
		/>
	);
});

export default TextFieldInput;
