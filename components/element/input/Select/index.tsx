import React, { forwardRef } from 'react';
import { Control, Controller } from 'react-hook-form';
// Component
import Select, { SelectProps } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

/** About SelectInput & MUI
 * In order to use the 'outlined' variant of this Select Input
 * FormControl & InputLabel components were needed, without them 'label' looks empty.
 * Also it needs to match InputLabel children text with the label of the Select.
*/
interface ISelectInputProps extends SelectProps {
  control: Control<any>;
  options: string[]
}
const SelectInput = forwardRef((props: ISelectInputProps, any) => {

  const selectOptions = props.options.map((option) => (
    <MenuItem key={option} value={option}>{option}</MenuItem>
  ))

  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field: { onChange, value } }) => (
        <FormControl>
          <InputLabel>{props.label}</InputLabel>
          <Select variant='outlined' value={value} onChange={onChange} label={props.label}>
            {selectOptions}
          </Select>
        </FormControl>
      )}
    />
  )
})

export default SelectInput