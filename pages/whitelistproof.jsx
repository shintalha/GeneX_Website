import { useState } from "react"
import proof from "../lib/proof/proof"
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Whitelistproof = () => {
    const [address, setAddress] = useState("");
    const [proofMessage, setProofMessage] = useState("Please paste your wallet address to the address field and click GIVE MY PROOF button. Your proof will appear here and you will able to copy it by clicking on it.");
    const [state, setState] = useState(false);

    
    function giveProof() {
      const p = proof(address);

      if(p) setProofMessage(p);
      else setProofMessage("You do not have whitelist! If you think there is a mistake, create a ticket from support channel in our Discord Server.");
    }

    return (
      <>
        <div className="posab4 wl">
        <h1 style={{marginTop: "2vh"}}>Whitelistproof</h1>
        <h2>Hello GeneX. If you won whitelist for GeneX mint, you need proof value to mint GeneX from our contract. 
          Its complately safe and you do not need to connect wallet to the website. 
          All you have to do is paste your wallet address to the address field and click "GIVE MY PROOF".
          When you do that, the proof will apear in PROOF box and you can copy proof clicking the proof field.</h2>
        <input placeholder="Please paste your wallet address" size={47} style={{marginLeft: "38vw", marginTop: "2vh"}} className="buttonproof px-4 py-2 font-extrabold text-black-300 border  rounded-md" onChange={e => setAddress(e.target.value)} value={address} />
        <br /><button style={{marginLeft: "47vw",marginTop: "2vh"}} className="buttonproof cursor-pointer px-4 py-2 font-extrabold text-black-300 border  rounded-md" onClick={giveProof}>GIVE MY PROOF</button>
        <CopyToClipboard onCopy={() => setState(true)} text={proofMessage}>
        <div style={{padding: "10px 10px",overflowY: "auto",overflowWrap: "break-word",textAlign: "center",marginLeft: "32vw", marginTop: "2vh", width: "40vw", height: "20vh"}} className="buttonproof cursor-pointer font-extrabold text-black-300 border rounded-md">
          <span>{proofMessage}</span>
          
          </div>
          </CopyToClipboard> <br />
          <div style={{marginTop: "2vh"}}>{state ? <span className="buttonproof rounded-md" style={{marginLeft: "49.5vw"}}>COPIED</span> : null}</div>
        </div>
      </>
    )
  }
  
  export default Whitelistproof;