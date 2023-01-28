import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Launch } from "../models/launch.model";
export const launchApi = createApi({
  reducerPath: "launchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v3",
  }),
  endpoints: (builder) => ({
    launchs: builder.query<Launch[], void>({
      query: () => "/launches",
    }),
    launch: builder.query<Launch, string>({
      query: (flight_number) => `/launches/${flight_number}`,
    }),
  }),
});

export const { useLaunchsQuery, useLaunchQuery } = launchApi;
