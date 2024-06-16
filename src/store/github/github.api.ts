import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, ServerResponse } from "../../models/models";

export const githubApi = createApi({
   reducerPath: "github/api", // - адрес закешированных данных
   baseQuery: fetchBaseQuery({
      baseUrl: "https://api.github.com/", // базовый url
   }),
   endpoints: (build) => ({
      searchUsers: build.query<IUser[], string>({
         query: (search: string) => ({
            // получение списка пользователей (build.query)
            url: "search/users",
            params: {
               q: search,
               per_page: 10, // лимит данных с сервера
            },
         }),
         transformResponse: (response: ServerResponse<IUser>) => {
            return response.items;
         }, // трансформация данных с сервера
      }),
   }),
});

export const { useSearchUsersQuery } = githubApi;
