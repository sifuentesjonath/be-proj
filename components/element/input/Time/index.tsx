import { FC } from 'react';
import { Controller, Control } from 'react-hook-form';


interface ITimeInputProps {
	name: string;
	label?: string;
	control: Control<any>;
}
const TimeInput: FC<ITimeInputProps> = ({
	name,
	label,
	control,
}) => {

	const inputLabel = label
		? <label htmlFor={name}>{label}</label>
		: null;

	return (
		<Controller
			name={name}
			control={control}
			render={({
				fieldState: { error },
				field: { onChange, ref, value }
			}) => (
				<div>
					{inputLabel}
					<input ref={ref} value={value} type='time' onChange={onChange} />
					{error && <p className='error-message'>{error.message}</p>}
				</div>
			)}
		/>
	)
}


export default TimeInput