import { forwardRef } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DateField } from '@mui/x-date-pickers/DateField';
import { Controller, Control } from 'react-hook-form';

interface IDateInputProps {
	name: string;
	label: string;
	control: Control<any>;
}
const DateInput = forwardRef((props: IDateInputProps, ref: any) => {
	return (
		<Controller
			name={props.name}
			control={props.control}
			render={({
				fieldState: { error },
				field: { onChange, value }
			}) => (
				<LocalizationProvider dateAdapter={AdapterMoment}>
					<DateField
						ref={ref}
						variant='outlined'
						label={props.label}
						value={value}
						onChange={onChange}
						helperText={error?.message}
					/>
				</LocalizationProvider>
			)}
		/>
	)
})

export default DateInput