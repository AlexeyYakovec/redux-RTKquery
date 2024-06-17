import React from "react";
import {
   useLazyGetUserReposQuery,
   useSearchUsersQuery,
} from "../store/github/github.api";
import { useDebounce } from "../hooks/debounce";
import RepoCard from "../components/RepoCard";

export default function HomePage() {
   const [search, setSearch] = React.useState("");
   const [dropdown, setDropdown] = React.useState(false);
   const debounced = useDebounce(search);
   const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
      skip: debounced.length < 3, // пропускаем всё что меньше 3 символов
      refetchOnFocus: true, // если мы вернулись фокусом на данную страницу, то нам нужно сделать автоматический запрос
   });

   const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
      useLazyGetUserReposQuery();

   React.useEffect(() => {
      setDropdown(debounced.length > 3 && data?.length > 0);
   }, [debounced, data]);

   const handlerClick = (username: string) => {
      fetchRepos(username);
      setDropdown(false);
   };

   return (
      <div className="flex justify-center pt-10 mx-auto h-screen w-screen overflow-auto">
         <div className="relative w-[560px]">
            <input
               type="text"
               className="border py-2 px-4 w-full h-[42px] mb-2"
               placeholder="search for github username..."
               value={search}
               onChange={(e) => setSearch(e.target.value)}
            />
            {dropdown && (
               <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[600px] overflow-y-auto shadow-md bg-white">
                  {isLoading && <p>Loading...</p>}
                  {isError && (
                     <p className="text-red-500">Ошибка получения данных</p>
                  )}
                  {data?.map((user) => (
                     <li
                        key={user.id}
                        className="flex items-start gap-2 py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                        style={{ alignItems: "center" }}
                        onClick={() => handlerClick(user.login)}
                     >
                        <img
                           src={user.avatar_url}
                           alt={user.login}
                           width={50}
                        />
                        <span>{user.login}</span>
                     </li>
                  ))}
               </ul>
            )}
            <div className="container">
               {areReposLoading && <p>Repos are loading...</p>}
               {repos?.map((repo) => (
                  <RepoCard repo={repo} key={repo.id} />
               ))}
            </div>
         </div>
      </div>
   );
}
