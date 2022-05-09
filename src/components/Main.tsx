import { useAuth0 } from "@auth0/auth0-react";
import { WALLET_ADAPTERS } from "@web3auth/base";
import { useEffect, useState } from "react";
import { useWeb3Auth } from "../services/web3auth";
import styles from "../styles/Home.module.css";

const Main = () => {
  const { provider, login: loginWithWeb3Auth, logout: logoutWithWeb3Auth, getUserInfo, getAccounts, getBalance, signMessage, signTransaction, signAndSendTransaction, web3Auth, chain } = useWeb3Auth();
  const { isAuthenticated } = useAuth0()
  const [isLogout, setIsLogout] = useState(false)

  useEffect(() => {
    if (isAuthenticated && !isLogout ) {
      loginWithWeb3Auth()
    } 
  }, [isAuthenticated, loginWithWeb3Auth, isLogout])

  const handleLogout = () => {
    setIsLogout(true)
    logoutWithWeb3Auth()
  }
 

  const loggedInView = (
    <>
      <button onClick={getUserInfo} className={styles.card}>
        Get User Info
      </button>
      <button onClick={getAccounts} className={styles.card}>
        Get Accounts
      </button>
      <button onClick={getBalance} className={styles.card}>
        Get Balance
      </button>
      <button onClick={signMessage} className={styles.card}>
        Sign Message
      </button>
      {
        (web3Auth?.connectedAdapterName === WALLET_ADAPTERS.OPENLOGIN || chain === "solana") &&
        (<button onClick={signTransaction} className={styles.card}>
          Sign Transaction
      </button>)
      }
      <button onClick={signAndSendTransaction} className={styles.card}>
        Sign and Send Transaction
      </button>
      <button onClick={handleLogout} className={styles.card}>
        Log Out
      </button>

      <div className={styles.console} id="console">
        <p className={styles.code}></p>
      </div>
    </>
  );

  const unloggedInView = (

    <>
    
    </>

  );

  return <div className={styles.grid}>{provider ? loggedInView : unloggedInView}</div>;
};

export default Main;
