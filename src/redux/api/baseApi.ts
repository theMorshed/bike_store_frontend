/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({ 
    baseUrl: 'https://bikestoreapi.vercel.app/api',
    // baseUrl: 'http://localhost:5000/api',
    credentials: 'include',
    prepareHeaders: (headers, {getState}) => {
        const token = (getState() as RootState).auth.token; 
        if (token) {
            headers.set('authorization', `${token}`);
        }
        return headers;
    }
});

const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async(args, api, extraOptions): Promise<any> => {

    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 404) {
        toast.error((result as { error: { data: { message: string } } }).error.data.message);
    }

    if (result?.error?.status === 401) {
        const res = await fetch('http://localhost:5000/api/v1/auth/refresh-token', {
            method: 'POST',
            credentials: 'include'
        })
        const data = await res.json();
        if (data?.data?.accessToken) {
            const user = (api.getState() as RootState).auth.user;
            api.dispatch(
                setUser({
                    user,
                    token: data.data.accessToken
                })
            )
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
        }
    }
    return result;
}               

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    tagTypes: ['semester'],
    endpoints: () => ({})
})