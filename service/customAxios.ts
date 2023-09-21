import axios from "axios";
import { getJwt, setJwt } from "./jwt";

const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BEAD_SERVER
});

customAxios.defaults.headers.common['Accept'] = 'application/json';
customAxios.defaults.headers.common['Content-Type'] = 'application/json';

export const setAuthHeader = (token: string) => {
	console.info('[Axios] setting auth header', token)
	setJwt(token);
	customAxios.defaults.headers.common['authorization'] = token;
};

if (getJwt()) {
  setAuthHeader(getJwt())
}

//@ts-ignore
customAxios.interceptors.response.use(
	//@ts-ignore
	(response) => {
		//@ts-ignore
		if (response.config)
			console.info(
				`[AXIOS]:${response.config.method.toUpperCase()}:${
					response.config.url
				}`,
				{ config: response.config, data: response.data }
			);
		//@ts-ignore
		return {
			ok: true,
			status: response.status,
			data: (response || {}).data,
			//@ts-ignore
			message: response.message,
		};
	},
	(error) => {
		console.log({ error });
		if (error.response)
			throw {
				ok: false,
				status: error.response.status,
				data: error.response.data,
				message: error.response.message || error.response.data.message,
			};
		throw { ok: false, status: 400, message: 'Axios error' };
	}
);

//@ts-ignore
customAxios.origin = axios;

export default customAxios;