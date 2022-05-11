import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcOk } from "react-icons/fc";
import { IoCheckmarkSharp } from "react-icons/io5";
export const Roadmap = () => {
  
  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return false;
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return false;
    }
    return true;
  };

  
  return (
    <div className="roadmap">
      <h1>Roadmap</h1>
    <div>
    <VerticalTimeline lineColor="blue" animate={getDeviceType()}>
      
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
    dateClassName="data"
    date="DONE"
    iconStyle={{background: 'rgb(0, 0, 0)', color: '#fff' }}
    icon={ <IoCheckmarkSharp />}
  >
    <h4>Step<span>1</span> -Arrival at PlatfromX
 </h4>
    <p>
    GeneX's graphic designs were prepared in 3D high quality. 
    5555 unique and rare GeneXs were randomly generated. 
    Our GeneXs from all over the world are ready to arrive at our PlatformX island to depart from a world of inequality and injustice to a planet of justice and a positive world.     </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
    dateClassName="data"
    date="DONE"
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    icon={ <IoCheckmarkSharp />}
  >
    <h4>Step<span>2</span> -Creation of TransportX</h4>
    <p>
    The website is uniquely prepared with ThreeJS technology. Accounts have been created on all community platforms (Twitter, Discord, Instagram, Medium, Tiktok). For a good and just world, the GeneXs created the TransportX spaceship.    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
    dateClassName="data"
    date="DONE"
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    icon={ <IoCheckmarkSharp />}
  >
    <h4>Step<span>3</span> -Let's Encapsulate GeneXs</h4>
    <p>
    Multi-Chain contract of our GeneX Nfts was prepared with Layer Zero technology. In this way, you can transfer GeneX Nfts to any blockchain (Ethereum, Avalanche, Binance Smart Chain, Polygon, Arbitrum) by only paying the Gas fee. The GeneXs are ready to take their place in TransportX for the hopeful purpose. The GeneXs are next in line to enter the capsule and take their place for the incredible adventure.</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
    dateClassName="data"
    date="MAY 2022"
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    
  >
    <h4>Step<span>4</span> -Proxima B: Our New Planet</h4>
    <p>
    GeneX NFTs obtained by making free mint have taken their place in all marketplaces. The rarity rating starts in the market areas and daily, weekly and monthly special events are held with NFT holders. The GeneXs have arrived on our new planet Proxima B, great adventures and good days await the GeneXs. </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
    dateClassName="data"
    date="200 ETH VOLUME TRADED"
    
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    
  >
    <h4>Step<span>5</span> -World Map Application
</h4>
    <p>
    Everyone has been wronged in the world we live in. Some of us told, some of us did not. With the World Map application we created on our website, everyone will write their own story on the location they choose from the map and we will be able to listen to each other's stories. GeneX gives community members the opportunity to express themselves and be heard.</p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
    dateClassName="data"
    date="2.000 ETH VOLUME TRADED"
    iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
    
  >
    <h4>Step<span>6</span> -Noble Planetary Officers Elected</h4>
    <p>
    With the DAO (Decentralized Autonomous Organization), community tasks and community staff selection will be made and the system will be democratically embedded in the Multi-Chain. Volunteer GeneXs are selected to do their planetary missions and all planetary missions are done.
</p>
  </VerticalTimelineElement>

  
</VerticalTimeline>
    </div>

    <div className="flex overflow-x-hidden">
      <img src="/splitf.gif" alt="video"/>
      <img src="/splitf.gif" alt="video"/>
      <img src="/splitf.gif" alt="video"/>


      </div>
       
    </div>
  )
}
