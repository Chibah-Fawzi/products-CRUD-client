/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Routes, Route, Link } from 'react-router-dom';
import '../assets/styles/Main.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Product from './Product';

export default function Main({ ProductProps }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    let BACKEND_URL;
    if (process.env.NODE_ENV == "production") {
        BACKEND_URL = "https://products-app-cau5.onrender.com"
    } else {
        BACKEND_URL = "http://localhost:3000"
    }

    function getProducts() {
        axios.get(`${BACKEND_URL}/products`)
            .then(res => {
                setProducts(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    useEffect(() => {
        getProducts()
    }, []);




    return (
        loading ? <h1>Loading ..</h1> :
            <div className='products'>
                <h1>All products</h1>
                <div className='products-container'>
                    {products?.map((product, index) => {
                        return (
                            <div className="product-card" key={index}>
                                <img src={product.image} alt={product.title} width='150px' />
                                <h3>{product.title}</h3>
                                <div style={{ display: 'flex' }}>
                                    <h6>{product.price}$</h6>
                                    <h6>{product?.rating?.rate}</h6>
                                    <h6>{product?.rating?.count}</h6>
                                </div>
                                <div>
                                    {/* 3. Lier le button avec le changement route en ajoutant un id dynamique qui viens de l'objet produit */}
                                    <Link to={`/products/${product.id}`}>
                                        {/* 4. On lie le button avec la function qui store l'objet du produit onclick */}
                                        <button onClick={(e) => ProductProps(e, product)} id="details">Product details</button>
                                    </Link>
                                    <button id="add_to_cart">Ajouter au panier</button>
                                </div>
                            </div>

                        )
                    })}

                </div>
            </div>
    )
}
