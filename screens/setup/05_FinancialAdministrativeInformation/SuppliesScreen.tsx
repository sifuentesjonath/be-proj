import { useState } from 'react'
import { Supply } from '@service/supply/type'
// Components
import Button from '@components/element/buttons/Button';
import ConfirmAction from '@components/block/notice/ConfirmAction';
// Icons
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ClearIcon from '@mui/icons-material/Clear';
// Style
import styled from 'styled-components'
// Utils
import { only_numbers_regex } from '@utils/regexs';
// Service
import { createSupplies } from '@service/supply';
import { getBusinesses } from '@service/business';


interface ISuppliesScreenProps {
	onError: (message: string) => void;
}
const SuppliesScreen = (props: ISuppliesScreenProps) => {
	const [supplies, setSupplies] = useState<Supply[]>([{
		Name: '',
		Amount: 0,
		Price: ''
	}]);
	const [confirmationModal, setConfirmationModal] = useState({ isOpen: false });
	const handleCloseModal = () => setConfirmationModal({ isOpen: false });

	const handleCreateNewSupply = () => {
		setSupplies([...supplies, {
			Name: '',
			Amount: 0,
			Price: ''
		}]);
	}
	const handleSupplyChange = (onChangeProps: { key: string, index: number }, value: string) => {
		const { key, index } = onChangeProps;

		const isANumberInput = key == 'Amount' || key == 'Price';
		if (isANumberInput && value) {
			const isChangeValueOnlyNumbers = only_numbers_regex.test(value);
			if (!isChangeValueOnlyNumbers) return;
		}

		const _supplies = [...supplies];
		let supply = _supplies[index];
		supply[key] = value;
		_supplies[index] = supply;
		setSupplies(_supplies);
	}
	const handleSupplyDelete = (index: number) => {
		const newSupplies = supplies.filter((_supply, _index) => _index != index);
		setSupplies(newSupplies);
	}
	const onSaveButtonClick = () => {
		try {
			supplies.forEach((_supply) => {
				const values = Object.values(_supply);
				const areSupplyValuesOk = (_value) => !!_value;
				if (!values.every(areSupplyValuesOk)) throw ('Asegurate de haber llenado todos los campos')
			})
			setConfirmationModal({ isOpen: true });
		} catch (error) {
			props.onError(error);
		}
	}

	const handleSaveConfirmation = async () => {
		const business = await getBusinesses();
		const mainBusiness = business.find((_business) => _business.Branch == 1);
		await createSupplies({
			BusinessId: mainBusiness.Id.toString(),
			Supplies: supplies
		});
		console.info('[Setup step 5] saving supplies were completed, exiting Setup action is missing');
	}

	const createCards = () => {
		const cards: JSX.Element[] = supplies.map((_supply, i) => (
			<div className='supply-card-container'>
				<div className='supply-card-row'>
					<input type='text' value={supplies[i].Name} onChange={(e) => handleSupplyChange({ key: 'Name', index: i }, e.target.value)} />
					<input type='text' value={supplies[i].Amount} onChange={(e) => handleSupplyChange({ key: 'Amount', index: i }, e.target.value)} />
					<input type='text' value={supplies[i].Price} onChange={(e) => handleSupplyChange({ key: 'Price', index: i }, e.target.value)} />
					<Button onClick={() => handleSupplyDelete(i)}>
						<ClearIcon />
					</Button>
				</div>
			</div>
		))
		return cards;
	}

	// useEffect(() => { // TODO: Can we stringify and save data in local storage to persist changes until saved ?
	// 	const suppliesJson = JSON.stringify(supplies);
	// 	console.log('Supplies as json', suppliesJson);
	// }, [supplies])

	// console.log('Current supplies state', supplies);
	return (
		<>
			<SuppliesScreenContainer>
				<div className='supply-add-container'>
					<Button onClick={handleCreateNewSupply}>
						<LibraryAddIcon />
					</Button>
				</div>
				<div className='supply-card-row'>
					<p>Nombre</p>
					<p>En existencia</p>
					<p>Precio</p>
				</div>
				<div className='supply-cards'>
					{createCards()}
				</div>
				<div className='supply-save-button'>
					<Button onClick={onSaveButtonClick}>Guardar</Button>
				</div>
			</SuppliesScreenContainer>

			<ConfirmAction
				id='confirm-modal'
				open={confirmationModal.isOpen}
				onClose={handleCloseModal}
				keepMounted={false}
				onCancel={handleCloseModal}
				onConfirm={handleSaveConfirmation}
				description={
					<>
						<h3>¿Guardar inventario?</h3>
						<p>Una vez que confirmes se guardará el inventario y saldrás del setup.</p>
					</>
				}
				okText='Guardar inventario'
			/>
		</>
	)
}


const SuppliesScreenContainer = styled.div`
	.supply-add-container {
		display: flex;
		justify-content: end;
	}
	.supply-add-container button {
		min-width: auto;
	}

	.supply-cards {
		min-height: 280px;
		max-height: 280px;
		overflow-y: auto;
		padding-bottom: 8px;

		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	
	.supply-card-container {
		display: flex;
		flex-direction: column;
	}

	.supply-card-row {
		display: grid;
		grid-template-columns: 180px 180px 180px auto;
		gap: 8px;
	}

	.supply-card-container .supply-card-row button {
		min-width: auto;
		padding: 0;
	}

	.supply-save-button {
		display: flex;
		justify-content: center;
		margin: 8px 0;
	}
`;

export default SuppliesScreen