import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
   return (
      <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
         <h3 className="font-bold">Github Search</h3>

         <div className="flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
         </div>
      </nav>
   );
}
