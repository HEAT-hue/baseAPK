// jshint esversion:6
import { emptySplitApi } from "../api";
import { AuthLoginResponse } from "../../../data/global/auth";

export const userAPI = emptySplitApi.injectEndpoints({
    endpoints: (builder) => ({
        // Define your user endpoints here
        login: builder.mutation<AuthLoginResponse, URLSearchParams>({
            query: (credentials) => ({
                url: 'auth/',
                method: 'POST',
                body: credentials,
            }),
        }),
    })
})

export const { useLoginMutation } = userAPI