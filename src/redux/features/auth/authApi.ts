import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/user/login',
                method: 'POST',
                body: userInfo
            })
        }),
        registerUser: builder.mutation({
            query: (userInfo) => ({
                url: '/user/register-user',
                method: 'POST',
                body: userInfo
            })
        })
    })
})

export const { useLoginMutation, useRegisterUserMutation } = authApi;