"use client";
import { createContext, useState, useEffect, useReducer } from "react";
import { useForm } from "react-hook-form";

const FilterContext = createContext([]);
export default FilterContext;

// const reducer = (state, action) => {
//   console.log('Iniciei');
//   switch (action.type) {
//     case "initianData":
//       return { list: action.payload, filterList: [] };

//     case "filterSearch":
//       return {
//         ...state,
//         filterList: state.list.filter((listIten) => {
//           const inpName = action.payload.toLowerCase();
//           const dataName = listIten.name.toLowerCase();
//           return dataName.includes(inpName) && listIten;
//         }),
//       };

//     case "tagFilter":
//       return {
//         ...state,
//         filterList: state.list.filter((listIten) => {
//           action.payload.invert ? !listIten[action.payload.tag] : listIten[action.payload.tag];
//         }),
//       };

//     case 'sizeFilter':
//       // return {
//       //   ...state,
//       //   filterList: state.list.filter((listIten) => {
//       //     listIten.sizes.forEach(size => {
//       //       size === payload && listIten
//       //     });
//       //   }),
//       // }
//     return { ...state }

//     default:
//       return state;
//   }
// };
export const FilterProvider = ({ children }) => {
  // Pega os dados da API para criar os cards, uma vez;
  // const [newFilterList, dispatch] = useReducer(reducer, {
  //   list: [],
  //   filterList: [],
  // });
  const [list, setList] = useState([]);
  // const [search, setSearch] = useState('')
  const { register, watch } = useForm({
    defaultValues: {
      searchInp: "",
      minPrice: "",
      maxPrice: "",
      Smoothies: false,
      Cafés: false,
      Chocolates: false,
      Chás: false,
      Favoritos: false,
      Sucos: false,
      coldInp: false,
      fireInp: false,
      noGlutenInp: false,
      glutenInp: false,
      noLactoseInp: false,
      lactoseInp: false,
      size250ml: false,
      size500ml: false,
      size750ml: false,
      size1000ml: false,
    },
  });
  const typeFields = watch([
    "Smoothies",
    "Cafés",
    "Chocolates",
    "Chás",
    "Favoritos",
    "Sucos",
  ]);
  const tagFields = watch([
    "coldInp",
    "fireInp",
    "noGlutenInp",
    "glutenInp",
    "noLactoseInp",
    "lactoseInp",
  ]);
  const sizeFields = watch([
    "size250ml",
    "size500ml",
    "size750ml",
    "size1000ml",
  ]);
  const searchField = watch('searchInp')
  const priceFields = watch(['minPrice', 'maxPrice'])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/`);
        const dataJSON = await data.json();
        // dispatch({ type: "initianData", payload: dataJSON });
        setList(dataJSON);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <FilterContext.Provider
      value={{
        // dispatch,
        // newFilterList,
        list,
        register,
        typeFields,
        tagFields,
        sizeFields,
        searchField,
        priceFields,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
