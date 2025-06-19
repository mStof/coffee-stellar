"use client";
import { useContext } from "react";
import { Card } from "./card";
import FilterContext from "../filterContext";
import "@/style/menu/card.scss";

export default function ProductsCard() {
  const { list, typeFields, tagFields, sizeFields, searchField, priceFields } =
    useContext(FilterContext);
  const filterProducts = [];

  list.forEach((cafe) => {
    const coffeeName = cafe.name.toLowerCase();
    const inpSearch = searchField.toLowerCase();
    if (!inpSearch) return
    coffeeName.includes(inpSearch) && filterProducts.push(cafe);
  });

  list.forEach((cafe) => {
    const [isCold, isFire, noGluten, gluten, noLactose, lactose] = tagFields;
    if (isCold) cafe.cold && filterProducts.push(cafe);

    if (isFire) !cafe.cold && filterProducts.push(cafe);

    if (gluten) cafe.glutem && filterProducts.push(cafe);

    if (noGluten) !cafe.glutem && filterProducts.push(cafe);

    if (noLactose) !cafe.lactose && filterProducts.push(cafe);

    if (lactose) cafe.lactose && filterProducts.push(cafe);
  });
 
  list.forEach((cafe) => {
    let [minPrice, maxPrice] = priceFields;
    if (minPrice === '') minPrice = 0;
    if (maxPrice === '') maxPrice = 100;
    if (Number(maxPrice) >= cafe.price && Number(minPrice) <= cafe.price) {
      filterProducts.push(cafe);
    }
  })


  
  const arr = [];
  filterProducts.forEach((cafe) => {
    if (arr.includes(cafe)) return;
    arr.push(cafe);
  });

  return (
    <div className="product_cards_container">
      {arr.length
        ? arr.map((coffeeObj) => {
            return (
              <Card.Root key={coffeeObj.id}>
                <Card.Image
                  image={coffeeObj.imgs[0]}
                  alt={`Imagem do ${coffeeObj.name}`}
                />
                <Card.Info
                  title={coffeeObj.name}
                  description={coffeeObj.description}
                />
                <Card.Tags
                  lactose={coffeeObj.lactose}
                  gluten={coffeeObj.glutem}
                  isCold={coffeeObj.cold}
                />
                <span></span>
                <div className="card_actions">
                  <Card.Price
                    price={coffeeObj.price.toLocaleString("PT-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  />
                  <Card.ActionsRoot>
                    <Card.ShareBtn
                      path={`${process.env.NEXT_PUBLIC_URL}/products/${coffeeObj.path}`}
                    />
                    <Card.LikeBtn />
                  </Card.ActionsRoot>
                </div>
              </Card.Root>
            );
          })
        : list.map((coffeeObj) => {
            return (
              <Card.Root key={coffeeObj.id}>
                <Card.Image
                  image={coffeeObj.imgs[0]}
                  alt={`Imagem do ${coffeeObj.name}`}
                />
                <Card.Info
                  title={coffeeObj.name}
                  description={coffeeObj.description}
                />
                <Card.Tags
                  lactose={coffeeObj.lactose}
                  gluten={coffeeObj.glutem}
                  isCold={coffeeObj.cold}
                />
                <span></span>
                <div className="card_actions">
                  <Card.Price
                    price={coffeeObj.price.toLocaleString("PT-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  />
                  <Card.ActionsRoot>
                    <Card.ShareBtn
                      path={`${process.env.NEXT_PUBLIC_URL}/products/${coffeeObj.path}`}
                    />
                    <Card.LikeBtn />
                  </Card.ActionsRoot>
                </div>
              </Card.Root>
            );
          })}
    </div>
  );
}

// const obj = {
//   searchInp: 'caf',
//   Chás: true,
//   fireInp: true,
//   glutenInp: true,
//   size500ml: true
// }
