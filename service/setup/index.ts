import customAxios from '@service/customAxios';
import { 
    ICreateProfile, 
    IUpdateStep, 
} from './type';

const PROFILE_RESOURCE = "profile";

export async function updateStep(payload: IUpdateStep) {
    return await customAxios.patch(`${PROFILE_RESOURCE}/step`, payload);
}