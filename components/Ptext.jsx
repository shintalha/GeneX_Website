import React from "react"
import ReactTypingEffect from "react-typing-effect";
export const Ptext = () => {
  return (
    <div className="ptext">
      <div className="projectinfo">
        <div className="about">
          <h1>ABOUT THE PROJECT</h1>
          <h2>The GeneX Project is a unique and rare 3D omnichain NFT collection of 5555 NFTs generated by random generation of over 200 features. The collection offers the opportunity to easily switch between networks such as Ethereum, Avalanche, Binance Smart Chain, Polygon and Arbitrum that host Layer Zero technology.</h2>
          <ReactTypingEffect
            cursorRenderer={cursor => <h3>{cursor}</h3>}
            text={["GeneXs represent a journey to planet Proxima B, with conditions very similar to our world, against inequality, injustice, racism, gender abuse and much more negative emotions in the world. Become part of the colony to this planet by owning GeneX."]}
            speed="25"
            eraseDelay={1000000}
          />
        </div>
        <div className="avatars">
          <h1>THE VISION</h1>
          <h2>OMNICHAIN</h2>
          <ReactTypingEffect
            cursorRenderer={cursor => <h3>{cursor}</h3>}
            text={["We are as excited as you are for Omnichain, where the NFT world has been experiencing great excitement lately. Interest in multi-chain technology is increasing day by day. Thanks to Omnichain, NFTs can be transferred to 7 different blockchains. And this is done safely. For this reason, we want to take our place early in this field with Layer Zero technology."]}
            speed="25"
            eraseDelay={1000000}
          />
        </div>

        <div className="presale">
          <h1>THE LIMITED SUPPLY</h1>
          <h2>5555</h2>
          <ReactTypingEffect
            cursorRenderer={cursor => <h3>{cursor}</h3>}
            text={["The supply of the GeneX collection will be 5555. This means a limited supply compared to most nft collections and makes each piece of the collection rarer. Taking part in the first collection in the world to defend an idea in Omnichain will put the collectors in a privileged position."]}
            speed="25"
            eraseDelay={1000000}
          />
        </div>
        
        <div className="publicsale">
          <h1>FREE MINT</h1>
          <h2>ONFT721</h2>
          <ReactTypingEffect
            cursorRenderer={cursor => <h3>{cursor}</h3>}
            text={["As the creators of the collection, we wanted to reach everyone. We are happy to say that you can mint GeneX as free. So, all GeneX's are accessible. "]}
            speed="25"
            eraseDelay={1000000}
          />
        </div>
      </div>
    </div>
  )
}
