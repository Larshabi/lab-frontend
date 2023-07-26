import { apiSlice } from "./api";

const labApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.query({
      query: (body) => ({ url: "tests/search/", method: "get", params: body }),
    }),
    locationSearch: builder.query({
      query: (body) => ({
        url: "/search",
        method: "get",
        params: body,
      }),
    }),
    getTestDetail: builder.query({
      query: (id) => ({ url: `tests/${id}`, method: "get" }),
    }),
    getLaboratoryTests: builder.query({
      query: (id) => ({ url: `laboratory/tests/${id}`, method: "get" }),
    }),
  }),
});

export const {
  useSearchQuery,
  useGetTestDetailQuery,
  useGetLaboratoryTestsQuery,
  useLocationSearchQuery,
} = labApi;

// localhost:8080/lab/search/?q=Ife
