import { forwardRef } from 'react'
import { InputProps } from '@mui/material/Input';
import { MuiTelInput, MuiTelInputInfo } from 'mui-tel-input'
import { Controller, Control } from 'react-hook-form';

interface IPhoneNumberInput extends InputProps {
	control: Control<any>;
}
const PhoneNumberInput = forwardRef((props: IPhoneNumberInput, ref: any) => {
	return (
		<Controller
			name={props.name}
			control={props.control}
			render={({
				field: { onChange, value },
				fieldState: { error }
			}) =>
				<MuiTelInput defaultCountry='MX' value={value} onChange={onChange} error={!!error} />
			}
		/>
	)
})

export default PhoneNumberInput;