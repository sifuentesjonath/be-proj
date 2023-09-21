import { IUseJoinForm } from "@components/form/Join/useJoinForm";
import { sendEmail } from "@service/sendgrid";

export default async function joinFormSubmit({
	Email,
	FirstName,
	LastName,
	Subject,
	allowCookies
}: IUseJoinForm) {
	await sendEmail({
		Email,
		FirstName,
		LastName,
		Subject,
	})
}