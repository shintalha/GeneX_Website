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
        <a href='https://twitter.com/shintalha'>
          <div className="item">
            <img width="100%" src="https://i.ibb.co/KzZtNT3/2.jpg" alt="photo" />
            <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" alt="twitter"  width="40px"/> @shintalha </h1>
          </div>
        </a>
        <a href='https://twitter.com/shintalha'>
          <div className="item">
            <img width="100%" src="https://i.ibb.co/6F8K84P/3.jpg" alt="photo" />
            <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" alt="twitter"  width="40px"/> @gokkayazeynep </h1>
          </div>
        </a>
        <a href='https://twitter.com/shintalha'>
          <div className="item">
            <img width="100%" src="https://i.ibb.co/J2wHd1Q/4.jpg" alt="photo" />
            <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" alt="twitter"  width="40px"/> @satoshi </h1>
          </div>
        </a>
        <a href='https://twitter.com/shintalha'>
          <div className="item">
            <img width="100%" src="https://i.ibb.co/ccCvzdY/image.jpg" alt="photo" />
            <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" alt="twitter"  width="40px"/> @tekinaltınok </h1>
          </div>
        </a>
        <a href='https://twitter.com/shintalha'>
          <div className="item">
            <img width="100%" src="https://i.ibb.co/KzZtNT3/2.jpg" alt="photo" />
            <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" alt="twitter"  width="40px"/> @maxstepaln </h1>
          </div>
        </a>
        <a href='https://twitter.com/shintalha'>
          <div className="item">
            <img width="100%" src="https://i.ibb.co/KzZtNT3/2.jpg" alt="photo" />
            <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" alt="twitter"  width="40px"/> @shintalha </h1>
          </div>
        </a>
        <a href='https://twitter.com/shintalha'>
          <div className="item">
            <img width="100%" src="https://i.ibb.co/6F8K84P/3.jpg" alt="photo" />
            <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" alt="twitter"  width="40px"/> @gokkayazeynep </h1>
          </div>
        </a>
        <a href='https://twitter.com/shintalha'>
          <div className="item">
            <img width="100%" src="https://i.ibb.co/J2wHd1Q/4.jpg" alt="photo" />
            <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" alt="twitter"  width="40px"/> @satoshi </h1>
          </div>
        </a>
        <a href='https://twitter.com/shintalha'>
          <div className="item">
            <img width="100%" src="https://i.ibb.co/ccCvzdY/image.jpg" alt="photo" />
            <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" alt="twitter"  width="40px"/> @tekinaltınok </h1>
          </div>
        </a>
        <a href='https://twitter.com/shintalha'>
          <div className="item">
            <img width="100%" src="https://i.ibb.co/KzZtNT3/2.jpg" alt="photo" />
            <h1><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" alt="twitter"  width="40px"/> @maxstepaln </h1>
          </div>
        </a>
        
      </Carousel>
    </div>
  )
}
