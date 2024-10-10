import { API } from "../../../api";
import { baseApi } from "../../api/baseApi";

export const balanceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBalance: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.balance}`,
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const { useGetBalanceMutation } = balanceApi;
