"use client";
import { useContext, useState } from "react";
import FilterContext from "../filterContext";

export default function BtnList({ content }) {
  const { register } = useContext(FilterContext);

  // (e, obj.dispatchFunc) => { handleClick(e, obj.dispatchFunc);}

  return (
    <ul className="type_list">
      {content.map(({name, id}) => {
        return (
          <li key={id} className="type_iten">
            <input {...register(id)} id={id} type="checkbox"></input>
            <label htmlFor={id}>{name}</label>
          </li>
        );
      })}
    </ul>
  );
}

