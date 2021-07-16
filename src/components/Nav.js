import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CartContext } from '../Global/CartContext';



const Nav = ({ cartToggle }) => {
    const { ShoppingCart } = useContext(CartContext);
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="/"> Ecommerce Practice </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <div className="row d-flex mt-2">
                                            <ul className="count">
                                                <li onClick={cartToggle}><Link to="/cart"><span className="dollor"><i > <AiOutlineShoppingCart /></i></span><span className="shoppingCartTotal">{ShoppingCart ? ShoppingCart.length : 0}</span></Link></li>
                                            </ul>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}



export default Nav;