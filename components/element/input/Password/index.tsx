import React, { useState, forwardRef } from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
	InputAdornment,
	IconButton,
	InputProps,
	TextField,
} from '@mui/material';
import { Control, Controller } from 'react-hook-form';

interface IPasswordInputProps extends InputProps {
	control: Control<any>;
	errorMessage: string;
}

const PasswordInput = forwardRef((props: IPasswordInputProps, ref: any) => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	return (
		<Controller
			name={props.name}
			control={props.control}
			render={({ field: { onChange, value } }) => (
				<TextField
					ref={ref}
					variant='outlined'
					placeholder={props.placeholder}
					label={props.placeholder}
					onChange={onChange}
					value={value}
					error={!!props.error}
					helperText={props.errorMessage}
					type={showPassword ? 'text' : 'password'}
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>
								<IconButton
									onClick={handleClickShowPassword}
									edge='end'
								>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			)}
		/>
	);
});

export default PasswordInput;
