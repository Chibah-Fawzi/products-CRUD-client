/* eslint-disable react/prop-types */
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Products from '../components/Products'
import Product from '../components/Product'


export default function MyRoutes({ selectedProduct, ProductProps }) {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products ProductProps={ProductProps} />} />
            {/*1. On déclare le route dynamique qui nous prend vers la page du produit selectioné */}
            <Route path='/products/:productId'
                // 6. On passe le produit séléctionné en props vers le composant du produit selectionné
                element={<Product product={selectedProduct} />}
            />

        </Routes>
    )
}
