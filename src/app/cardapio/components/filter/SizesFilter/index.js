"use client"
import { useContext } from "react";
import FilterContext from "../../filterContext";
import BtnList from "../BtnList";

export default function SizesFilter() {

  const { register } = useContext(FilterContext);

    const coffeeSizes = [
      {
        id: "size250ml",
        name: '250ml',
      },
      {
        id:"size500ml",
        name: '500ml',
      },
      { 
        id:"size750ml",
        name: '750ml',
      },
      {
        id:"size1000ml",
        name: '1000ml',
      },
    ];

  return (
    <div className="tags_container">
      <h2>Tamanhos</h2>
      <BtnList content={coffeeSizes} />
    </div>
  );
}
