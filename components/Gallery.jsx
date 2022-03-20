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
            <img width="100%" src="https://i.ibb.co/KzZtNT3/2.jpg" alt="photo" />
            <h1><img src="/iconnew.ico" alt="twitter"  width="40px"/> @leadgene </h1>
          </div>
        </a>
        <a>
          <div className="item">
            <img width="100%" src="https://i.ibb.co/J2wHd1Q/4.jpg" alt="photo" />
            <h1><img src="/iconnew.ico" alt="twitter"  width="40px"/> zebreyn </h1>
          </div>
        </a>
        <a>
          <div className="item">
            <img width="100%" src="https://i.ibb.co/6F8K84P/3.jpg" alt="photo" />
            <h1><img src="/iconnew.ico" alt="twitter"  width="40px"/> re11mon </h1>
          </div>
        </a>
        
        <a>
          <div className="item">
            <img width="100%" src="https://i.ibb.co/ccCvzdY/image.jpg" alt="photo" />
            <h1><img src="/iconnew.ico" alt="twitter"  width="40px"/> mismisking </h1>
          </div>
        </a>
        
        
      </Carousel>
    </div>
  )
}
