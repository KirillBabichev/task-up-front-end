import { axiosBase } from "@/api/intrceptors";
import { TAuthForm, TAuthResponse } from "@/types/auth.types";
import { removeFromStorage, saveTokenStorage } from "./auth-token.service";

export const authService = {
    async main(type: 'login' | 'register', data: TAuthForm) {
        const response = await axiosBase.post<TAuthResponse>(
            `/auth/${type}`,
            data
        );

        if (response.data.accessToken) {
            saveTokenStorage(response.data.accessToken);
        }

        return response;

    },

    async getNewToken() {
        const response = await axiosBase.post<TAuthResponse>(
            `/auth/login/access-token`
        );

        if (response.data.accessToken) {
            saveTokenStorage(response.data.accessToken);
        }

        return response;
    },

    async logout() {
        const response = await axiosBase.post<TAuthResponse>(
            `/auth/logout`

        );

        if (response.data) {
            removeFromStorage();
        }

        return response;
    }

};