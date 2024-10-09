import React, { useState } from 'react';
import { useCart } from './CartContext'; // Ensure the path is correct
import { useNavigate } from 'react-router-dom';
import './Checkout.css'; // Ensure to create this CSS file

function Checkout() {
    const { cart, setCart } = useCart(); // Access the cart and setCart
    const [formData, setFormData] = useState({ name: '', address: '', paymentMethod: 'credit' });
    const [error, setError] = useState('');
    const [orderPlaced, setOrderPlaced] = useState(false);
    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, item) => total + item.rate, 0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.address) {
            setError('Please fill in all fields');
            return;
        }

        // Process the order here
        console.log('Processing order:', formData, cart, totalPrice);


        setOrderPlaced(true);
    };

    const handleGoToCart = () => {
        
        navigate('/cart'); // Navigate to the cart
    };

    return (
        <div className="container">
            <h2>Checkout</h2>
            {error && <div className="alert alert-danger">{error}</div>}

            {orderPlaced && (
                <div className="overlay">
                    <div className="alert-card">
                        <h5 className="alert-title">Order Placed Successfully!</h5>
                        <p className="alert-text">Thank you for your purchase!</p>
                        <button className="btn btn-primary" onClick={handleGoToCart}>
                            Go to Cart
                        </button>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="paymentMethod" className="form-label">Payment Method</label>
                    <select className="form-select" id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                        <option value="credit">Credit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </div>
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
                <button type="submit" className="btn btn-primary">Place Order</button>
            </form>
        </div>
    );
}

export default Checkout;
