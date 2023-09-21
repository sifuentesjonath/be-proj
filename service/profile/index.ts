import axios from "@service/customAxios"
import { IUpdateProfile, Profile } from "./type"

const ENDPOINT = 'profile'

export function getProfile() {
	return axios.get<Profile>(ENDPOINT)
		.then((response) => response.data)
}

export function updateProfile(payload: IUpdateProfile) {
	return axios.patch<Profile>(ENDPOINT, payload)
		.then((response) => response.data)
}

export function updateProfileStep(Step: string) {
	return axios.patch<Profile>(ENDPOINT + '/step', { Step })
		.then((response) => response.data)
}