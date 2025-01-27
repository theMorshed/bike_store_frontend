import { baseApi } from "../../api/baseApi";

type TQueryParam = {
    name: string;
    value: boolean | React.Key;
}

const productManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (args) => {                
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string);
                    });
                }

                return {
                    url: '/products',
                    method: 'GET',
                    params: params,
                };
            }
        }),
        getProductById: builder.query({
            query: (id: string) => ({
                url: `/products/${id}`,
                method: 'GET',
            }),
        }),      
    })
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productManagementApi;