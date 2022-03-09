import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
export const Ptext = () => {
  return (
    <div className='ptext'>
      <div className="projectinfo">
        <div className="about">

          <h1>ABOUT-THE-PROJECT</h1>
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

          <h1>PRE-SALE</h1>
          
          <h2>3500</h2>
          <ReactTypingEffect
            cursorRenderer={cursor => <h3>{cursor}</h3>}
            text={["CLONE X Corp was founded by three extraterrestrials who came from the planet of Orbitar in the Draco constellation. These interplanetary tourists have come to accelerate our evolution towards an immaterial existence. They plan to transfer all human consciousness into advanced clone forms to create the ultimate Metaverse. \m \n In this advanced civilization, humans no longer reside in an organic form but are instead represented by their digital CloneX avatars. This ground breaking technology has revolutionized Homo sapiens's ability to self-express themselves through customizable avatar identities. This development also allows Clones to travel across galaxies and expand our civilization into new galaxies and simulations."]}
            speed="25"
            eraseDelay={1000000}
          />
        </div>
        <div className="publicsale">

          <h1>Public Sale</h1>
          <h2>6500</h2>
          <ReactTypingEffect
            cursorRenderer={cursor => <h3>{cursor}</h3>}
            text={["CLONE X Corp was founded by three extraterrestrials who came from the planet of Orbitar in the Draco constellation. These interplanetary tourists have come to accelerate our evolution towards an immaterial existence. They plan to transfer all human consciousness into advanced clone forms to create the ultimate Metaverse. \m \n In this advanced civilization, humans no longer reside in an organic form but are instead represented by their digital CloneX avatars. This ground breaking technology has revolutionized Homo sapiens's ability to self-express themselves through customizable avatar identities. This development also allows Clones to travel across galaxies and expand our civilization into new galaxies and simulations."]}
            speed="25"
            eraseDelay={1000000}
          />
        </div>
      </div>
    </div>
  )
}
