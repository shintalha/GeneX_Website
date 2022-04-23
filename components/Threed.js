import {Canvas, extend, useFrame, useThree} from "@react-three/fiber";
import React, {Suspense, useRef} from "react";
import Model from "./Compressedf"
import { Effects, Environment} from "@react-three/drei"
import {GlitchPass} from "three/examples/jsm/postprocessing/GlitchPass"

extend({GlitchPass});

const CCamera = () => {
  
  const { camera } = useThree();
  const ref = React.createRef(camera);
  function lerp(x, y, a) {
      return (1 - a) * x + a * y
    }
    function scalePercent(start, end) {
      return (scrollPercent - start) / (end - start)
    }
    let scrollPercent = 0;

document.body.onscroll = function () {
//calculate the current scroll progress as a percentage
scrollPercent =
    ((document.documentElement.scrollTop || document.body.scrollTop) /
        ((document.documentElement.scrollHeight ||
            document.body.scrollHeight) -
            document.documentElement.clientHeight)) *
        100;
};
var animationScripts = [];

animationScripts.push({
  start: 0,
  end: 4.49,
  func: () => {
      
    camera.position.y = lerp(6.90, 7.50, scalePercent(0, 4.50))
    camera.position.z=-0.10
    camera.position.x=-4.11
    camera.lookAt(-4.11,5,-0.25);
    
  },
})

//add an animation that rotates the cube between 40-60 percent of scroll
animationScripts.push({
  start: 4.5,
  end: 17.99,
  func: () => {
   
    camera.position.x = lerp(-4.11, -3.9, scalePercent(4.5, 18))
    camera.position.y = lerp(7.50, 8, scalePercent(4.5, 18))
    camera.lookAt(-4.11,5,-0.25);
    
    
  },
})

animationScripts.push({
  start: 18,
  end: 44.99,
  func: () => {
   
    camera.position.x = lerp(-3.9, 0.45, scalePercent(18, 45))
    camera.position.z = lerp(-0.14, 1.81, scalePercent(18, 45))
    camera.position.y = lerp(8, 10.91, scalePercent(18, 45))
    camera.lookAt(-4.11,5,-0.25);
    
    
  },
})

animationScripts.push({
  start: 45,
  end: 120,
  func: () => {
   
    camera.position.x = 0.45
    camera.position.z = 1.81
    camera.position.y = 10.91
    camera.lookAt(-4.11,5,-0.25);

    
    
  },
}) 

function playScrollAnimations() {
  animationScripts.forEach((a) => {
      if (scrollPercent >= a.start && scrollPercent < a.end) {
          a.func()
      }
  })
}
  useFrame(() => {
    playScrollAnimations();
  });
   
    return (
      <perspectiveCamera
        ref={ref}
        fov={50}
        aspect={window.innerWidth/window.innerHeight}
        near={0.01}
        far={1000}
        
      >
       
      </perspectiveCamera>
    );
  };

  const Loader = () => {

  }

const Threed = () => {
  
  
return(
    
    <Canvas style={{right:0 ,left:0 , top:0 , position:"fixed"}}>
        <Effects>
            <glitchPass attachArray="passes"/>
        </Effects>
        <CCamera/>
        <pointLight position={[-3.980, 8.68, -0.47]} color="white" intensity={1.50} distance={0} decay={1} />
        <Suspense fallback={null}>
        
        <Model />
        
        <Environment preset="night" background />
        </Suspense>
        
    </Canvas>
    
    
);

}

export default Threed;
