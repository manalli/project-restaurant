import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Menu() {
    const [food, setfood] = useState([]);
    const apiUrl = "http://localhost:5000/api/products";
    const navigate = useNavigate();


    useEffect(() => {
        fetch(apiUrl).then(res => res.json()).then(res => setfood(res));
        
    }, [])


    const formattedfood = food.map((res) => {

        return (
            <>

                <div className="col-4">
                    <div class="card mb-3 me-4" style={{ maxWidth: '540px' }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={res.image} class="img-fluid " alt="..." style={{width:'130.13px', height:'130.19px'}} />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{res.dishName}</h5>
                                    <p class="card-text"><small class="text-body-secondary">{res.description}</small></p>
                                    <p className="card-text"><small className="text-body-secondary">{res.quantity}</small></p>
                                    <p class="card-text">${res.rate}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })
    return (
        <>
            <div className="container-fluid" align="center">
                    <img src="https://t3.ftcdn.net/jpg/03/09/12/08/360_F_309120828_Im6056Rq4hpYjxU6OWtvr9A43ZO5HBVQ.jpg" className="m-3" alt="..." />
                    <img src="https://img.freepik.com/premium-photo/delicious-pasta-dish-with-sauce-dark-background-perfect-food-italian-cuisine-themes-ai-generated_88188-3744.jpg" className="m-3" style={{}} />
                </div>
            <h2 className="m-5" align="center">Menu</h2>
            <div class="container  " >
                <div class=" row ">
                    {formattedfood}
                </div>
            </div>
        </>

    );
}
export default Menu;

