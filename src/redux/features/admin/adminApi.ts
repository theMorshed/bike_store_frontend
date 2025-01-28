import { baseApi } from "../../api/baseApi";

const adminApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOders: builder.query({
            query: () => ({
                url: `/orders`,
                method: 'GET',
            }),
        }),      
        getAllUsers: builder.query({
            query: () => ({
                url: `/user`,
                method: 'GET',
            }),
        }),      
    })
})

export const { useGetAllOdersQuery, useGetAllUsersQuery } = adminApi;