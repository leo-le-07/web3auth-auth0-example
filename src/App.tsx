import "./App.css";
import { useState } from "react";
import { WEB3AUTH_NETWORK_TYPE } from "./config/web3AuthNetwork";
import { CHAIN_CONFIG_TYPE } from "./config/chainConfig";
import styles from "./styles/Home.module.css";
import { Web3AuthProvider } from "./services/web3auth";
import Setting from "./components/Setting";
import Main from "./components/Main";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Auth0Provider } from "@auth0/auth0-react";
import Login from "./components/Login";

function App() {
  const [web3AuthNetwork, setWeb3AuthNetwork] = useState<WEB3AUTH_NETWORK_TYPE>("testnet");
  const [chain, setChain] = useState<CHAIN_CONFIG_TYPE>("mainnet");

  return (
        <Router >
        <Auth0Provider
          domain="dev-qfkhy-6r.us.auth0.com"
          clientId="MrB5yGmEjMtra4tHtXVRoEWgAWQqs7Nf"
          redirectUri="http://localhost:3000/"
          >
              <div className={styles.container}>
            <Web3AuthProvider chain={chain} web3AuthNetwork={web3AuthNetwork}>
              <h1 className={styles.title}>
                <a target="_blank" href="http://web3auth.io/" rel="noreferrer">
                  Web3Auth
                </a>{" "}
                & ReactJS Example
              </h1>
                <Setting setNetwork={setWeb3AuthNetwork} setChain={setChain} />
                
            
                <Routes>
                  <Route path="/" element={<Main/>} />
                  <Route path="/login"  element={<Login/>} />
        
                </Routes>
            
        
            </Web3AuthProvider>
            <footer className={styles.footer}>
              <a href="https://github.com/Web3Auth/Web3Auth/tree/master/examples/react-app" target="_blank" rel="noopener noreferrer">
                Source code {"  "}
                <img className={styles.logo} src="/images/github-logo.png" alt="github-logo" />
              </a>
            </footer>
          </div>
        </Auth0Provider>
        </Router>

  
  );
}

export default App;
