import { useState, useRef, useContext, useEffect } from 'react';
// Context
import { SetupContext } from '@components/layout/Setup/SetupContext';
// Form use
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import useOperativeInformationForm, { IOperativeInformationForm } from './useOperativeInfoForm';
// Components
import Alert, { IAlertProps } from '@components/block/notice/Alert';
import Button from '@components/element/buttons/Button';
import TextFieldInput from '@components/element/input/TextField';
import TimeInput from '@components/element/input/Time';
// Style
import mainTheme from '@styles/theme';
import styled, { css } from 'styled-components'
// Action
import operativeInformationSubmit from './operativeInfoSubmit';
import { getBusinesses } from '@service/business';

const OperativeInformationForm = () => {
	const [alert, setAlert] = useState<{ show: boolean, props: IAlertProps }>({ show: false, props: undefined });

	const {
		control,
		reset,
		formState: { errors, isSubmitting },
		handleSubmit
	} = useOperativeInformationForm();

	const { setIsGoNextAllowed, handleGoNext } = useContext(SetupContext)

	const onCloseAlert = () => setAlert({ show: false, props: undefined });
	const onValid: SubmitHandler<IOperativeInformationForm> = async (data) => {
		console.log('[Operative Information - Submit]', data);
		try {
			await operativeInformationSubmit(data);
			setIsGoNextAllowed(true);
			setAlert({
				show: true,
				props: {
					type: 'success',
					title: 'Los datos de tu negocio fueron actualizados'
				}
			});
		} catch (error) {
			setAlert({
				show: true,
				props: {
					type: 'error',
					title: 'Algo salió mal al tratar de actualizar los datos de tu negocio',
					children: <p>Intenta de nuevo más tarde.</p>
				}
			});
		};
	};
	const onError: SubmitErrorHandler<IOperativeInformationForm> = (errors) => console.error('[Operative Information - Error]', errors);

	useEffect(() => {
		const checkBusiness = async () => {
			const business = await getBusinesses();
			if (!business || !business.length) return;
			const { WorkStations, Branch, WorkScheduleFrom, WorkScheduleTo } = business[0];
			reset({
				WorkStations,
				Branches: Branch,
				WorkScheduleFrom,
				WorkScheduleTo
			})
			setIsGoNextAllowed(true);
		}
		setIsGoNextAllowed(false);
		checkBusiness();
	}, [])

	return (
		<>
			<OperativeInformationFormContainer onSubmit={handleSubmit(onValid, onError)}>
				<TextFieldInput name='WorkStations' control={control} placeholder='¿Cuantas estaciones de trabajo hay?' errorMessage={errors?.WorkStations?.message} />
				<TextFieldInput name='Branches' control={control} placeholder='¿Cuantas sucursales tiene tu negocio?' errorMessage={errors?.WorkStations?.message} />
				<div className='schedule-inputs-container'>
					<label className='schedule-label' htmlFor="double-inline-inputs">Horario de trabajo</label>
					<div className='double-inline-inputs'>
						<TimeInput name='WorkScheduleFrom' label='De' control={control} />
						<TimeInput name='WorkScheduleTo' label='hasta' control={control} />
					</div>
				</div>
				<TextFieldInput name='Employees' control={control} placeholder='¿Cuantos empleados por estación de trabajo?' errorMessage={errors?.Employees?.message} />
				<Button disabled={isSubmitting} className='submit-button' type='submit'>Guardar</Button>
			</OperativeInformationFormContainer>

			{alert.show && <Alert onClose={onCloseAlert} {...alert.props} />}
		</>
	)
}

/** About time range input style...
 * 	As we know so far, these are the styles that make this input look more like an MUI input
 * 	I do not put them as part of the <TimeInput /> component because I'm not sure if input styles
 * 	may change in a future in certain routes.
 */
const timeRangeInputStyle = css`
	div {
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
	label {
		color: ${mainTheme.textSecondary};
		font-size: 14px;
		padding-left: 8px;
	}
	input {
		border: 1px #c4c4c4 solid;
		border-radius: 4px;
		padding: 12.5px 14px;
		color: #212121;
	}
	.error-message {
		color: #777a7f;
		margin-bottom: 12px;
		font-family: "Roboto","Helvetica","Arial",sans-serif;
		font-weight: 400;
		font-size: 0.75rem;
		line-height: 1.66;
		letter-spacing: 0.03333em;
		text-align: left;
		margin-top: 3px;
		margin-left: 14px;
	}
`

const OperativeInformationFormContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 12px;
	.schedule-inputs-container {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.schedule-label {
		color: ${mainTheme.textSecondary};
	}
	.double-inline-inputs {
		display: flex;
		justify-content: space-between;
		gap: 12px;
		padding: 0 1px;
		${timeRangeInputStyle}
	}
	.submit-button {
		width: 140px;
		margin: 0 auto;
	}
`;

export default OperativeInformationForm