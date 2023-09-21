import { Address } from '@service/address/type';

export interface Business {
	Name: string;
	Activity: "" | "Spa" | "Barber Shop" | "Beauty Studio" | "Tattoo Studio" | "Otro";
	Address: Address;
	Id: number;
	CreatedAt: Date;
	UpdatedAt: Date;
	Branch: number;
	WorkStations: number;
	WorkScheduleFrom: string;
	WorkScheduleTo: string;
}

// HTTP Requests

export interface ICreateBusiness {
	Name: string;
	Address: string;
	// Plan: string;
	Activity: string;
}

export interface IUpdateBusiness {
	Name?: string;
	Activity?: string;
	WorkScheduleFrom?: string;
	WorkScheduleTo?: string;
	WorkStations?: number;
}
