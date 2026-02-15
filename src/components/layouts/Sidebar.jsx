import React from "react";
import { NavLink } from "react-router-dom";


export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md border-r-gray-300 p-6 flex flex-col gap-2">
      <h2 className="text-lg font-semibold text-gray-700 mb-6">Menu</h2>
      <NavLink className="block mb-3 bg-purple-600 text-white rounded py-2 px-2 text-center font-bold shadow-md" to="/">Pokemon</NavLink>
      <NavLink className="block mb-3 bg-purple-600 text-white rounded py-2 px-2 text-center font-bold shadow-md" to="/moves">Moves</NavLink>
      <NavLink className="block mb-3 bg-purple-600 text-white rounded py-2 px-2 text-center font-bold shadow-md" to="/items">Items</NavLink>
      <NavLink className="block mb-3 bg-purple-600 text-white rounded py-2 px-2 text-center font-bold shadow-md" to="/types">Types</NavLink>
    </div>
  );
}
