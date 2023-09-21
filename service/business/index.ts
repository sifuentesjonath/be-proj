import customAxios from '@service/customAxios';
import { Business, ICreateBusiness, IUpdateBusiness } from './type';

const ENDPOINT = '/business';

export async function createBusiness(payload: ICreateBusiness) {
	return await customAxios
		.post<Business>(ENDPOINT, payload)
		.then((response) => response.data);
}

export async function getBusinesses() {
	return await customAxios
		.get<Business[]>(ENDPOINT)
		.then((response) => response.data);
}

export async function updateBusiness(Id: number, payload: IUpdateBusiness) {
	return await customAxios
		.patch<Business>(ENDPOINT + `/${Id}`, payload)
		.then((response) => response.data);
}

export async function createBusinessBranching(Id: number, Branches: number) {
	return await customAxios
		.post<Business[]>(ENDPOINT + `/${Id}/branching`, { Branches })
		.then((response) => response.data);
}