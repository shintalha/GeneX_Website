import Head from "next/head";

import { useState, useEffect } from "react";
import { useStatus } from "../context/statusContext";
import { connectWallet, getCurrentWalletConnected } from "../utils/interact";

const Header = () => {
  const { setStatus } = useStatus();
  const [walletAddress, setWalletAddress] = useState("");
  const [isMintingOpen, setMintingState] = useState(false); // Minting ekranı değiştiren element.
  const [isMintingScOpen, setMintingScState] = useState("");
  const [mintingCount, setMintingCount] = useState("");
  const [isItDesktop, setDesktop] = useState(0);
  const [wscreen, setWscreen] = useState(false);


  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setWalletAddress(walletResponse.address);
    setStatus(walletResponse.status);
    
    if(!window.ethereum){
      setWscreen(true);
    }


  };
  const mintingButtonPressed = async () => {
    setMintingScState(!isMintingScOpen);

  };
  const closeMinting = async () => {
    setMintingScState(0);

  }
  const closeMetamask = async () => {
    setWscreen(false);

  }
  const countPlus = async (e) => {
    setMintingCount(mintingCount + 1);

  }
  const countMinus = async (e) => {
    if(mintingCount > 0) {
      setMintingCount(mintingCount - 1);
    }

  }
  
  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };

  useEffect(() => {
    const prepare = async () => {
      const walletResponse = await getCurrentWalletConnected();
      setWalletAddress(walletResponse.address);
      setStatus(walletResponse.status);
      
      setMintingScState(0);
      setMintingCount(0);
      setWscreen(false);
      addWalletListener();
      if(getDeviceType() == "desktop") {
        setDesktop(1);
      } else {
        setDesktop(0);

      }
    };

    prepare();
  }, []);

  const addWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          
        } else {
          setWalletAddress("");
          
        }
      });
    }
    
    
  };

  return (
    <>
      <Head>
        <title>THE GENEX PROJECT</title>
        <meta name="description" content="Nft Minting Tutorial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky inset-x-0 top-0 z-10 h-20 min-w-full text-white 
       bg-primary backdrop-filter bg-opacity-0 overflow-x-hidden">
        <div className=" container mx-auto max-w-7xl justify-between h-full">


          {/* Navigation */}

          <nav aria-label="Main Menu" className="headernavv">
            <a>
              <img src="/image2.png" alt="logo" id="logonav"/>

            </a>
            {
                walletAddress.length > 0 ? (
                  <a  onClick={mintingButtonPressed} className="mintingButton buttonrb cursor-pointer px-4 py-2 font-extrabold text-black-300 border rounded-md" id="mintingButton">

                    <span>Minting</span>
                  </a>
                ) : (null)
              }
                <a
                  onClick={connectWalletPressed} className="buttonrb cursor-pointer px-4 py-2 font-extrabold text-black-300 border  rounded-md"
                  id="walletButton"

                >
                  {walletAddress.length > 0 ? (
                    "Connected: " +
                    String(walletAddress).substring(0, 6) +
                    "..." +
                    String(walletAddress).substring(38)
                  ) : (
                    <span>Connect Wallet</span>
                  )}
                </a>
              
          </nav>

          {/* Opensea Twitter Discord Links */}
        
          
                      
        </div>
        <div>
          {wscreen ? (
            <div className="posab3 backdrop-filter backdrop-blur-lg" >
              <div onClick={closeMetamask} className="exit">✕</div>
              <span>
          <h2>
            <a target="_blank"
             rel="noreferrer"
             href="https://metamask.io/download.html" >🦊</a>
            </h2>
            <p>
            <a
             target="_blank"
             rel="noreferrer"
             href="https://metamask.io/download.html" 
            >
              You must install MetaMask, a virtual Ethereum wallet, in your
              browser. Please click Metamask logo to go to official Metamask download website. If you are on mobile, please go to Metamask App and come to the website from Browser on it.
            </a>
          </p>
        </span>
              
          </div>
          ): (null)}
        </div>
        {isMintingScOpen ? ( isMintingOpen ? (
          
            <div className="posab3 backdrop-filter backdrop-blur-lg">
            <div className="d-flex">
              <h2>THE GENEX PROJECT</h2>
              <div onClick={closeMinting} className="exit">✕</div>

            </div>
            <p>Your Wallet Adress : {String(walletAddress).substring(0, 6) +
                    "..." +
                    String(walletAddress).substring(38)}<br />
              The Number Of GeneX you can mint : <br />
              You area about to now You area about to now You area about to nowYou area about to nowYou area about to nowYou area about to now
            </p>
            <br />
            <div className="mtps">
              <div className="row">
                <div className="col1 ">
                  <div className="d-flex buttonsadd">
                  <button onClick={e => countMinus(e)}>-</button><p>{mintingCount}</p> <button onClick={e => countPlus(e)}>+</button>
                  </div>

                </div>
                <div className="rw">
                  <button className="mintButton">Mint</button>
                </div>
                <div className="rw sccs">
                  <p>Your Transaction succesfully completed.</p>
                </div>
              </div>
            </div>
          </div>
           ) : (<div className="posab3 backdrop-filter backdrop-blur-lg">
          <div className="d-flex">
            <h2>THE GENEX PROJECT</h2>
            <div onClick={closeMinting} className="exit">✕</div>
  
          </div>
          <p>Your Wallet Adress : {String(walletAddress).substring(0, 6) +
                  "..." +
                  String(walletAddress).substring(38)}<br />
            The Number Of GeneX you can mint : <br />
            Minting Date: To be announced.<br />
            Please follow Announcements from official GeneX Twitter and Discord servers to get know minting date. 
          </p>
          
         
        </div>)
        ) : (null)
        }
        <div className="posab">
          <p></p>

        </div>
        <div className="posab2">
          <nav aria-label="Contact Menu">
            <ul className="flex items-center space-x-6">


              <li>
                <a
                  href="https://twitter.com/DidemKkkaraasl1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-7 h-7"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://discord.gg/rAFdkCwn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-7 h-7"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M297.216 243.2c0 15.616-11.52 28.416-26.112 28.416-14.336 0-26.112-12.8-26.112-28.416s11.52-28.416 26.112-28.416c14.592 0 26.112 12.8 26.112 28.416zm-119.552-28.416c-14.592 0-26.112 12.8-26.112 28.416s11.776 28.416 26.112 28.416c14.592 0 26.112-12.8 26.112-28.416.256-15.616-11.52-28.416-26.112-28.416zM448 52.736V512c-64.494-56.994-43.868-38.128-118.784-107.776l13.568 47.36H52.48C23.552 451.584 0 428.032 0 398.848V52.736C0 23.552 23.552 0 52.48 0h343.04C424.448 0 448 23.552 448 52.736zm-72.96 242.688c0-82.432-36.864-149.248-36.864-149.248-36.864-27.648-71.936-26.88-71.936-26.88l-3.584 4.096c43.52 13.312 63.744 32.512 63.744 32.512-60.811-33.329-132.244-33.335-191.232-7.424-9.472 4.352-15.104 7.424-15.104 7.424s21.248-20.224 67.328-33.536l-2.56-3.072s-35.072-.768-71.936 26.88c0 0-36.864 66.816-36.864 149.248 0 0 21.504 37.12 78.08 38.912 0 0 9.472-11.52 17.152-21.248-32.512-9.728-44.8-30.208-44.8-30.208 3.766 2.636 9.976 6.053 10.496 6.4 43.21 24.198 104.588 32.126 159.744 8.96 8.96-3.328 18.944-8.192 29.44-15.104 0 0-12.8 20.992-46.336 30.464 7.68 9.728 16.896 20.736 16.896 20.736 56.576-1.792 78.336-38.912 78.336-38.912z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

    </>
  );
};

export default Header;
