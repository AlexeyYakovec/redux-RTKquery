import React from "react";
import { useAppSelector } from "../hooks/redux";

export default function FavoritePages() {
   const { favorites } = useAppSelector((state) => state.github);

   if (favorites.length === 0) {
      return <span className="text-center">Non favorites repo...</span>;
   }

   return (
      <ul className="list-none flex flex-col justify-center items-center">
         {favorites.map((f) => (
            <li key={f} className="mt-2">
               <a href={f} target="_blank">
                  {f}
               </a>
            </li>
         ))}
      </ul>
   );
}
