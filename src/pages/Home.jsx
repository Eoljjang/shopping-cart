import { useLocation, useOutlet, useOutletContext } from "react-router-dom";
import Header from "../components/Header";
import { useState, useEffect } from 'react';
import mascot from '../assets/mascot.png'

export default function Home(){
    const {cart, setCart, cartCount, setCartCount} = useOutletContext();
    
    return (
        <div className="home-content">
            <div className="description">
                <h1>Welcome to my Store!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores repellat fugiat alias neque. Ut impedit dolores laudantium, mollitia similique voluptatum sint commodi molestiae. Quisquam quia tenetur nam laudantium unde fugit culpa debitis, accusantium aut, deleniti cum maiores praesentium porro voluptatum odit sequi minima impedit. Fugit, quo! Ea assumenda quae laboriosam labore omnis doloremque ut dolorum. Fugit omnis aliquid neque error sequi accusantium, soluta esse consequuntur ab vitae alias facilis repellendus tempore cum quam dolore nulla! Architecto eaque eum quaerat porro, consectetur illum dolore maxime deleniti, quidem cupiditate doloremque doloribus ex sunt magni sit. Distinctio ipsam inventore non consectetur ut.</p>
            </div>
                  
            <div className="mascot-container">
                <img src={mascot} alt="" />
            </div>
        </div>
    )
}