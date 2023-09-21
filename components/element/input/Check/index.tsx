import { FC } from 'react'
import { Control, Controller } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';

interface ICheckInputProps {
	name: string;
	label: string;
	control: Control<any>
}
const CheckInput: FC<ICheckInputProps> = (props) => {
	return (
		<Controller
			name={props.name}
			control={props.control}
			render={({
				field: { onChange, value },
				fieldState: { error }
			}) => (
				<>
					<FormControlLabel
						style={{ margin: '0' }}
						label={props.label}
						control={
							<Checkbox onChange={onChange} checked={value} name={props.label} />
						}
					/>
					{error && <FormHelperText>{error.message}</FormHelperText>}
				</>
			)}
		/>
	)
}

export default CheckInput