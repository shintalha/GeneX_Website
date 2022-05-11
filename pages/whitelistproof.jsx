import { useState } from "react"
import proof from "../lib/proof/proof"
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Whitelistproof = () => {
    const [address, setAddress] = useState("");
    const [proofMessage, setProofMessage] = useState("Please paste your wallet address to the address field and click GIVE MY PROOF button. Your proof will appear here and you will able to copy it by clicking on it.");
    const [state, setState] = useState(false);

    
    function giveProof() {
      if(address.length==42 && address[0]=='0' && address[1]=='x')
      {
      const p = proof(address);

      if(p) setProofMessage(p);
      else setProofMessage("You do not have whitelist! If you think there is a mistake, create a ticket from support channel in our Discord Server.");
      }
      else 
      setProofMessage("Please type a valid address");
    }

    return (
      <>
        <div className="posab4 wl">
        <h1 style={{marginTop: "2vh"}}>Whitelistproof</h1>
        <h2>Hello GeneX. If you won whitelist for GeneX mint, you need proof value to mint GeneX from our contract. 
          Its complately safe and you do not need to connect wallet to the website. 
          All you have to do is paste your wallet address to the address field and click "GIVE MY PROOF".
          When you do that, the proof will apear in PROOF box and you can copy proof clicking the proof field.</h2>
          <div className="inputnag">
        <input placeholder="Please paste your wallet address" style={{width: "100%"}} className="buttonproof px-4 py-2 font-extrabold text-black-300 border  rounded-md" 
        onChange={e => setAddress(e.target.value)} value={address} />
        </div>
        <br /><button  className="buttonproof buttonag cursor-pointer px-4 py-2 font-extrabold text-black-300 border  rounded-md" onClick={giveProof}>GIVE MY PROOF</button>
        <CopyToClipboard onCopy={() => setState(true)} text={proofMessage}>
        <div className="proofbox buttonproof cursor-pointer font-extrabold text-black-300 border rounded-md">
          <span>{proofMessage}</span>
          
          </div>
          </CopyToClipboard> <br />
          <div style={{marginTop: "2vh"}}>{state ? <span className="copied buttonproof rounded-md">COPIED</span> : null}</div>
        </div>
      </>
    )
  }
  
  export default Whitelistproof;