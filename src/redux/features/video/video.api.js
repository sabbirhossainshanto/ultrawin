import { API } from "../../../api";
import { baseApi } from "../../api/baseApi";

export const videoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    video: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.accessToken}`,
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const { useVideoMutation } = videoApi;
