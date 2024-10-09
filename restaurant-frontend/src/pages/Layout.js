import { useEffect, useState } from "react";
import './Layout.css'
import { Link, Outlet } from "react-router-dom";


function Layout() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light myNav">
                <div class="container-fluid">
                    <div class="navbar-brand logo">MyRes</div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/timings" class="nav-link active" aria-current="page">Hours & Location</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/menu" class="nav-link active" aria-current="page">Menu</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" class="nav-link active" aria-current="page">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/cart" class="nav-link active" aria-current="page">Cart</Link>
                            </li>
                        </ul>
                        <Link class="btn btn-outline-dark" type="submit" to="/order">Order Online</Link>
                    </div>
                </div>
            </nav>
            <Outlet />
            <footer align="center" className="border border-dark border-2 mt-5">
                <p>&copy; 2024 MyRes. All rights reserved.</p>
            </footer>

        </>
    );
}

export default Layout;