import { IOperativeInformationForm } from "@components/form/setup/OperativeInformation/useOperativeInfoForm";
import { createBusinessBranching, getBusinesses, updateBusiness } from "@service/business";

/** Update main business and create 'N' business registries by the `Branch` field */
export default async function operativeInformationSubmit(payload: IOperativeInformationForm){
	try {
		const business = await getBusinesses();
		const firstBusiness = business.find((_business) => _business.Branch == 1);

		const updatedBusiness = await updateBusiness(firstBusiness.Id, {
			WorkStations: payload.WorkStations,
			WorkScheduleFrom: payload.WorkScheduleFrom,
			WorkScheduleTo: payload.WorkScheduleTo
		});

		const businessBranches = await createBusinessBranching(firstBusiness.Id, payload.Branches);
		return {
			updatedBusiness,
			businessBranches
		}
	} catch (error) {
		console.error('[OperativeInformation Submit - error]', error);
		throw (error);
	}
}