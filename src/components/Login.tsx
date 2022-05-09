import React from "react";
import styles from "../styles/Home.module.css";
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
    const { loginWithRedirect } = useAuth0();
        return (
        <>
        <button onClick={() => loginWithRedirect()} className={styles.card}>
                Login
        </button>
        </>
    )

   
}
export default Login