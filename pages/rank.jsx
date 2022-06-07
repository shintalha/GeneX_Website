import { useState } from "react"
import rank from "../lib/rank/rarity"
import Head from "next/head";

const RANK_component = () => {
const [ID, setID] = useState();
const [Message, setMessage] = useState("Write your ID and click GET RANK button.");

function giveRank() {
    if(0 < ID && ID < 5556)
    {
    var id = rank(ID);
    setMessage("RANK: " + id.toString());
    }
    else 
    setMessage("Please enter an ID between 1 and 5555!");
}

return (
    <>
     <Head>
        <title>GeneX Project Ranking</title>
        <meta name="description" content="Find out the rarity rank of your GeneX NFTs!" />
        <link rel="icon" href="/iconnew.ico" />
      </Head>
      <div className="posab4 wl">
      <h1 style={{marginTop: "2vh"}}>GeneX Project Ranking</h1>
      <h2>Hello GeneX. Write your GeneX's ID to the ID Field and click 'GET RANK' button and know your GeneX's ID.</h2>
        <div className="inputnag">
      <input  type="text" placeholder="Please write your Genex's ID" style={{width: "100%"}} className="buttonproof px-4 py-2 font-extrabold text-black-300 border  rounded-md" 
      onChange={e => setID(e.target.value)} value={ID} />
      </div>
      <br /><button  className="buttonproof buttonag cursor-pointer px-4 py-2 font-extrabold text-black-300 border  rounded-md" onClick={giveRank}>GET GENEX RANK</button>
      
      <div className="proofbox buttonproof cursor-pointer font-extrabold text-black-300 border rounded-md">
        <span>{Message}</span>
        
        </div>
        
        
      </div>
    </>
  )
}

export default RANK_component;