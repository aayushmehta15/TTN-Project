import React, { useEffect } from "react";
import logo from "../../../assets/Logo/tothenewLogo.png";
import classes from "./LoginPageComp.module.css";
import { useDispatch } from "react-redux";
import {setUserToken} from "../../../redux"

const LoginPageComp = props => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setUserToken())
    },[])
    return (
        <div className={classes.container}>
            <div className={classes.subContainer}>
                {/**************** Left Section Container ****************/}
                <div className={classes.leftContainer}>
                    <img src={logo} alt="logo" />
                    <h3>Enter your details and Start your journey with us</h3>
                    <p>Don't stop until you're proud</p>
                    <br />
                    <a href="http://localhost:9000/auth/google">
                        Sign In with Google
                    </a>
                </div>

                {/**************** Right Section Container ****************/}
                <div className={classes.rightContainer}>
                    <h3>Login To Your Account</h3>

                    <form>
                        <div className={classes.inputField}>
                            <input type="email" placeholder="TTN Username" />
                            <br />
                            <input type="password" placeholder="Password" />
                            <br />
                        </div>

                        <div className={classes.subSection}>
                            <div>
                                <input type="checkbox" id="rememberme" />
                                <label htmlFor="rememberme">Remember Me</label>
                            </div>

                            <a href="/">Forgot Password?</a>
                        </div>
                        <div>
                            <input type="submit" value="Sign In" disabled />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPageComp;
