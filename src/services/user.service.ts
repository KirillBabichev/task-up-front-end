import { axiosWithAuth } from '@/api/intrceptors'
import { TUser, TUserForm } from '@/types/auth.types'


export type TProfileResponse = {
	user: TUser;
	statistics: {
		label: string;
		value: string;
	}[];
};

class UserService {
	private BASE_URL = '/user/profile';

	async getProfile() {
		const response = await axiosWithAuth.get<TProfileResponse>(this.BASE_URL);
		return response.data;
	};

	async update(data: TUserForm) {
		const response = await axiosWithAuth.put(this.BASE_URL, data);
		return response.data;
	};
};

export const userService = new UserService();
