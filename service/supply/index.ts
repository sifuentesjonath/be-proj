import axios from "@service/customAxios";
import { ICreateSupply, Supply } from "./type";

const ENDPOINT = 'supply'

export function createSupplies(payload: ICreateSupply){
	return axios.post<Supply>(ENDPOINT, payload)
		.then((response) => response.data)
}