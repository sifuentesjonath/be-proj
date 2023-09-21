import customAxios from "@service/customAxios";
import { ISendEmail } from "./type";

const ENDPOINT = "sendgrid"

export async function sendEmail(payload: ISendEmail) {
	return await customAxios.post(`${ENDPOINT}/keepintouch`, payload);
}