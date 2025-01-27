import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '/login',
                method: 'POST',
                body: userInfo
            })
        }),
        registerUser: builder.mutation({
            query: (userInfo) => ({
                url: '/register-user',
                method: 'POST',
                body: userInfo
            })
        })
    })
})

export const { useLoginMutation, useRegisterUserMutation } = authApi;