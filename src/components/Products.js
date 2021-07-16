import React, { useContext } from 'react';
import { CartContext } from '../Global/CartContext';
import { JoDilKary } from '../Global/ProductsContext';


const Products = () => {
    const { products } = useContext(JoDilKary);
    const { dispatch } = useContext(CartContext);



    return (

        <div className="products">
            {products.map((product) => (
                <div className="product" key={product.id}>
                    <div className="img">
                        <img src={product.image} alt="not found" />
                    </div>
                    <div className="details">
                        <div className="name">
                            {product.name}
                        </div>
                        <div className="price">
                            ${product.price}
                        </div>
                    </div>
                    <div className="add">
                        <button className="btn" onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.id, product})}>
                            Add to Cart
                        </button>
                    </div>

                </div>


            ))}

        </div>
    );

}

export default Products;