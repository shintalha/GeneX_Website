import React from "react"
import ReactTypingEffect from "react-typing-effect";
export const Ptext = () => {
  return (
    <div className="ptext">
      <div className="projectinfo">
        <div className="about">

          <h1>ABOUT THE PROJECT</h1>
          <h2>The GeneX Project is a unique and rare 3D NFT collection of 10,000 NFTs created by randomly generating over 200 traits. The collection is based on the Ethereum blockchain and includes 10k unique GeneX.</h2>
          <ReactTypingEffect
            cursorRenderer={cursor => <h3>{cursor}</h3>}
            text={["Gene X is an arrangement of our genes that determines the characteristics of all of us, transferred to WEB3. We think that this gene will represent our appearance and personality in the Metaverse. Join our family to find your GeneX item that you can best represent yourself on WEB3! "]}
            speed="25"
            eraseDelay={1000000}
          />
        </div>
        
        <div className="avatars">

          <h1>THE CONTRACT</h1>
          <h2>ERC721A</h2>
          <ReactTypingEffect
            cursorRenderer={cursor => <h3>{cursor}</h3>}
            text={["As the creators of the collection, we follow the latest developments in the NFT world. We are happy to say that we are using the ERC721A contract developed and accessible by the Azuki team. Thanks to the ERC721A, the gas fee of minting more than one GeneX at a time is almost the same as the gas fee of minting a single GeneX. In this way, we aim to save our family members who will mint GeneX from paying excessive gas fees and reduce the density on the Ethereum blockchain. For technical details, you can check the official website of ERC721A."]}
            speed="25"
            eraseDelay={1000000}
          />
        </div>
        <div className="presale">

          <h1>THE LIMITED SUPPLY</h1>
          
          <h2>4444</h2>
          <ReactTypingEffect
            cursorRenderer={cursor => <h3>{cursor}</h3>}
            text={["Our collection consists of 4444 3D GeneX characters. 1700 of the GeneXs, each of which are different and rare, will find their owners in the pre-sale, where only those who have a Whitelist can purchase. The remaining 2744 GeneX will find their owners in the Public Sale. The Mint price will be 0.055 ETH for the whitelist, while it will be 0.088 ETH for the Public Sale."]}
            speed="25"
            eraseDelay={1000000}
          />
        </div>
        <div className="publicsale">

          <h1>THE VISION</h1>
          <h2>METAVERSE</h2>
          <ReactTypingEffect
            cursorRenderer={cursor => <h3>{cursor}</h3>}
            text={["We are as excited as you are for Metaverse, where the NFT world has been experiencing great hype lately. After all GeneXs find their owners, we want to take our place in a metaverse that we decided together with our committee. (Sandbox, Decentraland etc.) We want to build a space where we can spend time and organize activities freely with our family members from all over the world. We look forward to exploring the world of Metaverse with you."]}
            speed="25"
            eraseDelay={1000000}
          />
        </div>
      </div>
    </div>
  )
}
