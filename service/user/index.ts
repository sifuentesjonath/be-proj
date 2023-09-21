import customAxios from "@service/customAxios";
import { ICreateUser } from "./type";

const ENDPOINT = "user"

export async function createUser(payload: ICreateUser) {
	return await customAxios.post(`${ENDPOINT}`, payload);
}