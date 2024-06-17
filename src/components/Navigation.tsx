import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
   return (
      <nav className="  shadow-md bg-gray-500 text-white ">
         <div className="flex justify-between items-center h-[50px] px-5 max-w-[1000px] m-auto">
            <h3 className="font-bold">Github Search</h3>

            <div className="flex gap-6">
               <Link to="/">Home</Link>
               <Link to="/favorites">Favorites</Link>
            </div>
         </div>
      </nav>
   );
}
