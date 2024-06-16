import React from "react";
import { useSearchUsersQuery } from "../store/github/github.api";

export default function HomePage() {
   const { isLoading, isError, data } = useSearchUsersQuery("vladilen");

   if (isLoading) return <div>Loading...</div>;
   if (isError) return <div>Error occurred while fetching data.</div>;

   return (
      <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
         <ul className="flex flex-col gap-6">
            {data?.map((user) => (
               <li key={user.id} className="flex items-center gap-2">
                  <img src={user.avatar_url} alt={user.login} width={50} />
                  <a
                     href={user.html_url}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     {user.login}
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
}
