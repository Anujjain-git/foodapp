import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {NavbarSC} from "../components/Navbar";
import Footer from "../components/Footer";

function Signup() {
    const [cred, setcred] = useState({ name: '', email: '', password: '', location: '' });
    let navigate= useNavigate();
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const name1 = cred.name;
        const pass1 = cred.password;
        const da = JSON.stringify({ name: name1, email: cred.email, password: pass1, location: cred.location })
        const response = await fetch(`${window.location.origin}/api/createuser`, {


            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: da
        });

        const json = await response.json();
        if (!json.success)
            alert('Enter valid credentials.')
        else {
            localStorage.setItem("authToken", json.authToken);
            localStorage.setItem("userEmail", cred.email);
            console.log(json.authToken)
            navigate('/');
        }
    }

    function onchange(ev) {
        setcred({ ...cred, [ev.target.name]: ev.target.value })
    }

    return (
        <>
        <div  style={{ backgroundImage:`url("https://themewagon.github.io/food-funday/images/banner.jpg")`, backgroundSize: "cover" , backgroundPosition:"center"} }>

        <NavbarSC />
            <div className="container mt-5" style={{marginBottom: "110px"}}>
                <form onSubmit={HandleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="examplename" className="form-label" >Full Name</label>
                        <input onChange={onchange} type="text" name="name" value={cred.name} className="form-control" id="examplename" style={{backgroundColor: "transparent"}} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input onChange={onchange} type="email" name="email" value={cred.email} style={{backgroundColor: "transparent"}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input onChange={onchange} type="password" className="form-control" id="exampleInputPassword1" style={{backgroundColor: "transparent"}} name="password" value={cred.password} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputlocation" className="form-label" style={{backgroundColor: "transparent"}}>Location</label>
                        <input onChange={onchange} type="text" name="location" value={cred.location} className="form-control" id="exampleInputlocation" style={{backgroundColor: "transparent"}} />
                    </div>

                    <button type="submit" className="btn m-3 btn-primary" style={{backgroundColor: "transparent"}}>Submit</button>
                    <Link className="m-3 btn btn-danger" to="/login" style={{backgroundColor: "transparent"}}>Already a user?</Link>
                </form>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Signup;