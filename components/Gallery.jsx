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
            <h1 style={{height: "40px"}}><img src="/iconnew.ico" alt="twitter" width="40px" /> redox </h1>
          </div>
        </a>
        <a>
          <div className="item">
            <img width="100%" src="/mrTreky.jpg" alt="photo" />
            <h1 style={{height: "40px"}}><img src="/iconnew.ico" alt="twitter"  width="40px"/> mrTreky </h1>
          </div>
        </a>
        <a>
          <div className="item">
            <img width="100%" src="/YDalek.jpg" alt="photo" />
            <h1 style={{height: "40px"}}><img src="/iconnew.ico" alt="twitter"  width="40px"/> YDalek </h1>
          </div>
        </a>
        
        <a>
          <div className="item">
            <img width="100%" src="/SayeiTmr.jpg" alt="photo" />
            <h1 style={{height: "40px"}}><img src="/iconnew.ico" alt="twitter"  width="40px"/> SayeiTmr </h1>
          </div>
        </a>

        <a>
          <div className="item">
            <img width="100%" src="/xun.jpg" alt="photo" />
            <h1 style={{height: "40px"}}><img src="/iconnew.ico" alt="twitter"  width="40px"/> xun </h1>
          </div>
        </a>


        <a>
          <div className="item">
            <img width="100%" src="/zebreyn.jpg" alt="photo" />
            <h1 style={{height: "40px"}}><img src="/iconnew.ico" alt="twitter"  width="40px"/> zebreyn </h1>
          </div>
        </a>        
      </Carousel>
    </div>
  )
}
