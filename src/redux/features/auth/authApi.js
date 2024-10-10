import { API } from "../../../api";
import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.login}`,
          method: "POST",
          body: payload,
        };
      },
    }),
    getOtp: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.otp}`,
          method: "POST",
          body: payload,
        };
      },
    }),
    register: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.register}`,
          method: "POST",
          body: payload,
        };
      },
    }),
    forgotPassword: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.forgotPassword}`,
          method: "POST",
          body: payload,
        };
      },
    }),
    changePassword: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.changePassword}`,
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useGetOtpMutation,
  useRegisterMutation,
  useForgotPasswordMutation,
  useChangePasswordMutation
} = authApi;
