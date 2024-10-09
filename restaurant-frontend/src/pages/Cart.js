import React from "react";
import { useCart } from "./CartContext"; // Import the cart context
import Checkout from "./Checkout";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { cart, setCart } = useCart(); // Access cart and setCart from context
    const navigate = useNavigate();

    let removeFromCart = (itemToRemove) => {
        setCart((prevCart) => prevCart.filter(item => item.itemNo !== itemToRemove.itemNo));
    };


    const totalPrice = cart.reduce((total, item) => total + item.rate, 0);

    console.log('Cart items:', cart); // Log the current items in the cart

    return (
        <div className="container">
            <h2 className="m-5" align="center">Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="list-group fs-5">
                        {cart.map((item, index) => (
                            <li className="list-group-item d-flex justify-content-between align-items-center m-3" key={index}>
                                <td><img src={item.image} className="img-fluid" alt="..." style={{ width: '140.13px', height: '130.19px' }} />
                                </td>
                                <td>{item.dishName}</td>
                                <td> ${item.rate} </td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => removeFromCart(item)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </li>
                        ))}

                    </ul>
                    <h3 className="m-5 " align="right">Total: ${totalPrice.toFixed(2)}</h3> {/* Display total */}
                    <div className="row">
                        <div className="col" align="center">
                            <button className="btn btn-outline-dark m-3 fs-6" align="center" onClick={() => navigate('/order')}>
                                Back
                            </button>
                        </div>
                        <div className="col" align="center">
                            <button className="btn btn-success m-3 fs-6" align="center" onClick={() => navigate('/checkout')}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
