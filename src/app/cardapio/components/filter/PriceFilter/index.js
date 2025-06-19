'use client'
import { useContext } from "react";
import FilterContext from "../../filterContext";

export default function PriceFilter() {
  const { register } = useContext(FilterContext);

  return (
    <div className="price_container">
      <h2>Preços</h2>
      <div className="prices_input">
        <input type="number" placeholder="R$00" {...register('minPrice')}></input>
        até
        <input type="number" placeholder="R$99" {...register('maxPrice')}></input>
      </div>
    </div>
  );
}
