const paths = {
	home: "/",
	login: "/login",
	signup: "/signup",
	setup: "/setup",
	app: "/app"
}

export const getSetupStepPath = (
	pathName: string // .../setup/x
) => {
	const currentStep = pathName.split("/")[2];
	return parseInt(currentStep);
}

export default paths