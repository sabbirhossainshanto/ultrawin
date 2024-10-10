import { API } from "../../../api";
import { baseApi } from "../../api/baseApi";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    pgPayment: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.pg}`,
          method: "POST",
          body: payload,
        };
      },
    }),
    bank: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.bankAccount}`,
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const { usePgPaymentMutation, useBankMutation } = paymentApi;
