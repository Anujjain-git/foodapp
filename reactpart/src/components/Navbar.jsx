import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";


function Navbarreal() {
    const [cartView, setCartView] = useState(false)
    let data = useCart();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate('/login');
    }
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 10) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };

     window.addEventListener('scroll', changeNavbarColor);

    return (
        <>
            <nav className= 'navbar navbar-expand-lg navbar-dark fixed-top' style={{backgroundColor: colorChange? "rgb(25,135,84)": "transparent", zIndex: global.atcart?"-1": "100"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">FoodPlaza</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                            </li>
                            {
                                (localStorage.getItem('authToken')) ?
                                    <li className="nav-item">
                                        <Link className="nav-link active fs-5" aria-current="page" to="/myOrder">My Orders</Link>
                                    </li> : ""
                            }

                        </ul>

                        {(!localStorage.getItem('authToken')) ?
                            <div className="d-flex">
                                <Link className="btn  text-success mx-1" style={{ backgroundColor: window.scrollY < 10? "transparent": "white", border:"2px solid rgb(25,135,84"}}to="/login">Login</Link>
                                <Link className="btn  text-success mx-1" style={{backgroundColor: window.scrollY < 10? "transparent": "white", border:"2px solid rgb(25,135,84"}}to="/createuser">SignUp</Link>
                            </div> :
                            <div>

                                <div className="btn  text-success mx-2" style={{ backgroundColor: window.scrollY < 10? "transparent": "white", border:"2px solid rgb(25,135,84"}} onClick={() => setCartView(true)}>
                                    My Cart {" "}
                                    <Badge pill bg="danger" > {data.length}</Badge>

                                </div>
                                {cartView ? <Modal onClose={() => {setCartView(false); global.atcart = false}} > <Cart /> </Modal> : null}
                                <div className="btn  text-danger mx-2" style={{ backgroundColor: window.scrollY < 10? "transparent": "white", border:"2px solid rgb(25,135,84"}} onClick={handleLogout}>
                                    Logout

                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </>
    );
}

function NavbarSC() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "transparent"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">FoodPlaza</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                            </li>
                        </ ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbarreal;
export { NavbarSC };