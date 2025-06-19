"use client";
import { useContext } from "react";
import BtnList from "../BtnList";
import FilterContext from "../../filterContext";

export default function TypeFilter() {
  const { register } = useContext(FilterContext);

  const coffeeTypes = [
    {
      id:"Smoothies",
      name: "Smoothies",
    },
    {
      id:"Cafés",
      name: "Cafés",
    },
    {
      id:"Chocolates",
      name: "Chocolates",
    },
    {
      id:"Chás",
      name: "Chás",
    },
    {
      id:"Favoritos",
      name: "Favoritos",
    },
    {
      id:"Sucos",
      name: "Sucos",
    },
  ];

  return (
    <div className="type_container">
      <h2>Tipos</h2>
      <BtnList content={coffeeTypes} />
    </div>
  );
}