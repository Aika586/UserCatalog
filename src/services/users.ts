import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
};

type UsersResponse<T> = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
};

type UserResponse<T> = {
  data: T;
  support: { url: string; text: string };
};

type FormUser={
  name?:string;
  email:string;
  password :string;

}
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api/" }),
  endpoints: (builder) => ({
    getAllUsersData: builder.query<UsersResponse<User>, number>({
      query: (page = 1) => `users?page=${page}`,
    }),
    getUsersData: builder.query<UserResponse<User>, string |void>({
      query: (id) => `users/${id}`,
    }),
    registerUser: builder.mutation<
      { token: string },
       FormUser
    >({
      query: (credentials) => ({
        url: "register",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useGetAllUsersDataQuery, useGetUsersDataQuery,useRegisterUserMutation } = userApi;
