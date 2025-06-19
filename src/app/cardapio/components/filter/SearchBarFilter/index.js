"use client";
import { useContext } from "react";
import FilterContext from "../../filterContext";

export default function SearchBarFilter() {
  const { register, setSearch } = useContext(FilterContext);

  // const handleChange = (e) => {
  //   setSearch(e.target.value);
  // };

  return (
    <div className="search_bar_container">
      <h2>Pesquisar</h2>
      <input
        {...register("searchInp")}
        type="text"
        placeholder="Seu café"
        // onChange={handleChange}
      />
    </div>
  );
}

// (e) => {
//   // dispatch({ type:'filterSearch', payload: e.target.value })
// }
