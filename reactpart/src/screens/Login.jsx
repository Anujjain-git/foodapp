import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {NavbarSC} from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
    let navigate = useNavigate();
    const [cred, setcred] = useState({ email: '', password: '' });
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const da = JSON.stringify({ email: cred.email, password: cred.password })
        const response = await fetch(`${window.location.origin}/api/loginuser`, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: da
        });

        const json = await response.json();
        console.log(json)
        if (!json.success)
            alert('Enter valid credentials.');
        else{
            localStorage.setItem("authToken", json.authToken);
            localStorage.setItem("userEmail", cred.email);
            console.log(localStorage.getItem("authToken"))
            navigate('/');
        }
    }

    function onchange(ev) {
        setcred({ ...cred, [ev.target.name]: ev.target.value })
    }

    return (
        <>
            <div  style={{ backgroundImage:`url("https://images.squarespace-cdn.com/content/v1/60f0f061719e6a2268ce49da/bea605b3-b56d-4c75-a141-bcefd43acd53/bACKGROUNDS.jpg")`, backgroundSize:"cover", backgroundPosition: "center"} }>
        <NavbarSC />

            <div className="container mt-5 " style={{marginBottom: "280px"} }>
                <form onSubmit={HandleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onChange={onchange} type="email" style={{backgroundColor: "transparent"}} name="email" value={cred.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input style={{backgroundColor: "transparent"}} onChange={onchange} type="password" className="form-control" id="exampleInputPassword1" name="password" value={cred.password} />
                    </div>

                    <button type="submit" className="btn m-3 btn-primary" style={{backgroundColor: "transparent"}} >Submit</button>
                    <Link className="m-3 btn btn-danger" to="/createuser" style={{backgroundColor: "transparent"}}>New to FoodPlaza?</Link>
                </form>
            </div>
            <Footer />
            </div>
        </>
    )
}

export default Login