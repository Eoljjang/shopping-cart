import { useLocation, useOutletContext } from "react-router-dom";
import Header from "../components/Header";
import { useState, useEffect } from 'react';
import '../styles/cart.css';

export default function Cart() {
    //const location = useLocation();
    //const { cart, cartCount } = location.state || { cart: [], cartCount: 0 }; // Fallback to default values if state is undefined
    const {cart, cartCount, setCart, setCartCount} = useOutletContext(); // Receive lifted state!!
    const [total, setTotal] = useState(0);

    // Whenever the cart updates, re-calcualte the new cart total.
    useEffect(() => {
        let newTotal = 0;
        cart.forEach(item => {
            newTotal += item.price;
        })
        setTotal(newTotal)
    }, [cart])

    // Handles deleting an item from the cart.
    const handleDelete = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        setCartCount(prevCount => prevCount - 1);
    };

    // Handles checkout [for the purpose of this app, there's no checkout functionality]
    const handleCheckout = () => {
        alert(`Checking out with ${cartCount} item(s) with total cost: $${total}. \n(There's no implementation for checking out)`);
    }

    return (
        <div id="cart-content">
            <div id="cart-heading">
                <h1>Your Items ({cartCount}):</h1>
                <h3>Total: {total.toFixed(2)}</h3>
                <button id="checkout-btn" onClick={(e) => handleCheckout()}>Check Out</button>
            </div>

            <div className="products-container">
                {cart.map((item, index) => (
                    <div key={index} className="product-item">
                        <p className="product-title">{item.title}</p>
                        <p className="product-price">${item.price}</p>
                        <img className="product-img" src={item.image} alt={item.title} />
                        <button className="delete-item-btn" onClick={(e) => handleDelete(index)}>Remove</button>
                    </div>
                ))}
            </div>

        </div>
    );
}