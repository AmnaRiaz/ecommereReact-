import React, { useContext } from 'react';
import { CartContext } from '../Global/CartContext';
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {

    const { ShoppingCart, totalprice, qty, dispatch } = useContext(CartContext);
    const handletoken = (token) => {

    }
    return (
        <div className="c-container">
            <div className="c-details" style={{ marginTop: '70px' }}>
                {ShoppingCart.length > 0 ?
                    ShoppingCart.map(cart => (
                        <div className="cart" key={cart.id}>
                            <span className="c-img"> <img src={cart.image} alt="not founs" /></span>
                            <span className="c-name"> {cart.name}</span>
                            <span className="c-price"> {cart.price}</span>
                            <span className="inc" onClick={() => dispatch({ type: 'Add', id: cart.id, cart })}> <AiOutlinePlus /> </span>
                            <span className="c-qty"> {cart.qty}</span>
                            <span className="dec" onClick={() => dispatch({ type: 'Dec', id: cart.id, cart })}> <AiOutlineMinus /> </span>
                            <span className="c-total"> {cart.price * cart.qty}</span>
                            <span className="del" onClick={() => dispatch({ type: 'Del', id: cart.id, cart })}> <AiOutlineDelete /></span>
                        </div>

                    ))
                    : 'cart is empty'}
            </div>

            {ShoppingCart.length > 0 ? <div className="c-summary">
                <div className="summary">
                    <h3> Cart Summary </h3>
                    <div className="t-items">
                        <div className="items"> Total items </div>
                        <div className="Count"> {qty} </div>
                    </div>
                    <div className="price-sec">
                        <div className="titel-p"> Total Price </div>
                        <div className="item-p"> ${totalprice}.00</div>
                    </div>
                    <div className="stripe">
                        <StripeCheckout
                            stripeKey="pk_test_51J4hdGFExPttYHAe7N5K5vyxLspvnZrC4U5Upqf0Md8PK6Qe89MzaW4ROKMOwFD1dkqAposhjZwXUJ1vCLo7JNT300VDYnZpNb"
                            token={handletoken}
                            billingAddress
                            shippingAddress
                            amount={totalprice * 100}
                            name= "All products"
                        >

                        </StripeCheckout>
                    </div>
                </div>
            </div> : ""}
        </div>
    )
}

export default Cart;