import { validateYupSchema } from 'formik';
import React, { useState } from 'react';
import { Router, Switch, useHistory } from "react-router"
import {
    Redirect
} from "react-router-dom"
// import { Formik } from "formik";
// import * as Yup from "yup";

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const history = useHistory();

    const handle = () => {

        const isAvailable = user.find((instance) => {

            return (
                instance.email === email && instance.password === pwd
            )

        })

        if (isAvailable) {
            // set log in data in localstore and redirect
            localStorage.setItem("Email", email);
            localStorage.setItem("password", pwd);
            history.push("/signupinfo")

            console.log("yes")
        }
        else {
            // show error msg

            alert("enter the valid email and password")
            history.push("/signup")
            console.log("no")

        }



    };
    const user = JSON.parse(localStorage.getItem('values'));

    const handleSignClick = () => {
        history.push("/signup");
    }

    // const handleLoginClick = () => {
    //     history.push("/navbar")
    // }

    const handleForget = () => {
        history.push("/forget")
    }

    return (
        <div className="row h-100 justify-content-center align-items-center">
            <h5 className="text-center display-5">PandaBiz</h5>
            <form className="login">
                <div className="mb-3">
                    <label htmlFor="email" className="label-form mb-1 text-muted control">Email</label>
                    <input type="text" id="eamil"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="label-form mb-1 text-muted">Password</label>
                    <input type="password" id="password" className="form-control"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}

                    />
                </div>


                <div className="d-flex justify-content-between align-items-center mb-2">

                    <button className="btn btn-primary" onClick={handleSignClick} type="button">Sign Up</button>
                    <button className="btn btn-primary" onClick={handle} type="button">Log In</button>

                </div>
                <br />

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                    />
                    <label htmlFor="checkbox" className="form-check-label try-btn" > Remember me </label>
                    <a href="#" onClick={handleForget} className="link-size link-right text-decoration-none">Forget Your Password?</a>
                </div>




                <hr className="new1" />
            </form>
            <footer>
                <div className="text-center">
                    <p className="terms text-muted">© 2021 hangingpanda.com, inc. All rights reserved. | <a href="#" className="text-decoration-none">Privacy</a> </p>
                </div>
            </footer>
        </div>
    )
}
export default LoginForm