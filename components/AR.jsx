import React from "react"


export const AR = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div id="AR" className="relative py-20 bg-primary">
      <h4 id='header'>TRY TRAITS OF GENEX ON YOURSELF</h4>
        <div className="b">
          <a className="phonecss">
            <a className="block">
              <div className="item">
                <img width="100%" src="/cyrod1.png" alt="photo" />
              </div>
              <h2>CYROD</h2>
            </a>
            <div className="phone">
              <video src="/phone1.mp4" alt="video" muted={true} playsInline={true} autoPlay={true} loop={true} />
            </div>         
          </a>
        </div>
        <div className="b">
          <a className="phonecss">
            <div className="phoneleft">
              <video src="/metakask.mp4" alt="video" muted={true} playsInline={true} autoPlay={true} loop={true}/>
            </div>
            <a className="block">
              <div className="itemright">
                <img width="100%" src="/metakask.png" alt="photo" />
              </div>
              <h3>META</h3>
            </a>
          </a>
        </div>
        <div className="b">
          <a className="block">
            <h1>Everyone wants to interact with their NFTs. We thought about this and worked in the AR environment so that you can experience the traits of GENEX on yourself very soon. We continue to work on other traits. Not only that, we have made it possible to share it with your social media accounts. You will be able to try the traits on yourself by going to the "Effects" section on our Instagram account and share them with your friends very soon. Follow us on Instagram and stay up to date!</h1>
            <a className="flex" href="https://instagram.com/genexprojectnft" target="_blank" rel="noreferrer">
              <img className="instalogo" width="50vw" src="/instalogo.svg" alt="instalogo" />
              <h1><span>@genexprojectnft</span></h1>
            </a>
          </a>
        </div>
    </div>
  )
}
