import { API } from "../../../api";
import handleDecryptData from "../../../utils/handleDecryptData";
import { baseApi } from "../../api/baseApi";

export const eventsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllGroupEvents: builder.query({
      query: (sports) => {
        return {
          url: `${API.groupSportsBook}/${sports}`,
          method: "GET",
        };
      },
      transformResponse: (data) => {
        const decryptionData = handleDecryptData(JSON.stringify(data));
        return decryptionData;
      },
    }),
    getAllOddsEvents: builder.query({
      query: (payload) => {
        return {
          url: `${API.eventDetails}/${payload.eventTypeId}/${payload.eventId}`,
          method: "GET",
        };
      },
      transformResponse: (data) => {
        const decryptionData = handleDecryptData(JSON.stringify(data));
        return decryptionData;
      },
    }),
    order: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.order}`,
          method: "POST",
          body: payload,
        };
      },
    }),
    getLadder: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.ladder}/${payload.marketId}`,
          method: "POST",
          body: payload.data,
        };
      },
    }),
    editButtonValues: builder.mutation({
      query: (payload) => {
        return {
          url: `${API.buttonValue}`,
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const {
  useGetAllGroupEventsQuery,
  useGetAllOddsEventsQuery,
  useOrderMutation,
  useGetLadderMutation,
  useEditButtonValuesMutation,
} = eventsApi;
