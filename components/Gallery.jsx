import React from "react"
import Carousel from "react-elastic-carousel";

export const Gallery = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div id="gallery" className="relative py-20 bg-primary">
      <h4 id='theteam'>The Team</h4>
      <Carousel variant="dark" breakPoints={breakPoints}>
        <a>
          <div className="item">
            <img width="100%" src="/redox.jpg" alt="photo" />
            <div className="flex items-center space-x-16" >
            <a href="https://www.linkedin.com/in/sahintalha/" target="_blank" rel="noreferrer"> <img style={{marginTop: "10px"}} src="/linkedn.png" alt="twitter" width="40px" /> </a>
            <h1 style={{height: "40px"}}>redox</h1>
            <a href="https://twitter.com/shintalha" target="_blank" rel="noreferrer"><img style={{marginTop: "10px", marginRight: "2px"}} src="/twitter.png" alt="twitter" width="40px" /> </a>
            </div>
          </div>
        </a>
        <a>
          <div className="item">
            <img width="100%" src="/mrTreky.jpg" alt="photo" />
            <div className="flex items-center space-x-12" >
            <a href="https://www.linkedin.com/in/cengiz-kilicaslan-53355b135/" target="_blank" rel="noreferrer"><img style={{marginTop: "10px"}} src="/linkedn.png" alt="twitter" width="40px" /> </a>
            <h1 style={{height: "40px"}}>mrtreky </h1>
            <a href="https://twitter.com/cengiz_kaslan" target="_blank" rel="noreferrer"><img style={{marginTop: "10px"}} src="/twitter.png" alt="twitter" width="40px" /></a>
            </div>
          </div>
        </a>
        <a>
          <div className="item">
            <img width="100%" src="/YDalek.jpg" alt="photo" />
            <div className="flex items-center space-x-16" >
            <a href="https://www.linkedin.com/in/farukbaktas/" target="_blank" rel="noreferrer"><img style={{marginTop: "10px"}} src="/linkedn.png" alt="twitter" width="40px" /> </a>
            <h1 style={{height: "40px"}}>ydalek</h1>
            <a href="https://twitter.com/FarukBaktas" target="_blank" rel="noreferrer"><img style={{marginTop: "10px"}} src="/twitter.png" alt="twitter" width="40px" /></a>
            </div>
          </div>
        </a>
        <a>
          <div className="item">
            <img width="100%" src="/SayeiTmr.jpg" alt="photo" />
            <div className="flex items-center space-x-12" >
            <a href="https://www.linkedin.com/in/nihatcuhaci/" target="_blank" rel="noreferrer"><img style={{marginTop: "10px"}} src="/linkedn.png" alt="twitter" width="40px" /> </a>
            <h1 style={{height: "40px"}}>sayeitmr</h1>
            <a href="" target="_blank" rel="noreferrer"><img style={{marginTop: "10px"}} src="/twitter.png" alt="twitter" width="40px" /></a>
            </div>
          </div>
        </a>
        <a>
          <div className="item">
            <img width="100%" src="/zebreyn.jpg" alt="photo" />
            <div className="flex items-center space-x-14" >
            <a href="https://www.linkedin.com/in/serkan-demir-6428041b4/" target="_blank" rel="noreferrer"><img style={{marginTop: "10px"}} src="/linkedn.png" alt="twitter" width="40px" /> </a>
            <h1 style={{height: "40px"}}>zebreyn</h1>
            <a href="https://www.behance.net/zebrain" target="_blank" rel="noreferrer"><img style={{marginTop: "10px"}} src="/behance.png" alt="twitter" width="40px" /></a>
            </div>
          </div>
        </a>        
      </Carousel>
    </div>
  )
}
