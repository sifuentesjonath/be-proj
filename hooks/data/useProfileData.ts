import { useQuery, UseQueryOptions, useMutation, useQueryClient } from 'react-query';
import { getProfile } from '@service/profile';
import { Profile } from '@service/profile/type';

export const QUERY_KEY_NAME = 'getProfile';

const useProfileData = (options?:UseQueryOptions<Profile>) => {
	return useQuery<Profile> (
		[QUERY_KEY_NAME], getProfile, options
	);
}

export default useProfileData;