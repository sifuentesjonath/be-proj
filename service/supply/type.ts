export interface Supply {
	Name: string;
	Price: string;
	Amount: number;
}

export class ICreateSupply {
	BusinessId: string;
	Supplies: Supply[];
}