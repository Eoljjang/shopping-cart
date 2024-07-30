import { Link } from "react-router-dom";
import storeIcon from '../assets/storeIcon.png'

export default function Header({cartCount, cart}) {
    return (
        <div className="header">
            <div className="logo"><img src={storeIcon} alt="" /></div>

            <ul className="nav-container">
                <li className="nav-item">
                    <Link to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/shop">Shop</Link>
                </li> 
                <li className="nav-item">
                    <Link to="/cart" state={{cart, cartCount}}>Cart ({cartCount})</Link>
                </li>
            </ul>
        </div>
    )
}
