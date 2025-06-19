import Navbar from '../components/nav';
import Player from '../components/player';
import FilterToten from './components/filter';
import Header from './components/header';
import ProductsCard from './components/productCard';
import { FilterProvider } from './components/filterContext';

import "@/style/menu/style.scss"

export const metadata = {
    title: "Cardapio",
    description: "Cardapio de toda cafeteria Coffee Stellar"
}

// TODO: Usar o UseContext e o CreateContext para realizar os filtros

export default function HomeCardapio() {
    return (
        <>
          <Header>Produtos</Header>
          <Navbar/>
          <Player/>
          <main>
              <FilterProvider>
                <FilterToten/>
                <ProductsCard/>
              </FilterProvider>
          </main>
        </>
    )
}