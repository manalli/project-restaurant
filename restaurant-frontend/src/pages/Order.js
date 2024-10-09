import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Order.css';
import { useCart } from './CartContext'; // Import the useCart hook

function Order() {
    const [food, setFood] = useState([]);
    const { addToCart } = useCart(); // Use the addToCart from context
    const apiUrl = "http://localhost:5000/api/products";
    const navigate = useNavigate();

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => setFood(res));
    }, []);

    const handleAddToCart = (item) => {
        console.log('Adding to cart:', item);
        addToCart(item); // Use the context's addToCart
        navigate('/cart'); // Navigate to the cart page
    };

    const formattedFood = food.map((res) => {
        return (
            <div className="mt-5 col-4" key={res.itemNo}>
                <div className="card mb-3 me-4" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4 p-4 pb-0">
                            <img src={res.image} className="img-fluid" alt="..." style={{ width: '140.13px', height: '130.19px' }} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{res.dishName}</h5>
                                <p className="card-text"><small className="text-body-secondary">{res.quantity}</small></p>
                                <p className="card-text">${res.rate}</p>
                                <button className="btn btn-outline-success" onClick={() => handleAddToCart(res)}>Add item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {formattedFood}
            </div>
        </div>
    );
}

export default Order;

