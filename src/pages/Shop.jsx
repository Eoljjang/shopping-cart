import { useLocation, useOutletContext } from "react-router-dom";
import Header from "../components/Header";
import "../styles/shop.css";
import { useState, useEffect } from 'react'

export default function Shop() {
    const [products, setProducts] = useState([]) // Products to be displayed.
    const {cart, setCart, cartCount, setCartCount} = useOutletContext(); // Receives the lifted states!!
    

    // Fetch all products
    useEffect(()=> {
        fetch('https://fakestoreapi.com/products', {mode:"cors"})
            .then(response=>response.json())
            // Copy json data into an array
            .then(json=>setProducts(json))
            .catch(error => console.log("Error fetching products:", error))
    }, []);

    const handleAdd = (product) => {
        setCart(prevCart => [...prevCart, product]);
        setCartCount(prevCartCount => prevCartCount + 1);
        console.log(cart);
    };

    return (
        <div id="shop-content">
            <h1 id="shop-title">Shop</h1>
            <div className="products-container">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <p className="product-title">{product.title}</p>
                        <p className="product-price">${product.price}</p>
                        <img className="product-img" src={product.image} alt={product.title} />
                        <button className="add-to-cart-btn" onClick={(e) => handleAdd(product)}>Add</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
