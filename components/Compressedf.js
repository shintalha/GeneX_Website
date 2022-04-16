
import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from "three";
import { DoubleSide } from 'three';

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/compressedf.glb', true)
  const getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };
  function useFunc(pathToVideo) {
    const [video] = useState(() => {
      
      const vid = document.createElement("video");
      vid.src = pathToVideo;
      vid.crossOrigin = "Anonymous";
      vid.loop = true;
      vid.muted = true;
      if(getDeviceType()=='desktop')
      vid.play();
      
      return vid;
    });
    return [video];
  }

  var texture = new THREE.TextureLoader().load("/image14.jpg");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-4.10717, 6.240774, 0.174763]}>
        <mesh
          geometry={nodes.big_wire001_high001.geometry}
          material={nodes.big_wire001_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001.geometry}
          material={nodes.big_wire002_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001.geometry}
          material={nodes.big_wire003_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001.geometry}
          material={nodes.big_wire005_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001.geometry}
          material={nodes.big_wire006_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001.geometry}
          material={nodes.big_wire007_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001.geometry}
          material={nodes.big_wire_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005.geometry}
          material={nodes.Cube005.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006.geometry}
          material={nodes.Cube006.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007.geometry}
          material={nodes.Cube007.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009.geometry}
          material={nodes.Cube009.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.floor_1_high001.geometry}
          material={nodes.floor_1_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_2_high001.geometry}
          material={nodes.floor_2_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001.geometry}
          material={nodes.floor_4_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001.geometry}
          material={nodes.floor_5_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001.geometry}
          material={nodes.floor_6_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001.geometry}
          material={nodes.floor_metalpiece_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002.geometry}
          material={nodes.fog_1002.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.fog_2001.geometry}
          material={nodes.fog_2001.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high.geometry} material={nodes.glass_1_high.material} />
        <mesh geometry={nodes.glass_2_high.geometry} material={nodes.glass_2_high.material} />
        <mesh geometry={nodes.glass_3_high.geometry} material={nodes.glass_3_high.material} />
        <mesh geometry={nodes.led_1_high.geometry} material={nodes.led_1_high.material} />
        <mesh geometry={nodes.led_2_high.geometry} material={nodes.led_2_high.material} />
        <mesh geometry={nodes.led_4_high.geometry} material={nodes.led_4_high.material} />
        <mesh
          geometry={nodes.misc_1_high001.geometry}
          material={nodes.misc_1_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001.geometry}
          material={nodes.misc_2_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod001_high001.geometry}
          material={nodes.pod001_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001.geometry}
          material={nodes.pod002_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001.geometry}
          material={nodes.pod003_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001.geometry}
          material={nodes.pod004_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001.geometry}
          material={nodes.pod005_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001.geometry}
          material={nodes.pod006_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001.geometry}
          material={nodes.pod007_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001.geometry}
          material={nodes.pod008_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001.geometry}
          material={nodes.pod009_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001.geometry}
          material={nodes.pod010_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001.geometry}
          material={nodes.pod011_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001.geometry}
          material={nodes.pod012_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001.geometry}
          material={nodes.pod013_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001.geometry}
          material={nodes.pod014_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001.geometry}
          material={nodes.pod015_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001.geometry}
          material={nodes.pod016_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001.geometry}
          material={nodes.pod017_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001.geometry}
          material={nodes.pod018_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001.geometry}
          material={nodes.pod019_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001.geometry}
          material={nodes.pod020_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001.geometry}
          material={nodes.pod021_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001.geometry}
          material={nodes.pod022_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001.geometry}
          material={nodes.pod023_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001.geometry}
          material={nodes.pod024_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001.geometry}
          material={nodes.pod025_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001.geometry}
          material={nodes.pod026_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001.geometry}
          material={nodes.pod027_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001.geometry}
          material={nodes.pod028_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001.geometry}
          material={nodes.pod029_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001.geometry}
          material={nodes.pod030_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001.geometry}
          material={nodes.pod031_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001.geometry}
          material={nodes.pod032_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001.geometry}
          material={nodes.pod033_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001.geometry}
          material={nodes.pod034_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001.geometry}
          material={nodes.pod035_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001.geometry}
          material={nodes.pod036_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001.geometry}
          material={nodes.pod037_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001.geometry}
          material={nodes.pod038_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001.geometry}
          material={nodes.pod039_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001.geometry}
          material={nodes.pod040_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001.geometry}
          material={nodes.pod041_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001.geometry}
          material={nodes.pod042_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001.geometry}
          material={nodes.pod043_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001.geometry}
          material={nodes.pod044_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001.geometry}
          material={nodes.pod045_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001.geometry}
          material={nodes.pod046_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001.geometry}
          material={nodes.pod047_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001.geometry}
          material={nodes.pod_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_1_high001.geometry}
          material={nodes.wire_1_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001.geometry}
          material={nodes.wire_2_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001.geometry}
          material={nodes.wire_3_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001.geometry}
          material={nodes.wire_4_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001.geometry}
          material={nodes.wire_5_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001.geometry}
          material={nodes.wire_6_high001.material}
          position={[0.000122, 0, -0.013459]}
        />
      </group>
      <group position={[1.332761, 6.240774, 0.174763]}>
        <mesh
          geometry={nodes.big_wire001_high001_3.geometry}
          material={nodes.big_wire001_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_3.geometry}
          material={nodes.big_wire002_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_3.geometry}
          material={nodes.big_wire003_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_3.geometry}
          material={nodes.big_wire005_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_3.geometry}
          material={nodes.big_wire006_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_3.geometry}
          material={nodes.big_wire007_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_3.geometry}
          material={nodes.big_wire_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_3.geometry}
          material={nodes.Cube001_3.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_3.geometry}
          material={nodes.Cube002_3.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_3.geometry}
          material={nodes.Cube003_3.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_3.geometry}
          material={nodes.Cube004_3.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_3.geometry}
          material={nodes.Cube005_3.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_3.geometry}
          material={nodes.Cube006_3.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_3.geometry}
          material={nodes.Cube007_3.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_3.geometry}
          material={nodes.Cube008_3.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_3.geometry}
          material={nodes.Cube009_3.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.floor_1_high001_3.geometry}
          material={nodes.floor_1_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_2_high001_3.geometry}
          material={nodes.floor_2_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_3.geometry}
          material={nodes.floor_4_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_3.geometry}
          material={nodes.floor_5_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_3.geometry}
          material={nodes.floor_6_high001_3.material}
          position={[0.000122, 0.023033, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_3.geometry}
          material={nodes.floor_metalpiece_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_3.geometry}
          material={nodes.fog_1002_3.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.fog_2001_3.geometry}
          material={nodes.fog_2001_3.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_3.geometry} material={nodes.glass_1_high_3.material} />
        <mesh geometry={nodes.glass_2_high_3.geometry} material={nodes.glass_2_high_3.material} />
        <mesh geometry={nodes.glass_3_high_3.geometry} material={nodes.glass_3_high_3.material} />
        <mesh geometry={nodes.led_1_high_3.geometry} material={nodes.led_1_high_3.material} />
        <mesh geometry={nodes.led_2_high_3.geometry} material={nodes.led_2_high_3.material} />
        <mesh geometry={nodes.led_4_high_3.geometry} material={nodes.led_4_high_3.material} />
        <mesh
          geometry={nodes.misc_1_high001_3.geometry}
          material={nodes.misc_1_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_3.geometry}
          material={nodes.misc_2_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod001_high001_3.geometry}
          material={nodes.pod001_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_3.geometry}
          material={nodes.pod002_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_3.geometry}
          material={nodes.pod003_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_3.geometry}
          material={nodes.pod004_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_3.geometry}
          material={nodes.pod005_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_3.geometry}
          material={nodes.pod006_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_3.geometry}
          material={nodes.pod007_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_3.geometry}
          material={nodes.pod008_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_3.geometry}
          material={nodes.pod009_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_3.geometry}
          material={nodes.pod010_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_3.geometry}
          material={nodes.pod011_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_3.geometry}
          material={nodes.pod012_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_3.geometry}
          material={nodes.pod013_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_3.geometry}
          material={nodes.pod014_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_3.geometry}
          material={nodes.pod015_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_3.geometry}
          material={nodes.pod016_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_3.geometry}
          material={nodes.pod017_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_3.geometry}
          material={nodes.pod018_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_3.geometry}
          material={nodes.pod019_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_3.geometry}
          material={nodes.pod020_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_3.geometry}
          material={nodes.pod021_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_3.geometry}
          material={nodes.pod022_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_3.geometry}
          material={nodes.pod023_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_3.geometry}
          material={nodes.pod024_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_3.geometry}
          material={nodes.pod025_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_3.geometry}
          material={nodes.pod026_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_3.geometry}
          material={nodes.pod027_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_3.geometry}
          material={nodes.pod028_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_3.geometry}
          material={nodes.pod029_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_3.geometry}
          material={nodes.pod030_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_3.geometry}
          material={nodes.pod031_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_3.geometry}
          material={nodes.pod032_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_3.geometry}
          material={nodes.pod033_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_3.geometry}
          material={nodes.pod034_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_3.geometry}
          material={nodes.pod035_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_3.geometry}
          material={nodes.pod036_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_3.geometry}
          material={nodes.pod037_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_3.geometry}
          material={nodes.pod038_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_3.geometry}
          material={nodes.pod039_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_3.geometry}
          material={nodes.pod040_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_3.geometry}
          material={nodes.pod041_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_3.geometry}
          material={nodes.pod042_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_3.geometry}
          material={nodes.pod043_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_3.geometry}
          material={nodes.pod044_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_3.geometry}
          material={nodes.pod045_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_3.geometry}
          material={nodes.pod046_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_3.geometry}
          material={nodes.pod047_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_3.geometry}
          material={nodes.pod_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Sphere001_3.geometry}
          material={nodes.Sphere001_3.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_3.geometry}
          material={nodes.Sphere002_3.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_3.geometry}
          material={nodes.Sphere003_3.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_3.geometry}
          material={nodes.Sphere004_3.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_3.geometry}
          material={nodes.wire_1_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_3.geometry}
          material={nodes.wire_2_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_3.geometry}
          material={nodes.wire_3_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_3.geometry}
          material={nodes.wire_4_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_3.geometry}
          material={nodes.wire_5_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_3.geometry}
          material={nodes.wire_6_high001_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cylinder001_3.geometry}
          material={nodes.Cylinder001_3.material}
          position={[0.002212, 0.115416, -0.115012]}
          rotation={[-1.462025, 0.153089, -0.042648]}
          scale={[0.084366, 0.047614, 0.085482]}
        />
        <mesh
          geometry={nodes.Cylinder002_3.geometry}
          material={nodes.Cylinder002_3.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_3.geometry}
          material={nodes.Cylinder003_3.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_3.geometry}
          material={nodes.Cylinder004_3.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.defaultMaterial001_3.geometry}
          material={nodes.defaultMaterial001_3.material}
          position={[-0.006779, 0.159544, 0.247359]}
          rotation={[-1.668043, -0.268541, -0.017551]}
          scale={0.592855}
        />
        <mesh
          geometry={nodes.lftdwn_3.geometry}
          material={nodes.lftdwn_3.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000005, -1.39627]}
          scale={[1.000003, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_3.geometry}
          material={nodes.lftup_3.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Mesh_3001_3.geometry}
          material={nodes.Mesh_3001_3.material}
          position={[0.00748, 0.124292, 0.132539]}
          rotation={[2.940696, 0.011766, -0.157033]}
          scale={[0.012504, 0.012504, 0.009253]}
        />
        <mesh
          geometry={nodes.Normal001_3.geometry}
          material={nodes.Normal001_3.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_3.geometry}
          material={nodes.Normal002_3.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.rgtdwn_3.geometry}
          material={nodes.rgtdwn_3.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_3.geometry}
          material={nodes.rgtup_3.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Skin2001_3.geometry}
          material={nodes.Skin2001_3.material}
          position={[0.007175, 0.135102, -0.283643]}
          rotation={[3.048996, 0.016922, -0.048459]}
          scale={[1.583777, 1.583777, 1.583777]}
        />
        <mesh
          geometry={nodes.Sphere005_3.geometry}
          material={nodes.Sphere005_3.material}
          position={[-0.053936, 0.211969, -0.381501]}
          rotation={[0.765665, -0.313231, 2.216415]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.Sphere006_3.geometry}
          material={nodes.Sphere006_3.material}
          position={[0.060085, 0.214964, -0.3818]}
          rotation={[0.675591, -0.440335, 1.907348]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
      </group>
      <group position={[-25.748297, 6.240774, 0.174763]}>
        <mesh
          geometry={nodes.floor_2_high001_18.geometry}
          material={nodes.floor_2_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_18.geometry}
          material={nodes.floor_4_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_18.geometry}
          material={nodes.floor_5_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_2001_18.geometry}
          material={nodes.fog_2001_18.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.big_wire001_high001_18.geometry}
          material={nodes.big_wire001_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_18.geometry}
          material={nodes.big_wire002_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_18.geometry}
          material={nodes.big_wire003_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_18.geometry}
          material={nodes.big_wire005_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_18.geometry}
          material={nodes.big_wire006_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_18.geometry}
          material={nodes.big_wire007_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_18.geometry}
          material={nodes.big_wire_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_18.geometry}
          material={nodes.Cube001_18.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_18.geometry}
          material={nodes.Cube002_18.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_18.geometry}
          material={nodes.Cube003_18.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_18.geometry}
          material={nodes.Cube004_18.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_18.geometry}
          material={nodes.Cube005_18.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_18.geometry}
          material={nodes.Cube006_18.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_18.geometry}
          material={nodes.Cube007_18.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_18.geometry}
          material={nodes.Cube008_18.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_18.geometry}
          material={nodes.Cube009_18.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.Cylinder001_18.geometry}
          material={nodes.Cylinder001_18.material}
          position={[0.002212, 0.115416, -0.115012]}
          rotation={[-1.462025, 0.153089, -0.042648]}
          scale={[0.084366, 0.047614, 0.085482]}
        />
        <mesh
          geometry={nodes.Cylinder002_18.geometry}
          material={nodes.Cylinder002_18.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_18.geometry}
          material={nodes.Cylinder003_18.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_18.geometry}
          material={nodes.Cylinder004_18.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.defaultMaterial001_18.geometry}
          material={nodes.defaultMaterial001_18.material}
          position={[-0.006779, 0.159544, 0.247359]}
          rotation={[-1.668043, -0.268541, -0.017551]}
          scale={0.592855}
        />
        <mesh
          geometry={nodes.floor_1_high001_18.geometry}
          material={nodes.floor_1_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_18.geometry}
          material={nodes.floor_6_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_18.geometry}
          material={nodes.floor_metalpiece_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_18.geometry}
          material={nodes.fog_1002_18.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_18.geometry} material={nodes.glass_1_high_18.material} />
        <mesh geometry={nodes.glass_2_high_18.geometry} material={nodes.glass_2_high_18.material} />
        <mesh geometry={nodes.glass_3_high_18.geometry} material={nodes.glass_3_high_18.material} />
        <mesh geometry={nodes.led_1_high_18.geometry} material={nodes.led_1_high_18.material} />
        <mesh geometry={nodes.led_2_high_18.geometry} material={nodes.led_2_high_18.material} />
        <mesh geometry={nodes.led_4_high_18.geometry} material={nodes.led_4_high_18.material} />
        <mesh
          geometry={nodes.lftdwn_18.geometry}
          material={nodes.lftdwn_18.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000006, -1.396271]}
          scale={[1.000004, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_18.geometry}
          material={nodes.lftup_18.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Mesh_3001_18.geometry}
          material={nodes.Mesh_3001_18.material}
          position={[0.00748, 0.124292, 0.132539]}
          rotation={[2.940696, 0.011766, -0.157033]}
          scale={[0.012504, 0.012504, 0.009253]}
        />
        <mesh
          geometry={nodes.misc_1_high001_18.geometry}
          material={nodes.misc_1_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_18.geometry}
          material={nodes.misc_2_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Normal001_18.geometry}
          material={nodes.Normal001_18.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_18.geometry}
          material={nodes.Normal002_18.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.pod001_high001_18.geometry}
          material={nodes.pod001_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_18.geometry}
          material={nodes.pod002_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_18.geometry}
          material={nodes.pod003_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_18.geometry}
          material={nodes.pod004_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_18.geometry}
          material={nodes.pod005_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_18.geometry}
          material={nodes.pod006_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_18.geometry}
          material={nodes.pod007_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_18.geometry}
          material={nodes.pod008_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_18.geometry}
          material={nodes.pod009_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_18.geometry}
          material={nodes.pod010_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_18.geometry}
          material={nodes.pod011_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_18.geometry}
          material={nodes.pod012_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_18.geometry}
          material={nodes.pod013_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_18.geometry}
          material={nodes.pod014_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_18.geometry}
          material={nodes.pod015_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_18.geometry}
          material={nodes.pod016_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_18.geometry}
          material={nodes.pod017_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_18.geometry}
          material={nodes.pod018_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_18.geometry}
          material={nodes.pod019_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_18.geometry}
          material={nodes.pod020_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_18.geometry}
          material={nodes.pod021_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_18.geometry}
          material={nodes.pod022_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_18.geometry}
          material={nodes.pod023_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_18.geometry}
          material={nodes.pod024_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_18.geometry}
          material={nodes.pod025_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_18.geometry}
          material={nodes.pod026_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_18.geometry}
          material={nodes.pod027_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_18.geometry}
          material={nodes.pod028_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_18.geometry}
          material={nodes.pod029_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_18.geometry}
          material={nodes.pod030_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_18.geometry}
          material={nodes.pod031_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_18.geometry}
          material={nodes.pod032_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_18.geometry}
          material={nodes.pod033_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_18.geometry}
          material={nodes.pod034_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_18.geometry}
          material={nodes.pod035_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_18.geometry}
          material={nodes.pod036_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_18.geometry}
          material={nodes.pod037_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_18.geometry}
          material={nodes.pod038_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_18.geometry}
          material={nodes.pod039_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_18.geometry}
          material={nodes.pod040_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_18.geometry}
          material={nodes.pod041_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_18.geometry}
          material={nodes.pod042_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_18.geometry}
          material={nodes.pod043_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_18.geometry}
          material={nodes.pod044_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_18.geometry}
          material={nodes.pod045_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_18.geometry}
          material={nodes.pod046_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_18.geometry}
          material={nodes.pod047_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_18.geometry}
          material={nodes.pod_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.rgtdwn_18.geometry}
          material={nodes.rgtdwn_18.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0.000001, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_18.geometry}
          material={nodes.rgtup_18.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Skin2001_18.geometry}
          material={nodes.Skin2001_18.material}
          position={[0.007175, 0.135102, -0.283643]}
          rotation={[3.048996, 0.016922, -0.048459]}
          scale={[1.583777, 1.583777, 1.583777]}
        />
        <mesh
          geometry={nodes.Sphere001_18.geometry}
          material={nodes.Sphere001_18.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_18.geometry}
          material={nodes.Sphere002_18.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_18.geometry}
          material={nodes.Sphere003_18.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_18.geometry}
          material={nodes.Sphere004_18.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere005_18.geometry}
          material={nodes.Sphere005_18.material}
          position={[-0.053936, 0.211969, -0.381501]}
          rotation={[0.765665, -0.313231, 2.216415]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.Sphere006_18.geometry}
          material={nodes.Sphere006_18.material}
          position={[0.060085, 0.214964, -0.3818]}
          rotation={[0.675591, -0.440335, 1.907348]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.wire_1_high001_18.geometry}
          material={nodes.wire_1_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_18.geometry}
          material={nodes.wire_2_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_18.geometry}
          material={nodes.wire_3_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_18.geometry}
          material={nodes.wire_4_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_18.geometry}
          material={nodes.wire_5_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_18.geometry}
          material={nodes.wire_6_high001_18.material}
          position={[0.000122, 0, -0.013459]}
        />
      </group>
      <group position={[-4.10717, 6.240774, -26.618879]}>
        <mesh
          geometry={nodes.floor_2_high001_20.geometry}
          material={nodes.floor_2_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_20.geometry}
          material={nodes.floor_4_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_20.geometry}
          material={nodes.floor_5_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_2001_20.geometry}
          material={nodes.fog_2001_20.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.big_wire001_high001_20.geometry}
          material={nodes.big_wire001_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_20.geometry}
          material={nodes.big_wire002_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_20.geometry}
          material={nodes.big_wire003_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_20.geometry}
          material={nodes.big_wire005_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_20.geometry}
          material={nodes.big_wire006_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_20.geometry}
          material={nodes.big_wire007_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_20.geometry}
          material={nodes.big_wire_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_20.geometry}
          material={nodes.Cube001_20.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_20.geometry}
          material={nodes.Cube002_20.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_20.geometry}
          material={nodes.Cube003_20.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_20.geometry}
          material={nodes.Cube004_20.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_20.geometry}
          material={nodes.Cube005_20.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_20.geometry}
          material={nodes.Cube006_20.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_20.geometry}
          material={nodes.Cube007_20.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_20.geometry}
          material={nodes.Cube008_20.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_20.geometry}
          material={nodes.Cube009_20.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.Cylinder001_20.geometry}
          material={nodes.Cylinder001_20.material}
          position={[0.002212, 0.115416, -0.115012]}
          rotation={[-1.462025, 0.153089, -0.042648]}
          scale={[0.084366, 0.047614, 0.085482]}
        />
        <mesh
          geometry={nodes.Cylinder002_20.geometry}
          material={nodes.Cylinder002_20.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_20.geometry}
          material={nodes.Cylinder003_20.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_20.geometry}
          material={nodes.Cylinder004_20.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.defaultMaterial001_20.geometry}
          material={nodes.defaultMaterial001_20.material}
          position={[-0.006779, 0.159544, 0.247359]}
          rotation={[-1.668043, -0.268541, -0.017551]}
          scale={0.592855}
        />
        <mesh
          geometry={nodes.floor_1_high001_20.geometry}
          material={nodes.floor_1_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_20.geometry}
          material={nodes.floor_6_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_20.geometry}
          material={nodes.floor_metalpiece_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_20.geometry}
          material={nodes.fog_1002_20.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_20.geometry} material={nodes.glass_1_high_20.material} />
        <mesh geometry={nodes.glass_2_high_20.geometry} material={nodes.glass_2_high_20.material} />
        <mesh geometry={nodes.glass_3_high_20.geometry} material={nodes.glass_3_high_20.material} />
        <mesh geometry={nodes.led_1_high_20.geometry} material={nodes.led_1_high_20.material} />
        <mesh geometry={nodes.led_2_high_20.geometry} material={nodes.led_2_high_20.material} />
        <mesh geometry={nodes.led_4_high_20.geometry} material={nodes.led_4_high_20.material} />
        <mesh
          geometry={nodes.lftdwn_20.geometry}
          material={nodes.lftdwn_20.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000006, -1.396271]}
          scale={[1.000004, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_20.geometry}
          material={nodes.lftup_20.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Mesh_3001_20.geometry}
          material={nodes.Mesh_3001_20.material}
          position={[0.00748, 0.124292, 0.132539]}
          rotation={[2.940696, 0.011766, -0.157033]}
          scale={[0.012504, 0.012504, 0.009253]}
        />
        <mesh
          geometry={nodes.misc_1_high001_20.geometry}
          material={nodes.misc_1_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_20.geometry}
          material={nodes.misc_2_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Normal001_20.geometry}
          material={nodes.Normal001_20.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_20.geometry}
          material={nodes.Normal002_20.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.pod001_high001_20.geometry}
          material={nodes.pod001_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_20.geometry}
          material={nodes.pod002_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_20.geometry}
          material={nodes.pod003_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_20.geometry}
          material={nodes.pod004_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_20.geometry}
          material={nodes.pod005_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_20.geometry}
          material={nodes.pod006_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_20.geometry}
          material={nodes.pod007_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_20.geometry}
          material={nodes.pod008_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_20.geometry}
          material={nodes.pod009_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_20.geometry}
          material={nodes.pod010_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_20.geometry}
          material={nodes.pod011_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_20.geometry}
          material={nodes.pod012_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_20.geometry}
          material={nodes.pod013_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_20.geometry}
          material={nodes.pod014_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_20.geometry}
          material={nodes.pod015_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_20.geometry}
          material={nodes.pod016_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_20.geometry}
          material={nodes.pod017_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_20.geometry}
          material={nodes.pod018_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_20.geometry}
          material={nodes.pod019_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_20.geometry}
          material={nodes.pod020_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_20.geometry}
          material={nodes.pod021_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_20.geometry}
          material={nodes.pod022_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_20.geometry}
          material={nodes.pod023_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_20.geometry}
          material={nodes.pod024_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_20.geometry}
          material={nodes.pod025_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_20.geometry}
          material={nodes.pod026_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_20.geometry}
          material={nodes.pod027_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_20.geometry}
          material={nodes.pod028_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_20.geometry}
          material={nodes.pod029_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_20.geometry}
          material={nodes.pod030_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_20.geometry}
          material={nodes.pod031_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_20.geometry}
          material={nodes.pod032_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_20.geometry}
          material={nodes.pod033_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_20.geometry}
          material={nodes.pod034_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_20.geometry}
          material={nodes.pod035_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_20.geometry}
          material={nodes.pod036_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_20.geometry}
          material={nodes.pod037_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_20.geometry}
          material={nodes.pod038_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_20.geometry}
          material={nodes.pod039_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_20.geometry}
          material={nodes.pod040_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_20.geometry}
          material={nodes.pod041_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_20.geometry}
          material={nodes.pod042_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_20.geometry}
          material={nodes.pod043_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_20.geometry}
          material={nodes.pod044_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_20.geometry}
          material={nodes.pod045_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_20.geometry}
          material={nodes.pod046_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_20.geometry}
          material={nodes.pod047_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_20.geometry}
          material={nodes.pod_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.rgtdwn_20.geometry}
          material={nodes.rgtdwn_20.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0.000001, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_20.geometry}
          material={nodes.rgtup_20.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Sphere001_20.geometry}
          material={nodes.Sphere001_20.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_20.geometry}
          material={nodes.Sphere002_20.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_20.geometry}
          material={nodes.Sphere003_20.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_20.geometry}
          material={nodes.Sphere004_20.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere005_20.geometry}
          material={nodes.Sphere005_20.material}
          position={[-0.053936, 0.211969, -0.381501]}
          rotation={[0.765665, -0.313231, 2.216415]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.Sphere006_20.geometry}
          material={nodes.Sphere006_20.material}
          position={[0.060085, 0.214964, -0.3818]}
          rotation={[0.675591, -0.440335, 1.907348]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.wire_1_high001_20.geometry}
          material={nodes.wire_1_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_20.geometry}
          material={nodes.wire_2_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_20.geometry}
          material={nodes.wire_3_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_20.geometry}
          material={nodes.wire_4_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_20.geometry}
          material={nodes.wire_5_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_20.geometry}
          material={nodes.wire_6_high001_20.material}
          position={[0.000122, 0, -0.013459]}
        />
      </group>
      <group position={[-20.316006, 6.240774, 0.174763]}>
        <mesh
          geometry={nodes.floor_2_high001_3_1.geometry}
          material={nodes.floor_2_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_3_1.geometry}
          material={nodes.floor_4_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_3_1.geometry}
          material={nodes.floor_5_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_2001_3_1.geometry}
          material={nodes.fog_2001_3_1.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.big_wire001_high001_3_1.geometry}
          material={nodes.big_wire001_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_3_1.geometry}
          material={nodes.big_wire002_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_3_1.geometry}
          material={nodes.big_wire003_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_3_1.geometry}
          material={nodes.big_wire005_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_3_1.geometry}
          material={nodes.big_wire006_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_3_1.geometry}
          material={nodes.big_wire007_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_3_1.geometry}
          material={nodes.big_wire_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_3_1.geometry}
          material={nodes.Cube001_3_1.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_3_1.geometry}
          material={nodes.Cube002_3_1.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_3_1.geometry}
          material={nodes.Cube003_3_1.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_3_1.geometry}
          material={nodes.Cube004_3_1.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_3_1.geometry}
          material={nodes.Cube005_3_1.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_3_1.geometry}
          material={nodes.Cube006_3_1.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_3_1.geometry}
          material={nodes.Cube007_3_1.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_3_1.geometry}
          material={nodes.Cube008_3_1.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_3_1.geometry}
          material={nodes.Cube009_3_1.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.Cylinder001_3_1.geometry}
          material={nodes.Cylinder001_3_1.material}
          position={[0.002212, 0.115416, -0.115012]}
          rotation={[-1.462025, 0.153089, -0.042648]}
          scale={[0.084366, 0.047614, 0.085482]}
        />
        <mesh
          geometry={nodes.Cylinder002_3_1.geometry}
          material={nodes.Cylinder002_3_1.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_3_1.geometry}
          material={nodes.Cylinder003_3_1.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_3_1.geometry}
          material={nodes.Cylinder004_3_1.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.defaultMaterial001_3_1.geometry}
          material={nodes.defaultMaterial001_3_1.material}
          position={[-0.006779, 0.159544, 0.247359]}
          rotation={[-1.668043, -0.268541, -0.017551]}
          scale={0.592855}
        />
        <mesh
          geometry={nodes.floor_1_high001_3_1.geometry}
          material={nodes.floor_1_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_3_1.geometry}
          material={nodes.floor_6_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_3_1.geometry}
          material={nodes.floor_metalpiece_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_3_1.geometry}
          material={nodes.fog_1002_3_1.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_3_1.geometry} material={nodes.glass_1_high_3_1.material} />
        <mesh geometry={nodes.glass_2_high_3_1.geometry} material={nodes.glass_2_high_3_1.material} />
        <mesh geometry={nodes.glass_3_high_3_1.geometry} material={nodes.glass_3_high_3_1.material} />
        <mesh geometry={nodes.led_1_high_3_1.geometry} material={nodes.led_1_high_3_1.material} />
        <mesh geometry={nodes.led_2_high_3_1.geometry} material={nodes.led_2_high_3_1.material} />
        <mesh geometry={nodes.led_4_high_3_1.geometry} material={nodes.led_4_high_3_1.material} />
        <mesh
          geometry={nodes.lftdwn_3_1.geometry}
          material={nodes.lftdwn_3_1.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000006, -1.396271]}
          scale={[1.000004, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_3_1.geometry}
          material={nodes.lftup_3_1.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Mesh_3001_3_1.geometry}
          material={nodes.Mesh_3001_3_1.material}
          position={[0.00748, 0.124292, 0.132539]}
          rotation={[2.940696, 0.011766, -0.157033]}
          scale={[0.012504, 0.012504, 0.009253]}
        />
        <mesh
          geometry={nodes.misc_1_high001_3_1.geometry}
          material={nodes.misc_1_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_3_1.geometry}
          material={nodes.misc_2_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Normal001_3_1.geometry}
          material={nodes.Normal001_3_1.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_3_1.geometry}
          material={nodes.Normal002_3_1.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.pod001_high001_3_1.geometry}
          material={nodes.pod001_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_3_1.geometry}
          material={nodes.pod002_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_3_1.geometry}
          material={nodes.pod003_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_3_1.geometry}
          material={nodes.pod004_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_3_1.geometry}
          material={nodes.pod005_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_3_1.geometry}
          material={nodes.pod006_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_3_1.geometry}
          material={nodes.pod007_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_3_1.geometry}
          material={nodes.pod008_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_3_1.geometry}
          material={nodes.pod009_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_3_1.geometry}
          material={nodes.pod010_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_3_1.geometry}
          material={nodes.pod011_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_3_1.geometry}
          material={nodes.pod012_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_3_1.geometry}
          material={nodes.pod013_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_3_1.geometry}
          material={nodes.pod014_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_3_1.geometry}
          material={nodes.pod015_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_3_1.geometry}
          material={nodes.pod016_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_3_1.geometry}
          material={nodes.pod017_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_3_1.geometry}
          material={nodes.pod018_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_3_1.geometry}
          material={nodes.pod019_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_3_1.geometry}
          material={nodes.pod020_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_3_1.geometry}
          material={nodes.pod021_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_3_1.geometry}
          material={nodes.pod022_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_3_1.geometry}
          material={nodes.pod023_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_3_1.geometry}
          material={nodes.pod024_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_3_1.geometry}
          material={nodes.pod025_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_3_1.geometry}
          material={nodes.pod026_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_3_1.geometry}
          material={nodes.pod027_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_3_1.geometry}
          material={nodes.pod028_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_3_1.geometry}
          material={nodes.pod029_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_3_1.geometry}
          material={nodes.pod030_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_3_1.geometry}
          material={nodes.pod031_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_3_1.geometry}
          material={nodes.pod032_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_3_1.geometry}
          material={nodes.pod033_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_3_1.geometry}
          material={nodes.pod034_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_3_1.geometry}
          material={nodes.pod035_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_3_1.geometry}
          material={nodes.pod036_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_3_1.geometry}
          material={nodes.pod037_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_3_1.geometry}
          material={nodes.pod038_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_3_1.geometry}
          material={nodes.pod039_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_3_1.geometry}
          material={nodes.pod040_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_3_1.geometry}
          material={nodes.pod041_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_3_1.geometry}
          material={nodes.pod042_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_3_1.geometry}
          material={nodes.pod043_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_3_1.geometry}
          material={nodes.pod044_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_3_1.geometry}
          material={nodes.pod045_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_3_1.geometry}
          material={nodes.pod046_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_3_1.geometry}
          material={nodes.pod047_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_3_1.geometry}
          material={nodes.pod_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.rgtdwn_3_1.geometry}
          material={nodes.rgtdwn_3_1.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0.000001, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_3_1.geometry}
          material={nodes.rgtup_3_1.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Skin2001_3_1.geometry}
          material={nodes.Skin2001_3_1.material}
          position={[0.007175, 0.135102, -0.283643]}
          rotation={[3.048996, 0.016922, -0.048459]}
          scale={[1.583777, 1.583777, 1.583777]}
        />
        <mesh
          geometry={nodes.Sphere001_3_1.geometry}
          material={nodes.Sphere001_3_1.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_3_1.geometry}
          material={nodes.Sphere002_3_1.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_3_1.geometry}
          material={nodes.Sphere003_3_1.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_3_1.geometry}
          material={nodes.Sphere004_3_1.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere005_3_1.geometry}
          material={nodes.Sphere005_3_1.material}
          position={[-0.053936, 0.211969, -0.381501]}
          rotation={[0.765665, -0.313231, 2.216415]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.Sphere006_3_1.geometry}
          material={nodes.Sphere006_3_1.material}
          position={[0.060085, 0.214964, -0.3818]}
          rotation={[0.675591, -0.440335, 1.907348]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.wire_1_high001_3_1.geometry}
          material={nodes.wire_1_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_3_1.geometry}
          material={nodes.wire_2_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_3_1.geometry}
          material={nodes.wire_3_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_3_1.geometry}
          material={nodes.wire_4_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_3_1.geometry}
          material={nodes.wire_5_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_3_1.geometry}
          material={nodes.wire_6_high001_3_1.material}
          position={[0.000122, 0, -0.013459]}
        />
      </group>
      <group position={[1.332761, 6.240774, -8.66021]}>
        <mesh
          geometry={nodes.big_wire001_high001_4.geometry}
          material={nodes.big_wire001_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_4.geometry}
          material={nodes.big_wire002_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_4.geometry}
          material={nodes.big_wire003_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_4.geometry}
          material={nodes.big_wire005_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_4.geometry}
          material={nodes.big_wire006_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_4.geometry}
          material={nodes.big_wire007_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_4.geometry}
          material={nodes.big_wire_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_4.geometry}
          material={nodes.Cube001_4.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_4.geometry}
          material={nodes.Cube002_4.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_4.geometry}
          material={nodes.Cube003_4.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_4.geometry}
          material={nodes.Cube004_4.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_4.geometry}
          material={nodes.Cube005_4.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_4.geometry}
          material={nodes.Cube006_4.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_4.geometry}
          material={nodes.Cube007_4.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_4.geometry}
          material={nodes.Cube008_4.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_4.geometry}
          material={nodes.Cube009_4.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.floor_1_high001_4.geometry}
          material={nodes.floor_1_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_2_high001_4.geometry}
          material={nodes.floor_2_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_4.geometry}
          material={nodes.floor_4_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_4.geometry}
          material={nodes.floor_5_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_4.geometry}
          material={nodes.floor_6_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_4.geometry}
          material={nodes.floor_metalpiece_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_4.geometry}
          material={nodes.fog_1002_4.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.fog_2001_4.geometry}
          material={nodes.fog_2001_4.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_4.geometry} material={nodes.glass_1_high_4.material} />
        <mesh geometry={nodes.glass_2_high_4.geometry} material={nodes.glass_2_high_4.material} />
        <mesh
          geometry={nodes.glass_3_high_4.geometry}
          material={nodes.glass_3_high_4.material}
          position={[-0.00385, 0, 0]}
        />
        <mesh geometry={nodes.led_1_high_4.geometry} material={nodes.led_1_high_4.material} />
        <mesh geometry={nodes.led_2_high_4.geometry} material={nodes.led_2_high_4.material} />
        <mesh geometry={nodes.led_4_high_4.geometry} material={nodes.led_4_high_4.material} />
        <mesh
          geometry={nodes.misc_1_high001_4.geometry}
          material={nodes.misc_1_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_4.geometry}
          material={nodes.misc_2_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod001_high001_4.geometry}
          material={nodes.pod001_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_4.geometry}
          material={nodes.pod002_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_4.geometry}
          material={nodes.pod003_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_4.geometry}
          material={nodes.pod004_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_4.geometry}
          material={nodes.pod005_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_4.geometry}
          material={nodes.pod006_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_4.geometry}
          material={nodes.pod007_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_4.geometry}
          material={nodes.pod008_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_4.geometry}
          material={nodes.pod009_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_4.geometry}
          material={nodes.pod010_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_4.geometry}
          material={nodes.pod011_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_4.geometry}
          material={nodes.pod012_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_4.geometry}
          material={nodes.pod013_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_4.geometry}
          material={nodes.pod014_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_4.geometry}
          material={nodes.pod015_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_4.geometry}
          material={nodes.pod016_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_4.geometry}
          material={nodes.pod017_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_4.geometry}
          material={nodes.pod018_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_4.geometry}
          material={nodes.pod019_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_4.geometry}
          material={nodes.pod020_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_4.geometry}
          material={nodes.pod021_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_4.geometry}
          material={nodes.pod022_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_4.geometry}
          material={nodes.pod023_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_4.geometry}
          material={nodes.pod024_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_4.geometry}
          material={nodes.pod025_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_4.geometry}
          material={nodes.pod026_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_4.geometry}
          material={nodes.pod027_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_4.geometry}
          material={nodes.pod028_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_4.geometry}
          material={nodes.pod029_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_4.geometry}
          material={nodes.pod030_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_4.geometry}
          material={nodes.pod031_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_4.geometry}
          material={nodes.pod032_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_4.geometry}
          material={nodes.pod033_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_4.geometry}
          material={nodes.pod034_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_4.geometry}
          material={nodes.pod035_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_4.geometry}
          material={nodes.pod036_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_4.geometry}
          material={nodes.pod037_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_4.geometry}
          material={nodes.pod038_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_4.geometry}
          material={nodes.pod039_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_4.geometry}
          material={nodes.pod040_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_4.geometry}
          material={nodes.pod041_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_4.geometry}
          material={nodes.pod042_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_4.geometry}
          material={nodes.pod043_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_4.geometry}
          material={nodes.pod044_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_4.geometry}
          material={nodes.pod045_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_4.geometry}
          material={nodes.pod046_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_4.geometry}
          material={nodes.pod047_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_4.geometry}
          material={nodes.pod_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Sphere001_4.geometry}
          material={nodes.Sphere001_4.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_4.geometry}
          material={nodes.Sphere002_4.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_4.geometry}
          material={nodes.Sphere003_4.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_4.geometry}
          material={nodes.Sphere004_4.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_4.geometry}
          material={nodes.wire_1_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_4.geometry}
          material={nodes.wire_2_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_4.geometry}
          material={nodes.wire_3_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_4.geometry}
          material={nodes.wire_4_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_4.geometry}
          material={nodes.wire_5_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_4.geometry}
          material={nodes.wire_6_high001_4.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cylinder002_4.geometry}
          material={nodes.Cylinder002_4.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_4.geometry}
          material={nodes.Cylinder003_4.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_4.geometry}
          material={nodes.Cylinder004_4.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.lftdwn_4.geometry}
          material={nodes.lftdwn_4.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000005, -1.39627]}
          scale={[1.000003, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_4.geometry}
          material={nodes.lftup_4.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Normal001_4.geometry}
          material={nodes.Normal001_4.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_4.geometry}
          material={nodes.Normal002_4.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.rgtdwn_4.geometry}
          material={nodes.rgtdwn_4.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_4.geometry}
          material={nodes.rgtup_4.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
      </group>
      <group position={[-20.343374, 6.240774, -8.66021]}>
        <mesh
          geometry={nodes.floor_2_high001_4_1.geometry}
          material={nodes.floor_2_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_4_1.geometry}
          material={nodes.floor_4_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_4_1.geometry}
          material={nodes.floor_5_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_2001_4_1.geometry}
          material={nodes.fog_2001_4_1.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.big_wire001_high001_4_1.geometry}
          material={nodes.big_wire001_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_4_1.geometry}
          material={nodes.big_wire002_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_4_1.geometry}
          material={nodes.big_wire003_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_4_1.geometry}
          material={nodes.big_wire005_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_4_1.geometry}
          material={nodes.big_wire006_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_4_1.geometry}
          material={nodes.big_wire007_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_4_1.geometry}
          material={nodes.big_wire_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_4_1.geometry}
          material={nodes.Cube001_4_1.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_4_1.geometry}
          material={nodes.Cube002_4_1.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_4_1.geometry}
          material={nodes.Cube003_4_1.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_4_1.geometry}
          material={nodes.Cube004_4_1.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_4_1.geometry}
          material={nodes.Cube005_4_1.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_4_1.geometry}
          material={nodes.Cube006_4_1.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_4_1.geometry}
          material={nodes.Cube007_4_1.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_4_1.geometry}
          material={nodes.Cube008_4_1.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_4_1.geometry}
          material={nodes.Cube009_4_1.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.Cylinder001_4_1.geometry}
          material={nodes.Cylinder001_4_1.material}
          position={[0.002212, 0.115416, -0.115012]}
          rotation={[-1.462025, 0.153089, -0.042648]}
          scale={[0.084366, 0.047614, 0.085482]}
        />
        <mesh
          geometry={nodes.Cylinder002_4_1.geometry}
          material={nodes.Cylinder002_4_1.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_4_1.geometry}
          material={nodes.Cylinder003_4_1.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_4_1.geometry}
          material={nodes.Cylinder004_4_1.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.defaultMaterial001_4_1.geometry}
          material={nodes.defaultMaterial001_4_1.material}
          position={[-0.006779, 0.159544, 0.247359]}
          rotation={[-1.668043, -0.268541, -0.017551]}
          scale={0.592855}
        />
        <mesh
          geometry={nodes.floor_1_high001_4_1.geometry}
          material={nodes.floor_1_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_4_1.geometry}
          material={nodes.floor_6_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_4_1.geometry}
          material={nodes.floor_metalpiece_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_4_1.geometry}
          material={nodes.fog_1002_4_1.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_4_1.geometry} material={nodes.glass_1_high_4_1.material} />
        <mesh geometry={nodes.glass_2_high_4_1.geometry} material={nodes.glass_2_high_4_1.material} />
        <mesh geometry={nodes.glass_3_high_4_1.geometry} material={nodes.glass_3_high_4_1.material} />
        <mesh geometry={nodes.led_1_high_4_1.geometry} material={nodes.led_1_high_4_1.material} />
        <mesh geometry={nodes.led_2_high_4_1.geometry} material={nodes.led_2_high_4_1.material} />
        <mesh geometry={nodes.led_4_high_4_1.geometry} material={nodes.led_4_high_4_1.material} />
        <mesh
          geometry={nodes.lftdwn_4_1.geometry}
          material={nodes.lftdwn_4_1.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000006, -1.396271]}
          scale={[1.000004, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_4_1.geometry}
          material={nodes.lftup_4_1.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Mesh_3001_4_1.geometry}
          material={nodes.Mesh_3001_4_1.material}
          position={[0.00748, 0.124292, 0.132539]}
          rotation={[2.940696, 0.011766, -0.157033]}
          scale={[0.012504, 0.012504, 0.009253]}
        />
        <mesh
          geometry={nodes.misc_1_high001_4_1.geometry}
          material={nodes.misc_1_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_4_1.geometry}
          material={nodes.misc_2_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Normal001_4_1.geometry}
          material={nodes.Normal001_4_1.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_4_1.geometry}
          material={nodes.Normal002_4_1.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.pod001_high001_4_1.geometry}
          material={nodes.pod001_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_4_1.geometry}
          material={nodes.pod002_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_4_1.geometry}
          material={nodes.pod003_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_4_1.geometry}
          material={nodes.pod004_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_4_1.geometry}
          material={nodes.pod005_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_4_1.geometry}
          material={nodes.pod006_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_4_1.geometry}
          material={nodes.pod007_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_4_1.geometry}
          material={nodes.pod008_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_4_1.geometry}
          material={nodes.pod009_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_4_1.geometry}
          material={nodes.pod010_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_4_1.geometry}
          material={nodes.pod011_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_4_1.geometry}
          material={nodes.pod012_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_4_1.geometry}
          material={nodes.pod013_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_4_1.geometry}
          material={nodes.pod014_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_4_1.geometry}
          material={nodes.pod015_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_4_1.geometry}
          material={nodes.pod016_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_4_1.geometry}
          material={nodes.pod017_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_4_1.geometry}
          material={nodes.pod018_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_4_1.geometry}
          material={nodes.pod019_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_4_1.geometry}
          material={nodes.pod020_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_4_1.geometry}
          material={nodes.pod021_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_4_1.geometry}
          material={nodes.pod022_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_4_1.geometry}
          material={nodes.pod023_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_4_1.geometry}
          material={nodes.pod024_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_4_1.geometry}
          material={nodes.pod025_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_4_1.geometry}
          material={nodes.pod026_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_4_1.geometry}
          material={nodes.pod027_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_4_1.geometry}
          material={nodes.pod028_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_4_1.geometry}
          material={nodes.pod029_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_4_1.geometry}
          material={nodes.pod030_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_4_1.geometry}
          material={nodes.pod031_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_4_1.geometry}
          material={nodes.pod032_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_4_1.geometry}
          material={nodes.pod033_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_4_1.geometry}
          material={nodes.pod034_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_4_1.geometry}
          material={nodes.pod035_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_4_1.geometry}
          material={nodes.pod036_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_4_1.geometry}
          material={nodes.pod037_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_4_1.geometry}
          material={nodes.pod038_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_4_1.geometry}
          material={nodes.pod039_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_4_1.geometry}
          material={nodes.pod040_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_4_1.geometry}
          material={nodes.pod041_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_4_1.geometry}
          material={nodes.pod042_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_4_1.geometry}
          material={nodes.pod043_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_4_1.geometry}
          material={nodes.pod044_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_4_1.geometry}
          material={nodes.pod045_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_4_1.geometry}
          material={nodes.pod046_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_4_1.geometry}
          material={nodes.pod047_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_4_1.geometry}
          material={nodes.pod_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.rgtdwn_4_1.geometry}
          material={nodes.rgtdwn_4_1.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0.000001, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_4_1.geometry}
          material={nodes.rgtup_4_1.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Skin2001_4_1.geometry}
          material={nodes.Skin2001_4_1.material}
          position={[0.007175, 0.135102, -0.283643]}
          rotation={[3.048996, 0.016922, -0.048459]}
          scale={[1.583777, 1.583777, 1.583777]}
        />
        <mesh
          geometry={nodes.Sphere001_4_1.geometry}
          material={nodes.Sphere001_4_1.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_4_1.geometry}
          material={nodes.Sphere002_4_1.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_4_1.geometry}
          material={nodes.Sphere003_4_1.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_4_1.geometry}
          material={nodes.Sphere004_4_1.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere005_4_1.geometry}
          material={nodes.Sphere005_4_1.material}
          position={[-0.053936, 0.211969, -0.381501]}
          rotation={[0.765665, -0.313231, 2.216415]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.Sphere006_4_1.geometry}
          material={nodes.Sphere006_4_1.material}
          position={[0.060085, 0.214964, -0.3818]}
          rotation={[0.675591, -0.440335, 1.907348]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.wire_1_high001_4_1.geometry}
          material={nodes.wire_1_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_4_1.geometry}
          material={nodes.wire_2_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_4_1.geometry}
          material={nodes.wire_3_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_4_1.geometry}
          material={nodes.wire_4_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_4_1.geometry}
          material={nodes.wire_5_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_4_1.geometry}
          material={nodes.wire_6_high001_4_1.material}
          position={[0.000122, 0, -0.013459]}
        />
      </group>
      <group position={[-9.469853, 6.240774, 0.174763]}>
        <mesh
          geometry={nodes.big_wire001_high001_7.geometry}
          material={nodes.big_wire001_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_7.geometry}
          material={nodes.big_wire002_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_7.geometry}
          material={nodes.big_wire003_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_7.geometry}
          material={nodes.big_wire005_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_7.geometry}
          material={nodes.big_wire006_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_7.geometry}
          material={nodes.big_wire007_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_7.geometry}
          material={nodes.big_wire_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_7.geometry}
          material={nodes.Cube001_7.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_7.geometry}
          material={nodes.Cube002_7.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_7.geometry}
          material={nodes.Cube003_7.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_7.geometry}
          material={nodes.Cube004_7.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_7.geometry}
          material={nodes.Cube005_7.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_7.geometry}
          material={nodes.Cube006_7.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_7.geometry}
          material={nodes.Cube007_7.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_7.geometry}
          material={nodes.Cube008_7.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_7.geometry}
          material={nodes.Cube009_7.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.floor_1_high001_7.geometry}
          material={nodes.floor_1_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_2_high001_7.geometry}
          material={nodes.floor_2_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_7.geometry}
          material={nodes.floor_4_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_7.geometry}
          material={nodes.floor_5_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_7.geometry}
          material={nodes.floor_6_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_7.geometry}
          material={nodes.floor_metalpiece_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_7.geometry}
          material={nodes.fog_1002_7.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.fog_2001_7.geometry}
          material={nodes.fog_2001_7.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_7.geometry} material={nodes.glass_1_high_7.material} />
        <mesh geometry={nodes.glass_2_high_7.geometry} material={nodes.glass_2_high_7.material} />
        <mesh geometry={nodes.glass_3_high_7.geometry} material={nodes.glass_3_high_7.material} />
        <mesh geometry={nodes.led_1_high_7.geometry} material={nodes.led_1_high_7.material} />
        <mesh geometry={nodes.led_2_high_7.geometry} material={nodes.led_2_high_7.material} />
        <mesh geometry={nodes.led_4_high_7.geometry} material={nodes.led_4_high_7.material} />
        <mesh
          geometry={nodes.misc_1_high001_7.geometry}
          material={nodes.misc_1_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_7.geometry}
          material={nodes.misc_2_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod001_high001_7.geometry}
          material={nodes.pod001_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_7.geometry}
          material={nodes.pod002_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_7.geometry}
          material={nodes.pod003_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_7.geometry}
          material={nodes.pod004_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_7.geometry}
          material={nodes.pod005_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_7.geometry}
          material={nodes.pod006_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_7.geometry}
          material={nodes.pod007_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_7.geometry}
          material={nodes.pod008_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_7.geometry}
          material={nodes.pod009_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_7.geometry}
          material={nodes.pod010_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_7.geometry}
          material={nodes.pod011_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_7.geometry}
          material={nodes.pod012_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_7.geometry}
          material={nodes.pod013_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_7.geometry}
          material={nodes.pod014_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_7.geometry}
          material={nodes.pod015_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_7.geometry}
          material={nodes.pod016_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_7.geometry}
          material={nodes.pod017_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_7.geometry}
          material={nodes.pod018_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_7.geometry}
          material={nodes.pod019_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_7.geometry}
          material={nodes.pod020_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_7.geometry}
          material={nodes.pod021_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_7.geometry}
          material={nodes.pod022_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_7.geometry}
          material={nodes.pod023_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_7.geometry}
          material={nodes.pod024_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_7.geometry}
          material={nodes.pod025_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_7.geometry}
          material={nodes.pod026_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_7.geometry}
          material={nodes.pod027_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_7.geometry}
          material={nodes.pod028_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_7.geometry}
          material={nodes.pod029_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_7.geometry}
          material={nodes.pod030_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_7.geometry}
          material={nodes.pod031_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_7.geometry}
          material={nodes.pod032_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_7.geometry}
          material={nodes.pod033_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_7.geometry}
          material={nodes.pod034_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_7.geometry}
          material={nodes.pod035_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_7.geometry}
          material={nodes.pod036_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_7.geometry}
          material={nodes.pod037_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_7.geometry}
          material={nodes.pod038_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_7.geometry}
          material={nodes.pod039_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_7.geometry}
          material={nodes.pod040_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_7.geometry}
          material={nodes.pod041_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_7.geometry}
          material={nodes.pod042_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_7.geometry}
          material={nodes.pod043_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_7.geometry}
          material={nodes.pod044_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_7.geometry}
          material={nodes.pod045_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_7.geometry}
          material={nodes.pod046_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_7.geometry}
          material={nodes.pod047_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_7.geometry}
          material={nodes.pod_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Sphere001_7.geometry}
          material={nodes.Sphere001_7.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_7.geometry}
          material={nodes.Sphere002_7.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_7.geometry}
          material={nodes.Sphere003_7.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_7.geometry}
          material={nodes.Sphere004_7.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_7.geometry}
          material={nodes.wire_1_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_7.geometry}
          material={nodes.wire_2_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_7.geometry}
          material={nodes.wire_3_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_7.geometry}
          material={nodes.wire_4_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_7.geometry}
          material={nodes.wire_5_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_7.geometry}
          material={nodes.wire_6_high001_7.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cylinder001_7.geometry}
          material={nodes.Cylinder001_7.material}
          position={[0.002212, 0.115416, -0.115012]}
          rotation={[-1.462025, 0.153089, -0.042648]}
          scale={[0.084366, 0.047614, 0.085482]}
        />
        <mesh
          geometry={nodes.Cylinder002_7.geometry}
          material={nodes.Cylinder002_7.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_7.geometry}
          material={nodes.Cylinder003_7.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_7.geometry}
          material={nodes.Cylinder004_7.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.defaultMaterial001_7.geometry}
          material={nodes.defaultMaterial001_7.material}
          position={[-0.006779, 0.159544, 0.247359]}
          rotation={[-1.668043, -0.268541, -0.017551]}
          scale={0.592855}
        />
        <mesh
          geometry={nodes.lftdwn_7.geometry}
          material={nodes.lftdwn_7.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000005, -1.39627]}
          scale={[1.000003, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_7.geometry}
          material={nodes.lftup_7.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Mesh_3001_7.geometry}
          material={nodes.Mesh_3001_7.material}
          position={[0.00748, 0.124292, 0.132539]}
          rotation={[2.940696, 0.011766, -0.157033]}
          scale={[0.012504, 0.012504, 0.009253]}
        />
        <mesh
          geometry={nodes.Normal001_7.geometry}
          material={nodes.Normal001_7.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_7.geometry}
          material={nodes.Normal002_7.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.rgtdwn_7.geometry}
          material={nodes.rgtdwn_7.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_7.geometry}
          material={nodes.rgtup_7.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Skin2001_7.geometry}
          material={nodes.Skin2001_7.material}
          position={[0.007175, 0.135102, -0.283643]}
          rotation={[3.048996, 0.016922, -0.048459]}
          scale={[1.583777, 1.583777, 1.583777]}
        />
        <mesh
          geometry={nodes.Sphere005_7.geometry}
          material={nodes.Sphere005_7.material}
          position={[-0.053936, 0.211969, -0.381501]}
          rotation={[0.765665, -0.313231, 2.216415]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.Sphere006_7.geometry}
          material={nodes.Sphere006_7.material}
          position={[0.060085, 0.214964, -0.3818]}
          rotation={[0.675591, -0.440335, 1.907348]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
      </group>
      <group position={[-9.470381, 6.240774, -26.668627]}>
        <mesh
          geometry={nodes.floor_2_high001_7_3.geometry}
          material={nodes.floor_2_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_7_3.geometry}
          material={nodes.floor_4_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_7_3.geometry}
          material={nodes.floor_5_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_2001_7_3.geometry}
          material={nodes.fog_2001_7_3.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.big_wire001_high001_7_3.geometry}
          material={nodes.big_wire001_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_7_3.geometry}
          material={nodes.big_wire002_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_7_3.geometry}
          material={nodes.big_wire003_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_7_3.geometry}
          material={nodes.big_wire005_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_7_3.geometry}
          material={nodes.big_wire006_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_7_3.geometry}
          material={nodes.big_wire007_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_7_3.geometry}
          material={nodes.big_wire_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_7_3.geometry}
          material={nodes.Cube001_7_3.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_7_3.geometry}
          material={nodes.Cube002_7_3.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_7_3.geometry}
          material={nodes.Cube003_7_3.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_7_3.geometry}
          material={nodes.Cube004_7_3.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_7_3.geometry}
          material={nodes.Cube005_7_3.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_7_3.geometry}
          material={nodes.Cube006_7_3.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_7_3.geometry}
          material={nodes.Cube007_7_3.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_7_3.geometry}
          material={nodes.Cube008_7_3.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_7_3.geometry}
          material={nodes.Cube009_7_3.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.Cylinder002_7_3.geometry}
          material={nodes.Cylinder002_7_3.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_7_3.geometry}
          material={nodes.Cylinder003_7_3.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_7_3.geometry}
          material={nodes.Cylinder004_7_3.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.floor_1_high001_7_3.geometry}
          material={nodes.floor_1_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_7_3.geometry}
          material={nodes.floor_6_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_7_3.geometry}
          material={nodes.floor_metalpiece_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_7_3.geometry}
          material={nodes.fog_1002_7_3.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_7_3.geometry} material={nodes.glass_1_high_7_3.material} />
        <mesh geometry={nodes.glass_2_high_7_3.geometry} material={nodes.glass_2_high_7_3.material} />
        <mesh
          geometry={nodes.glass_3_high_7_3.geometry}
          material={nodes.glass_3_high_7_3.material}
          position={[0.010961, 0, 0]}
        />
        <mesh geometry={nodes.led_1_high_7_3.geometry} material={nodes.led_1_high_7_3.material} />
        <mesh geometry={nodes.led_2_high_7_3.geometry} material={nodes.led_2_high_7_3.material} />
        <mesh geometry={nodes.led_4_high_7_3.geometry} material={nodes.led_4_high_7_3.material} />
        <mesh
          geometry={nodes.lftdwn_7_3.geometry}
          material={nodes.lftdwn_7_3.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000006, -1.396271]}
          scale={[1.000004, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_7_3.geometry}
          material={nodes.lftup_7_3.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.misc_1_high001_7_3.geometry}
          material={nodes.misc_1_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_7_3.geometry}
          material={nodes.misc_2_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Normal001_7_3.geometry}
          material={nodes.Normal001_7_3.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_7_3.geometry}
          material={nodes.Normal002_7_3.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.pod001_high001_7_3.geometry}
          material={nodes.pod001_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_7_3.geometry}
          material={nodes.pod002_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_7_3.geometry}
          material={nodes.pod003_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_7_3.geometry}
          material={nodes.pod004_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_7_3.geometry}
          material={nodes.pod005_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_7_3.geometry}
          material={nodes.pod006_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_7_3.geometry}
          material={nodes.pod007_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_7_3.geometry}
          material={nodes.pod008_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_7_3.geometry}
          material={nodes.pod009_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_7_3.geometry}
          material={nodes.pod010_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_7_3.geometry}
          material={nodes.pod011_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_7_3.geometry}
          material={nodes.pod012_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_7_3.geometry}
          material={nodes.pod013_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_7_3.geometry}
          material={nodes.pod014_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_7_3.geometry}
          material={nodes.pod015_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_7_3.geometry}
          material={nodes.pod016_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_7_3.geometry}
          material={nodes.pod017_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_7_3.geometry}
          material={nodes.pod018_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_7_3.geometry}
          material={nodes.pod019_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_7_3.geometry}
          material={nodes.pod020_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_7_3.geometry}
          material={nodes.pod021_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_7_3.geometry}
          material={nodes.pod022_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_7_3.geometry}
          material={nodes.pod023_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_7_3.geometry}
          material={nodes.pod024_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_7_3.geometry}
          material={nodes.pod025_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_7_3.geometry}
          material={nodes.pod026_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_7_3.geometry}
          material={nodes.pod027_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_7_3.geometry}
          material={nodes.pod028_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_7_3.geometry}
          material={nodes.pod029_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_7_3.geometry}
          material={nodes.pod030_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_7_3.geometry}
          material={nodes.pod031_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_7_3.geometry}
          material={nodes.pod032_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_7_3.geometry}
          material={nodes.pod033_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_7_3.geometry}
          material={nodes.pod034_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_7_3.geometry}
          material={nodes.pod035_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_7_3.geometry}
          material={nodes.pod036_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_7_3.geometry}
          material={nodes.pod037_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_7_3.geometry}
          material={nodes.pod038_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_7_3.geometry}
          material={nodes.pod039_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_7_3.geometry}
          material={nodes.pod040_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_7_3.geometry}
          material={nodes.pod041_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_7_3.geometry}
          material={nodes.pod042_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_7_3.geometry}
          material={nodes.pod043_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_7_3.geometry}
          material={nodes.pod044_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_7_3.geometry}
          material={nodes.pod045_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_7_3.geometry}
          material={nodes.pod046_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_7_3.geometry}
          material={nodes.pod047_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_7_3.geometry}
          material={nodes.pod_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.rgtdwn_7_3.geometry}
          material={nodes.rgtdwn_7_3.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0.000001, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_7_3.geometry}
          material={nodes.rgtup_7_3.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Sphere001_7_3.geometry}
          material={nodes.Sphere001_7_3.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_7_3.geometry}
          material={nodes.Sphere002_7_3.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_7_3.geometry}
          material={nodes.Sphere003_7_3.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_7_3.geometry}
          material={nodes.Sphere004_7_3.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_7_3.geometry}
          material={nodes.wire_1_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_7_3.geometry}
          material={nodes.wire_2_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_7_3.geometry}
          material={nodes.wire_3_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_7_3.geometry}
          material={nodes.wire_4_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_7_3.geometry}
          material={nodes.wire_5_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_7_3.geometry}
          material={nodes.wire_6_high001_7_3.material}
          position={[0.000122, 0, -0.013459]}
        />
      </group>
      <group position={[-14.912049, 6.240774, 0.174763]}>
        <mesh
          geometry={nodes.big_wire001_high001_10.geometry}
          material={nodes.big_wire001_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_10.geometry}
          material={nodes.big_wire002_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_10.geometry}
          material={nodes.big_wire003_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_10.geometry}
          material={nodes.big_wire005_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_10.geometry}
          material={nodes.big_wire006_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_10.geometry}
          material={nodes.big_wire007_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_10.geometry}
          material={nodes.big_wire_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_10.geometry}
          material={nodes.Cube001_10.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_10.geometry}
          material={nodes.Cube002_10.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_10.geometry}
          material={nodes.Cube003_10.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_10.geometry}
          material={nodes.Cube004_10.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_10.geometry}
          material={nodes.Cube005_10.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_10.geometry}
          material={nodes.Cube006_10.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_10.geometry}
          material={nodes.Cube007_10.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_10.geometry}
          material={nodes.Cube008_10.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_10.geometry}
          material={nodes.Cube009_10.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.floor_1_high001_10.geometry}
          material={nodes.floor_1_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_2_high001_10.geometry}
          material={nodes.floor_2_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_10.geometry}
          material={nodes.floor_4_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_10.geometry}
          material={nodes.floor_5_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_10.geometry}
          material={nodes.floor_6_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_10.geometry}
          material={nodes.floor_metalpiece_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_10.geometry}
          material={nodes.fog_1002_10.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.fog_2001_10.geometry}
          material={nodes.fog_2001_10.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_10.geometry} material={nodes.glass_1_high_10.material} />
        <mesh geometry={nodes.glass_2_high_10.geometry} material={nodes.glass_2_high_10.material} />
        <mesh geometry={nodes.glass_3_high_10.geometry} material={nodes.glass_3_high_10.material} />
        <mesh geometry={nodes.led_1_high_10.geometry} material={nodes.led_1_high_10.material} />
        <mesh geometry={nodes.led_2_high_10.geometry} material={nodes.led_2_high_10.material} />
        <mesh geometry={nodes.led_4_high_10.geometry} material={nodes.led_4_high_10.material} />
        <mesh
          geometry={nodes.misc_1_high001_10.geometry}
          material={nodes.misc_1_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_10.geometry}
          material={nodes.misc_2_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod001_high001_10.geometry}
          material={nodes.pod001_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_10.geometry}
          material={nodes.pod002_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_10.geometry}
          material={nodes.pod003_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_10.geometry}
          material={nodes.pod004_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_10.geometry}
          material={nodes.pod005_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_10.geometry}
          material={nodes.pod006_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_10.geometry}
          material={nodes.pod007_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_10.geometry}
          material={nodes.pod008_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_10.geometry}
          material={nodes.pod009_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_10.geometry}
          material={nodes.pod010_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_10.geometry}
          material={nodes.pod011_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_10.geometry}
          material={nodes.pod012_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_10.geometry}
          material={nodes.pod013_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_10.geometry}
          material={nodes.pod014_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_10.geometry}
          material={nodes.pod015_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_10.geometry}
          material={nodes.pod016_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_10.geometry}
          material={nodes.pod017_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_10.geometry}
          material={nodes.pod018_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_10.geometry}
          material={nodes.pod019_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_10.geometry}
          material={nodes.pod020_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_10.geometry}
          material={nodes.pod021_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_10.geometry}
          material={nodes.pod022_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_10.geometry}
          material={nodes.pod023_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_10.geometry}
          material={nodes.pod024_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_10.geometry}
          material={nodes.pod025_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_10.geometry}
          material={nodes.pod026_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_10.geometry}
          material={nodes.pod027_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_10.geometry}
          material={nodes.pod028_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_10.geometry}
          material={nodes.pod029_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_10.geometry}
          material={nodes.pod030_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_10.geometry}
          material={nodes.pod031_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_10.geometry}
          material={nodes.pod032_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_10.geometry}
          material={nodes.pod033_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_10.geometry}
          material={nodes.pod034_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_10.geometry}
          material={nodes.pod035_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_10.geometry}
          material={nodes.pod036_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_10.geometry}
          material={nodes.pod037_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_10.geometry}
          material={nodes.pod038_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_10.geometry}
          material={nodes.pod039_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_10.geometry}
          material={nodes.pod040_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_10.geometry}
          material={nodes.pod041_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_10.geometry}
          material={nodes.pod042_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_10.geometry}
          material={nodes.pod043_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_10.geometry}
          material={nodes.pod044_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_10.geometry}
          material={nodes.pod045_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_10.geometry}
          material={nodes.pod046_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_10.geometry}
          material={nodes.pod047_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_10.geometry}
          material={nodes.pod_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Sphere001_10.geometry}
          material={nodes.Sphere001_10.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_10.geometry}
          material={nodes.Sphere002_10.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_10.geometry}
          material={nodes.Sphere003_10.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_10.geometry}
          material={nodes.Sphere004_10.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_10.geometry}
          material={nodes.wire_1_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_10.geometry}
          material={nodes.wire_2_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_10.geometry}
          material={nodes.wire_3_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_10.geometry}
          material={nodes.wire_4_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_10.geometry}
          material={nodes.wire_5_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_10.geometry}
          material={nodes.wire_6_high001_10.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cylinder001_10.geometry}
          material={nodes.Cylinder001_10.material}
          position={[0.002212, 0.115416, -0.115012]}
          rotation={[-1.462025, 0.153089, -0.042648]}
          scale={[0.084366, 0.047614, 0.085482]}
        />
        <mesh
          geometry={nodes.Cylinder002_10.geometry}
          material={nodes.Cylinder002_10.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_10.geometry}
          material={nodes.Cylinder003_10.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_10.geometry}
          material={nodes.Cylinder004_10.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.defaultMaterial001_10.geometry}
          material={nodes.defaultMaterial001_10.material}
          position={[-0.006779, 0.159544, 0.247359]}
          rotation={[-1.668043, -0.268541, -0.017551]}
          scale={0.592855}
        />
        <mesh
          geometry={nodes.lftdwn_10.geometry}
          material={nodes.lftdwn_10.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000005, -1.39627]}
          scale={[1.000003, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_10.geometry}
          material={nodes.lftup_10.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Mesh_3001_10.geometry}
          material={nodes.Mesh_3001_10.material}
          position={[0.00748, 0.124292, 0.132539]}
          rotation={[2.940696, 0.011766, -0.157033]}
          scale={[0.012504, 0.012504, 0.009253]}
        />
        <mesh
          geometry={nodes.Normal001_10.geometry}
          material={nodes.Normal001_10.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_10.geometry}
          material={nodes.Normal002_10.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.rgtdwn_10.geometry}
          material={nodes.rgtdwn_10.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_10.geometry}
          material={nodes.rgtup_10.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Skin2001_10.geometry}
          material={nodes.Skin2001_10.material}
          position={[0.007175, 0.135102, -0.283643]}
          rotation={[3.048996, 0.016922, -0.048459]}
          scale={[1.583777, 1.583777, 1.583777]}
        />
        <mesh
          geometry={nodes.Sphere005_10.geometry}
          material={nodes.Sphere005_10.material}
          position={[-0.053936, 0.211969, -0.381501]}
          rotation={[0.765665, -0.313231, 2.216415]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.Sphere006_10.geometry}
          material={nodes.Sphere006_10.material}
          position={[0.060085, 0.214964, -0.3818]}
          rotation={[0.675591, -0.440335, 1.907348]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
      </group>
      <group position={[-14.912049, 6.240774, -26.681545]}>
        <mesh
          geometry={nodes.floor_2_high001_10_3.geometry}
          material={nodes.floor_2_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_10_3.geometry}
          material={nodes.floor_4_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_10_3.geometry}
          material={nodes.floor_5_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_2001_10_3.geometry}
          material={nodes.fog_2001_10_3.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.big_wire001_high001_10_3.geometry}
          material={nodes.big_wire001_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_10_3.geometry}
          material={nodes.big_wire002_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_10_3.geometry}
          material={nodes.big_wire003_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_10_3.geometry}
          material={nodes.big_wire005_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_10_3.geometry}
          material={nodes.big_wire006_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_10_3.geometry}
          material={nodes.big_wire007_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_10_3.geometry}
          material={nodes.big_wire_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_10_3.geometry}
          material={nodes.Cube001_10_3.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_10_3.geometry}
          material={nodes.Cube002_10_3.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_10_3.geometry}
          material={nodes.Cube003_10_3.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_10_3.geometry}
          material={nodes.Cube004_10_3.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_10_3.geometry}
          material={nodes.Cube005_10_3.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_10_3.geometry}
          material={nodes.Cube006_10_3.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_10_3.geometry}
          material={nodes.Cube007_10_3.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_10_3.geometry}
          material={nodes.Cube008_10_3.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_10_3.geometry}
          material={nodes.Cube009_10_3.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.Cylinder002_10_3.geometry}
          material={nodes.Cylinder002_10_3.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_10_3.geometry}
          material={nodes.Cylinder003_10_3.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_10_3.geometry}
          material={nodes.Cylinder004_10_3.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.floor_1_high001_10_3.geometry}
          material={nodes.floor_1_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_10_3.geometry}
          material={nodes.floor_6_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_10_3.geometry}
          material={nodes.floor_metalpiece_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_10_3.geometry}
          material={nodes.fog_1002_10_3.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_10_3.geometry} material={nodes.glass_1_high_10_3.material} />
        <mesh geometry={nodes.glass_2_high_10_3.geometry} material={nodes.glass_2_high_10_3.material} />
        <mesh
          geometry={nodes.glass_3_high_10_3.geometry}
          material={nodes.glass_3_high_10_3.material}
          position={[-0.007545, 0, 0]}
        />
        <mesh geometry={nodes.led_1_high_10_3.geometry} material={nodes.led_1_high_10_3.material} />
        <mesh geometry={nodes.led_2_high_10_3.geometry} material={nodes.led_2_high_10_3.material} />
        <mesh geometry={nodes.led_4_high_10_3.geometry} material={nodes.led_4_high_10_3.material} />
        <mesh
          geometry={nodes.lftdwn_10_3.geometry}
          material={nodes.lftdwn_10_3.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000006, -1.396271]}
          scale={[1.000004, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_10_3.geometry}
          material={nodes.lftup_10_3.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.misc_1_high001_10_3.geometry}
          material={nodes.misc_1_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_10_3.geometry}
          material={nodes.misc_2_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Normal001_10_3.geometry}
          material={nodes.Normal001_10_3.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_10_3.geometry}
          material={nodes.Normal002_10_3.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.pod001_high001_10_3.geometry}
          material={nodes.pod001_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_10_3.geometry}
          material={nodes.pod002_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_10_3.geometry}
          material={nodes.pod003_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_10_3.geometry}
          material={nodes.pod004_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_10_3.geometry}
          material={nodes.pod005_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_10_3.geometry}
          material={nodes.pod006_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_10_3.geometry}
          material={nodes.pod007_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_10_3.geometry}
          material={nodes.pod008_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_10_3.geometry}
          material={nodes.pod009_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_10_3.geometry}
          material={nodes.pod010_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_10_3.geometry}
          material={nodes.pod011_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_10_3.geometry}
          material={nodes.pod012_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_10_3.geometry}
          material={nodes.pod013_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_10_3.geometry}
          material={nodes.pod014_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_10_3.geometry}
          material={nodes.pod015_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_10_3.geometry}
          material={nodes.pod016_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_10_3.geometry}
          material={nodes.pod017_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_10_3.geometry}
          material={nodes.pod018_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_10_3.geometry}
          material={nodes.pod019_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_10_3.geometry}
          material={nodes.pod020_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_10_3.geometry}
          material={nodes.pod021_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_10_3.geometry}
          material={nodes.pod022_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_10_3.geometry}
          material={nodes.pod023_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_10_3.geometry}
          material={nodes.pod024_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_10_3.geometry}
          material={nodes.pod025_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_10_3.geometry}
          material={nodes.pod026_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_10_3.geometry}
          material={nodes.pod027_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_10_3.geometry}
          material={nodes.pod028_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_10_3.geometry}
          material={nodes.pod029_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_10_3.geometry}
          material={nodes.pod030_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_10_3.geometry}
          material={nodes.pod031_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_10_3.geometry}
          material={nodes.pod032_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_10_3.geometry}
          material={nodes.pod033_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_10_3.geometry}
          material={nodes.pod034_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_10_3.geometry}
          material={nodes.pod035_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_10_3.geometry}
          material={nodes.pod036_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_10_3.geometry}
          material={nodes.pod037_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_10_3.geometry}
          material={nodes.pod038_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_10_3.geometry}
          material={nodes.pod039_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_10_3.geometry}
          material={nodes.pod040_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_10_3.geometry}
          material={nodes.pod041_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_10_3.geometry}
          material={nodes.pod042_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_10_3.geometry}
          material={nodes.pod043_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_10_3.geometry}
          material={nodes.pod044_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_10_3.geometry}
          material={nodes.pod045_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_10_3.geometry}
          material={nodes.pod046_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_10_3.geometry}
          material={nodes.pod047_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_10_3.geometry}
          material={nodes.pod_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.rgtdwn_10_3.geometry}
          material={nodes.rgtdwn_10_3.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0.000001, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_10_3.geometry}
          material={nodes.rgtup_10_3.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Sphere001_10_3.geometry}
          material={nodes.Sphere001_10_3.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_10_3.geometry}
          material={nodes.Sphere002_10_3.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_10_3.geometry}
          material={nodes.Sphere003_10_3.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_10_3.geometry}
          material={nodes.Sphere004_10_3.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_10_3.geometry}
          material={nodes.wire_1_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_10_3.geometry}
          material={nodes.wire_2_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_10_3.geometry}
          material={nodes.wire_3_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_10_3.geometry}
          material={nodes.wire_4_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_10_3.geometry}
          material={nodes.wire_5_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_10_3.geometry}
          material={nodes.wire_6_high001_10_3.material}
          position={[0.000122, 0, -0.013459]}
        />
      </group>
      <group position={[-4.10717, 6.240774, -8.623399]}>
        <mesh
          geometry={nodes.big_wire001_high001_1.geometry}
          material={nodes.big_wire001_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_1.geometry}
          material={nodes.big_wire002_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_1.geometry}
          material={nodes.big_wire003_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_1.geometry}
          material={nodes.big_wire005_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_1.geometry}
          material={nodes.big_wire006_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_1.geometry}
          material={nodes.big_wire007_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_1.geometry}
          material={nodes.big_wire_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={nodes.Cube001_1.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={nodes.Cube002_1.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_1.geometry}
          material={nodes.Cube003_1.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_1.geometry}
          material={nodes.Cube004_1.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_1.geometry}
          material={nodes.Cube005_1.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_1.geometry}
          material={nodes.Cube006_1.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_1.geometry}
          material={nodes.Cube007_1.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_1.geometry}
          material={nodes.Cube008_1.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_1.geometry}
          material={nodes.Cube009_1.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.floor_1_high001_1.geometry}
          material={nodes.floor_1_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_2_high001_1.geometry}
          material={nodes.floor_2_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_1.geometry}
          material={nodes.floor_4_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_1.geometry}
          material={nodes.floor_5_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_1.geometry}
          material={nodes.floor_6_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_1.geometry}
          material={nodes.floor_metalpiece_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_1.geometry}
          material={nodes.fog_1002_1.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.fog_2001_1.geometry}
          material={nodes.fog_2001_1.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_1.geometry} material={nodes.glass_1_high_1.material} />
        <mesh geometry={nodes.glass_2_high_1.geometry} material={nodes.glass_2_high_1.material} />
        <mesh geometry={nodes.glass_3_high_1.geometry} material={nodes.glass_3_high_1.material} />
        <mesh geometry={nodes.led_1_high_1.geometry} material={nodes.led_1_high_1.material} />
        <mesh geometry={nodes.led_2_high_1.geometry} material={nodes.led_2_high_1.material} />
        <mesh geometry={nodes.led_4_high_1.geometry} material={nodes.led_4_high_1.material} />
        <mesh
          geometry={nodes.misc_1_high001_1.geometry}
          material={nodes.misc_1_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_1.geometry}
          material={nodes.misc_2_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod001_high001_1.geometry}
          material={nodes.pod001_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_1.geometry}
          material={nodes.pod002_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_1.geometry}
          material={nodes.pod003_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_1.geometry}
          material={nodes.pod004_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_1.geometry}
          material={nodes.pod005_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_1.geometry}
          material={nodes.pod006_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_1.geometry}
          material={nodes.pod007_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_1.geometry}
          material={nodes.pod008_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_1.geometry}
          material={nodes.pod009_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_1.geometry}
          material={nodes.pod010_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_1.geometry}
          material={nodes.pod011_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_1.geometry}
          material={nodes.pod012_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_1.geometry}
          material={nodes.pod013_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_1.geometry}
          material={nodes.pod014_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_1.geometry}
          material={nodes.pod015_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_1.geometry}
          material={nodes.pod016_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_1.geometry}
          material={nodes.pod017_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_1.geometry}
          material={nodes.pod018_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_1.geometry}
          material={nodes.pod019_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_1.geometry}
          material={nodes.pod020_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_1.geometry}
          material={nodes.pod021_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_1.geometry}
          material={nodes.pod022_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_1.geometry}
          material={nodes.pod023_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_1.geometry}
          material={nodes.pod024_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_1.geometry}
          material={nodes.pod025_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_1.geometry}
          material={nodes.pod026_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_1.geometry}
          material={nodes.pod027_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_1.geometry}
          material={nodes.pod028_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_1.geometry}
          material={nodes.pod029_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_1.geometry}
          material={nodes.pod030_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_1.geometry}
          material={nodes.pod031_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_1.geometry}
          material={nodes.pod032_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_1.geometry}
          material={nodes.pod033_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_1.geometry}
          material={nodes.pod034_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_1.geometry}
          material={nodes.pod035_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_1.geometry}
          material={nodes.pod036_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_1.geometry}
          material={nodes.pod037_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_1.geometry}
          material={nodes.pod038_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_1.geometry}
          material={nodes.pod039_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_1.geometry}
          material={nodes.pod040_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_1.geometry}
          material={nodes.pod041_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_1.geometry}
          material={nodes.pod042_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_1.geometry}
          material={nodes.pod043_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_1.geometry}
          material={nodes.pod044_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_1.geometry}
          material={nodes.pod045_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_1.geometry}
          material={nodes.pod046_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_1.geometry}
          material={nodes.pod047_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_1.geometry}
          material={nodes.pod_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Sphere001_1.geometry}
          material={nodes.Sphere001_1.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_1.geometry}
          material={nodes.Sphere002_1.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_1.geometry}
          material={nodes.Sphere003_1.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_1.geometry}
          material={nodes.Sphere004_1.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_1.geometry}
          material={nodes.wire_1_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_1.geometry}
          material={nodes.wire_2_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_1.geometry}
          material={nodes.wire_3_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_1.geometry}
          material={nodes.wire_4_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_1.geometry}
          material={nodes.wire_5_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_1.geometry}
          material={nodes.wire_6_high001_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cylinder001_1.geometry}
          material={nodes.Cylinder001_1.material}
          position={[0.002212, 0.115416, -0.115012]}
          rotation={[-1.462025, 0.153089, -0.042648]}
          scale={[0.084366, 0.047614, 0.085482]}
        />
        <mesh
          geometry={nodes.Cylinder002_1.geometry}
          material={nodes.Cylinder002_1.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_1.geometry}
          material={nodes.Cylinder003_1.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_1.geometry}
          material={nodes.Cylinder004_1.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.defaultMaterial001_1.geometry}
          material={nodes.defaultMaterial001_1.material}
          position={[-0.006779, 0.159544, 0.247359]}
          rotation={[-1.668043, -0.268541, -0.017551]}
          scale={0.592855}
        />
        <mesh
          geometry={nodes.lftdwn_1.geometry}
          material={nodes.lftdwn_1.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000005, -1.39627]}
          scale={[1.000003, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_1.geometry}
          material={nodes.lftup_1.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Mesh_3001_1.geometry}
          material={nodes.Mesh_3001_1.material}
          position={[0.00748, 0.124292, 0.132539]}
          rotation={[2.940696, 0.011766, -0.157033]}
          scale={[0.012504, 0.012504, 0.009253]}
        />
        <mesh
          geometry={nodes.Normal001_1.geometry}
          material={nodes.Normal001_1.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_1.geometry}
          material={nodes.Normal002_1.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.rgtdwn_1.geometry}
          material={nodes.rgtdwn_1.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_1.geometry}
          material={nodes.rgtup_1.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Sphere005_1.geometry}
          material={nodes.Sphere005_1.material}
          position={[-0.053936, 0.211969, -0.381501]}
          rotation={[0.765665, -0.313231, 2.216415]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.Sphere006_1.geometry}
          material={nodes.Sphere006_1.material}
          position={[0.060085, 0.214964, -0.3818]}
          rotation={[0.675591, -0.440335, 1.907348]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
      </group>
      <group position={[-4.10717, 6.240774, 8.978896]}>
        <mesh
          geometry={nodes.big_wire001_high001_2.geometry}
          material={nodes.big_wire001_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_2.geometry}
          material={nodes.big_wire002_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_2.geometry}
          material={nodes.big_wire003_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_2.geometry}
          material={nodes.big_wire005_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_2.geometry}
          material={nodes.big_wire006_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_2.geometry}
          material={nodes.big_wire007_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_2.geometry}
          material={nodes.big_wire_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={nodes.Cube001_2.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_2.geometry}
          material={nodes.Cube002_2.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_2.geometry}
          material={nodes.Cube003_2.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_2.geometry}
          material={nodes.Cube004_2.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_2.geometry}
          material={nodes.Cube005_2.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_2.geometry}
          material={nodes.Cube006_2.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_2.geometry}
          material={nodes.Cube007_2.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_2.geometry}
          material={nodes.Cube008_2.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_2.geometry}
          material={nodes.Cube009_2.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.floor_1_high001_2.geometry}
          material={nodes.floor_1_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_2_high001_2.geometry}
          material={nodes.floor_2_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_2.geometry}
          material={nodes.floor_4_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_2.geometry}
          material={nodes.floor_5_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_2.geometry}
          material={nodes.floor_6_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_2.geometry}
          material={nodes.floor_metalpiece_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_2.geometry}
          material={nodes.fog_1002_2.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.fog_2001_2.geometry}
          material={nodes.fog_2001_2.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_2.geometry} material={nodes.glass_1_high_2.material} />
        <mesh geometry={nodes.glass_2_high_2.geometry} material={nodes.glass_2_high_2.material} />
        <mesh
          geometry={nodes.glass_3_high_2.geometry}
          material={nodes.glass_3_high_2.material}
          position={[-0.006674, 0, 0]}
        />
        <mesh geometry={nodes.led_1_high_2.geometry} material={nodes.led_1_high_2.material} />
        <mesh geometry={nodes.led_2_high_2.geometry} material={nodes.led_2_high_2.material} />
        <mesh geometry={nodes.led_4_high_2.geometry} material={nodes.led_4_high_2.material} />
        <mesh
          geometry={nodes.misc_1_high001_2.geometry}
          material={nodes.misc_1_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_2.geometry}
          material={nodes.misc_2_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod001_high001_2.geometry}
          material={nodes.pod001_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_2.geometry}
          material={nodes.pod002_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_2.geometry}
          material={nodes.pod003_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_2.geometry}
          material={nodes.pod004_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_2.geometry}
          material={nodes.pod005_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_2.geometry}
          material={nodes.pod006_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_2.geometry}
          material={nodes.pod007_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_2.geometry}
          material={nodes.pod008_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_2.geometry}
          material={nodes.pod009_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_2.geometry}
          material={nodes.pod010_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_2.geometry}
          material={nodes.pod011_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_2.geometry}
          material={nodes.pod012_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_2.geometry}
          material={nodes.pod013_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_2.geometry}
          material={nodes.pod014_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_2.geometry}
          material={nodes.pod015_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_2.geometry}
          material={nodes.pod016_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_2.geometry}
          material={nodes.pod017_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_2.geometry}
          material={nodes.pod018_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_2.geometry}
          material={nodes.pod019_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_2.geometry}
          material={nodes.pod020_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_2.geometry}
          material={nodes.pod021_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_2.geometry}
          material={nodes.pod022_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_2.geometry}
          material={nodes.pod023_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_2.geometry}
          material={nodes.pod024_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_2.geometry}
          material={nodes.pod025_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_2.geometry}
          material={nodes.pod026_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_2.geometry}
          material={nodes.pod027_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_2.geometry}
          material={nodes.pod028_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_2.geometry}
          material={nodes.pod029_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_2.geometry}
          material={nodes.pod030_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_2.geometry}
          material={nodes.pod031_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_2.geometry}
          material={nodes.pod032_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_2.geometry}
          material={nodes.pod033_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_2.geometry}
          material={nodes.pod034_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_2.geometry}
          material={nodes.pod035_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_2.geometry}
          material={nodes.pod036_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_2.geometry}
          material={nodes.pod037_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_2.geometry}
          material={nodes.pod038_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_2.geometry}
          material={nodes.pod039_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_2.geometry}
          material={nodes.pod040_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_2.geometry}
          material={nodes.pod041_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_2.geometry}
          material={nodes.pod042_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_2.geometry}
          material={nodes.pod043_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_2.geometry}
          material={nodes.pod044_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_2.geometry}
          material={nodes.pod045_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_2.geometry}
          material={nodes.pod046_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_2.geometry}
          material={nodes.pod047_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_2.geometry}
          material={nodes.pod_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Sphere001_2.geometry}
          material={nodes.Sphere001_2.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_2.geometry}
          material={nodes.Sphere002_2.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_2.geometry}
          material={nodes.Sphere003_2.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_2.geometry}
          material={nodes.Sphere004_2.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_2.geometry}
          material={nodes.wire_1_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_2.geometry}
          material={nodes.wire_2_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_2.geometry}
          material={nodes.wire_3_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_2.geometry}
          material={nodes.wire_4_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_2.geometry}
          material={nodes.wire_5_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_2.geometry}
          material={nodes.wire_6_high001_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cylinder002_2.geometry}
          material={nodes.Cylinder002_2.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_2.geometry}
          material={nodes.Cylinder003_2.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_2.geometry}
          material={nodes.Cylinder004_2.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.lftdwn_2.geometry}
          material={nodes.lftdwn_2.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000005, -1.39627]}
          scale={[1.000003, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_2.geometry}
          material={nodes.lftup_2.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Normal001_2.geometry}
          material={nodes.Normal001_2.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_2.geometry}
          material={nodes.Normal002_2.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.rgtdwn_2.geometry}
          material={nodes.rgtdwn_2.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_2.geometry}
          material={nodes.rgtup_2.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
      </group>
      <group position={[-25.775702, 6.240774, 8.978896]}>
        <mesh
          geometry={nodes.floor_2_high001_2_1.geometry}
          material={nodes.floor_2_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_2_1.geometry}
          material={nodes.floor_4_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_2_1.geometry}
          material={nodes.floor_5_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_2001_2_1.geometry}
          material={nodes.fog_2001_2_1.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.big_wire001_high001_2_1.geometry}
          material={nodes.big_wire001_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_2_1.geometry}
          material={nodes.big_wire002_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_2_1.geometry}
          material={nodes.big_wire003_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_2_1.geometry}
          material={nodes.big_wire005_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_2_1.geometry}
          material={nodes.big_wire006_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_2_1.geometry}
          material={nodes.big_wire007_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_2_1.geometry}
          material={nodes.big_wire_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_2_1.geometry}
          material={nodes.Cube001_2_1.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_2_1.geometry}
          material={nodes.Cube002_2_1.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_2_1.geometry}
          material={nodes.Cube003_2_1.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_2_1.geometry}
          material={nodes.Cube004_2_1.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_2_1.geometry}
          material={nodes.Cube005_2_1.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_2_1.geometry}
          material={nodes.Cube006_2_1.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_2_1.geometry}
          material={nodes.Cube007_2_1.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_2_1.geometry}
          material={nodes.Cube008_2_1.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_2_1.geometry}
          material={nodes.Cube009_2_1.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.Cylinder002_2_1.geometry}
          material={nodes.Cylinder002_2_1.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_2_1.geometry}
          material={nodes.Cylinder003_2_1.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_2_1.geometry}
          material={nodes.Cylinder004_2_1.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.floor_1_high001_2_1.geometry}
          material={nodes.floor_1_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_2_1.geometry}
          material={nodes.floor_6_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_2_1.geometry}
          material={nodes.floor_metalpiece_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_2_1.geometry}
          material={nodes.fog_1002_2_1.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_2_1.geometry} material={nodes.glass_1_high_2_1.material} />
        <mesh geometry={nodes.glass_2_high_2_1.geometry} material={nodes.glass_2_high_2_1.material} />
        <mesh
          geometry={nodes.glass_3_high_2_1.geometry}
          material={nodes.glass_3_high_2_1.material}
          position={[0.01021, 0, 0]}
        />
        <mesh geometry={nodes.led_1_high_2_1.geometry} material={nodes.led_1_high_2_1.material} />
        <mesh geometry={nodes.led_2_high_2_1.geometry} material={nodes.led_2_high_2_1.material} />
        <mesh geometry={nodes.led_4_high_2_1.geometry} material={nodes.led_4_high_2_1.material} />
        <mesh
          geometry={nodes.lftdwn_2_1.geometry}
          material={nodes.lftdwn_2_1.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000006, -1.396271]}
          scale={[1.000004, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_2_1.geometry}
          material={nodes.lftup_2_1.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.misc_1_high001_2_1.geometry}
          material={nodes.misc_1_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_2_1.geometry}
          material={nodes.misc_2_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Normal001_2_1.geometry}
          material={nodes.Normal001_2_1.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_2_1.geometry}
          material={nodes.Normal002_2_1.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.pod001_high001_2_1.geometry}
          material={nodes.pod001_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_2_1.geometry}
          material={nodes.pod002_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_2_1.geometry}
          material={nodes.pod003_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_2_1.geometry}
          material={nodes.pod004_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_2_1.geometry}
          material={nodes.pod005_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_2_1.geometry}
          material={nodes.pod006_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_2_1.geometry}
          material={nodes.pod007_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_2_1.geometry}
          material={nodes.pod008_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_2_1.geometry}
          material={nodes.pod009_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_2_1.geometry}
          material={nodes.pod010_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_2_1.geometry}
          material={nodes.pod011_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_2_1.geometry}
          material={nodes.pod012_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_2_1.geometry}
          material={nodes.pod013_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_2_1.geometry}
          material={nodes.pod014_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_2_1.geometry}
          material={nodes.pod015_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_2_1.geometry}
          material={nodes.pod016_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_2_1.geometry}
          material={nodes.pod017_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_2_1.geometry}
          material={nodes.pod018_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_2_1.geometry}
          material={nodes.pod019_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_2_1.geometry}
          material={nodes.pod020_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_2_1.geometry}
          material={nodes.pod021_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_2_1.geometry}
          material={nodes.pod022_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_2_1.geometry}
          material={nodes.pod023_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_2_1.geometry}
          material={nodes.pod024_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_2_1.geometry}
          material={nodes.pod025_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_2_1.geometry}
          material={nodes.pod026_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_2_1.geometry}
          material={nodes.pod027_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_2_1.geometry}
          material={nodes.pod028_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_2_1.geometry}
          material={nodes.pod029_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_2_1.geometry}
          material={nodes.pod030_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_2_1.geometry}
          material={nodes.pod031_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_2_1.geometry}
          material={nodes.pod032_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_2_1.geometry}
          material={nodes.pod033_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_2_1.geometry}
          material={nodes.pod034_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_2_1.geometry}
          material={nodes.pod035_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_2_1.geometry}
          material={nodes.pod036_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_2_1.geometry}
          material={nodes.pod037_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_2_1.geometry}
          material={nodes.pod038_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_2_1.geometry}
          material={nodes.pod039_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_2_1.geometry}
          material={nodes.pod040_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_2_1.geometry}
          material={nodes.pod041_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_2_1.geometry}
          material={nodes.pod042_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_2_1.geometry}
          material={nodes.pod043_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_2_1.geometry}
          material={nodes.pod044_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_2_1.geometry}
          material={nodes.pod045_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_2_1.geometry}
          material={nodes.pod046_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_2_1.geometry}
          material={nodes.pod047_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_2_1.geometry}
          material={nodes.pod_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.rgtdwn_2_1.geometry}
          material={nodes.rgtdwn_2_1.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0.000001, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_2_1.geometry}
          material={nodes.rgtup_2_1.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Sphere001_2_1.geometry}
          material={nodes.Sphere001_2_1.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_2_1.geometry}
          material={nodes.Sphere002_2_1.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_2_1.geometry}
          material={nodes.Sphere003_2_1.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_2_1.geometry}
          material={nodes.Sphere004_2_1.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_2_1.geometry}
          material={nodes.wire_1_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_2_1.geometry}
          material={nodes.wire_2_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_2_1.geometry}
          material={nodes.wire_3_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_2_1.geometry}
          material={nodes.wire_4_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_2_1.geometry}
          material={nodes.wire_5_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_2_1.geometry}
          material={nodes.wire_6_high001_2_1.material}
          position={[0.000122, 0, -0.013459]}
        />
      </group>
      <group position={[-25.774717, 6.240774, 17.775314]}>
        <mesh
          geometry={nodes.floor_2_high001_2_1_1.geometry}
          material={nodes.floor_2_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_2_1_1.geometry}
          material={nodes.floor_4_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_2_1_1.geometry}
          material={nodes.floor_5_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_2001_2_1_1.geometry}
          material={nodes.fog_2001_2_1_1.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.big_wire001_high001_2_1_1.geometry}
          material={nodes.big_wire001_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_2_1_1.geometry}
          material={nodes.big_wire002_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_2_1_1.geometry}
          material={nodes.big_wire003_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_2_1_1.geometry}
          material={nodes.big_wire005_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_2_1_1.geometry}
          material={nodes.big_wire006_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_2_1_1.geometry}
          material={nodes.big_wire007_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_2_1_1.geometry}
          material={nodes.big_wire_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_2_1_1.geometry}
          material={nodes.Cube001_2_1_1.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_2_1_1.geometry}
          material={nodes.Cube002_2_1_1.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_2_1_1.geometry}
          material={nodes.Cube003_2_1_1.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_2_1_1.geometry}
          material={nodes.Cube004_2_1_1.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_2_1_1.geometry}
          material={nodes.Cube005_2_1_1.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_2_1_1.geometry}
          material={nodes.Cube006_2_1_1.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_2_1_1.geometry}
          material={nodes.Cube007_2_1_1.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_2_1_1.geometry}
          material={nodes.Cube008_2_1_1.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_2_1_1.geometry}
          material={nodes.Cube009_2_1_1.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.Cylinder002_2_1_1.geometry}
          material={nodes.Cylinder002_2_1_1.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_2_1_1.geometry}
          material={nodes.Cylinder003_2_1_1.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_2_1_1.geometry}
          material={nodes.Cylinder004_2_1_1.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.floor_1_high001_2_1_1.geometry}
          material={nodes.floor_1_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_2_1_1.geometry}
          material={nodes.floor_6_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_2_1_1.geometry}
          material={nodes.floor_metalpiece_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_2_1_1.geometry}
          material={nodes.fog_1002_2_1_1.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_2_1_1.geometry} material={nodes.glass_1_high_2_1_1.material} />
        <mesh geometry={nodes.glass_2_high_2_1_1.geometry} material={nodes.glass_2_high_2_1_1.material} />
        <mesh
          geometry={nodes.glass_3_high_2_1_1.geometry}
          material={nodes.glass_3_high_2_1_1.material}
          position={[0.01021, 0, 0]}
        />
        <mesh geometry={nodes.led_1_high_2_1_1.geometry} material={nodes.led_1_high_2_1_1.material} />
        <mesh geometry={nodes.led_2_high_2_1_1.geometry} material={nodes.led_2_high_2_1_1.material} />
        <mesh geometry={nodes.led_4_high_2_1_1.geometry} material={nodes.led_4_high_2_1_1.material} />
        <mesh
          geometry={nodes.lftdwn_2_1_1.geometry}
          material={nodes.lftdwn_2_1_1.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000006, -1.396271]}
          scale={[1.000004, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_2_1_1.geometry}
          material={nodes.lftup_2_1_1.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.misc_1_high001_2_1_1.geometry}
          material={nodes.misc_1_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_2_1_1.geometry}
          material={nodes.misc_2_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Normal001_2_1_1.geometry}
          material={nodes.Normal001_2_1_1.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_2_1_1.geometry}
          material={nodes.Normal002_2_1_1.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.pod001_high001_2_1_1.geometry}
          material={nodes.pod001_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_2_1_1.geometry}
          material={nodes.pod002_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_2_1_1.geometry}
          material={nodes.pod003_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_2_1_1.geometry}
          material={nodes.pod004_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_2_1_1.geometry}
          material={nodes.pod005_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_2_1_1.geometry}
          material={nodes.pod006_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_2_1_1.geometry}
          material={nodes.pod007_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_2_1_1.geometry}
          material={nodes.pod008_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_2_1_1.geometry}
          material={nodes.pod009_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_2_1_1.geometry}
          material={nodes.pod010_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_2_1_1.geometry}
          material={nodes.pod011_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_2_1_1.geometry}
          material={nodes.pod012_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_2_1_1.geometry}
          material={nodes.pod013_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_2_1_1.geometry}
          material={nodes.pod014_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_2_1_1.geometry}
          material={nodes.pod015_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_2_1_1.geometry}
          material={nodes.pod016_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_2_1_1.geometry}
          material={nodes.pod017_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_2_1_1.geometry}
          material={nodes.pod018_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_2_1_1.geometry}
          material={nodes.pod019_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_2_1_1.geometry}
          material={nodes.pod020_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_2_1_1.geometry}
          material={nodes.pod021_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_2_1_1.geometry}
          material={nodes.pod022_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_2_1_1.geometry}
          material={nodes.pod023_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_2_1_1.geometry}
          material={nodes.pod024_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_2_1_1.geometry}
          material={nodes.pod025_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_2_1_1.geometry}
          material={nodes.pod026_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_2_1_1.geometry}
          material={nodes.pod027_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_2_1_1.geometry}
          material={nodes.pod028_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_2_1_1.geometry}
          material={nodes.pod029_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_2_1_1.geometry}
          material={nodes.pod030_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_2_1_1.geometry}
          material={nodes.pod031_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_2_1_1.geometry}
          material={nodes.pod032_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_2_1_1.geometry}
          material={nodes.pod033_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_2_1_1.geometry}
          material={nodes.pod034_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_2_1_1.geometry}
          material={nodes.pod035_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_2_1_1.geometry}
          material={nodes.pod036_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_2_1_1.geometry}
          material={nodes.pod037_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_2_1_1.geometry}
          material={nodes.pod038_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_2_1_1.geometry}
          material={nodes.pod039_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_2_1_1.geometry}
          material={nodes.pod040_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_2_1_1.geometry}
          material={nodes.pod041_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_2_1_1.geometry}
          material={nodes.pod042_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_2_1_1.geometry}
          material={nodes.pod043_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_2_1_1.geometry}
          material={nodes.pod044_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_2_1_1.geometry}
          material={nodes.pod045_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_2_1_1.geometry}
          material={nodes.pod046_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_2_1_1.geometry}
          material={nodes.pod047_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_2_1_1.geometry}
          material={nodes.pod_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.rgtdwn_2_1_1.geometry}
          material={nodes.rgtdwn_2_1_1.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0.000001, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_2_1_1.geometry}
          material={nodes.rgtup_2_1_1.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Sphere001_2_1_1.geometry}
          material={nodes.Sphere001_2_1_1.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_2_1_1.geometry}
          material={nodes.Sphere002_2_1_1.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_2_1_1.geometry}
          material={nodes.Sphere003_2_1_1.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_2_1_1.geometry}
          material={nodes.Sphere004_2_1_1.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_2_1_1.geometry}
          material={nodes.wire_1_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_2_1_1.geometry}
          material={nodes.wire_2_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_2_1_1.geometry}
          material={nodes.wire_3_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_2_1_1.geometry}
          material={nodes.wire_4_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_2_1_1.geometry}
          material={nodes.wire_5_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_2_1_1.geometry}
          material={nodes.wire_6_high001_2_1_1.material}
          position={[0.000122, 0, -0.013459]}
        />
      </group>
      <group position={[-4.10717, 6.240774, -17.758989]}>
        <mesh
          geometry={nodes.floor_2_high001_2_3.geometry}
          material={nodes.floor_2_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_2_3.geometry}
          material={nodes.floor_4_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_2_3.geometry}
          material={nodes.floor_5_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_2001_2_3.geometry}
          material={nodes.fog_2001_2_3.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.big_wire001_high001_2_3.geometry}
          material={nodes.big_wire001_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_2_3.geometry}
          material={nodes.big_wire002_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_2_3.geometry}
          material={nodes.big_wire003_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_2_3.geometry}
          material={nodes.big_wire005_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_2_3.geometry}
          material={nodes.big_wire006_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_2_3.geometry}
          material={nodes.big_wire007_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_2_3.geometry}
          material={nodes.big_wire_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_2_3.geometry}
          material={nodes.Cube001_2_3.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_2_3.geometry}
          material={nodes.Cube002_2_3.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_2_3.geometry}
          material={nodes.Cube003_2_3.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_2_3.geometry}
          material={nodes.Cube004_2_3.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_2_3.geometry}
          material={nodes.Cube005_2_3.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_2_3.geometry}
          material={nodes.Cube006_2_3.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_2_3.geometry}
          material={nodes.Cube007_2_3.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_2_3.geometry}
          material={nodes.Cube008_2_3.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_2_3.geometry}
          material={nodes.Cube009_2_3.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.Cylinder002_2_3.geometry}
          material={nodes.Cylinder002_2_3.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_2_3.geometry}
          material={nodes.Cylinder003_2_3.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_2_3.geometry}
          material={nodes.Cylinder004_2_3.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.floor_1_high001_2_3.geometry}
          material={nodes.floor_1_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_2_3.geometry}
          material={nodes.floor_6_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_2_3.geometry}
          material={nodes.floor_metalpiece_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_2_3.geometry}
          material={nodes.fog_1002_2_3.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_2_3.geometry} material={nodes.glass_1_high_2_3.material} />
        <mesh geometry={nodes.glass_2_high_2_3.geometry} material={nodes.glass_2_high_2_3.material} />
        <mesh geometry={nodes.glass_3_high_2_3.geometry} material={nodes.glass_3_high_2_3.material} />
        <mesh geometry={nodes.led_1_high_2_3.geometry} material={nodes.led_1_high_2_3.material} />
        <mesh geometry={nodes.led_2_high_2_3.geometry} material={nodes.led_2_high_2_3.material} />
        <mesh geometry={nodes.led_4_high_2_3.geometry} material={nodes.led_4_high_2_3.material} />
        <mesh
          geometry={nodes.lftdwn_2_3.geometry}
          material={nodes.lftdwn_2_3.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000006, -1.396271]}
          scale={[1.000004, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_2_3.geometry}
          material={nodes.lftup_2_3.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.misc_1_high001_2_3.geometry}
          material={nodes.misc_1_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_2_3.geometry}
          material={nodes.misc_2_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Normal001_2_3.geometry}
          material={nodes.Normal001_2_3.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_2_3.geometry}
          material={nodes.Normal002_2_3.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.pod001_high001_2_3.geometry}
          material={nodes.pod001_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_2_3.geometry}
          material={nodes.pod002_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_2_3.geometry}
          material={nodes.pod003_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_2_3.geometry}
          material={nodes.pod004_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_2_3.geometry}
          material={nodes.pod005_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_2_3.geometry}
          material={nodes.pod006_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_2_3.geometry}
          material={nodes.pod007_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_2_3.geometry}
          material={nodes.pod008_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_2_3.geometry}
          material={nodes.pod009_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_2_3.geometry}
          material={nodes.pod010_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_2_3.geometry}
          material={nodes.pod011_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_2_3.geometry}
          material={nodes.pod012_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_2_3.geometry}
          material={nodes.pod013_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_2_3.geometry}
          material={nodes.pod014_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_2_3.geometry}
          material={nodes.pod015_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_2_3.geometry}
          material={nodes.pod016_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_2_3.geometry}
          material={nodes.pod017_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_2_3.geometry}
          material={nodes.pod018_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_2_3.geometry}
          material={nodes.pod019_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_2_3.geometry}
          material={nodes.pod020_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_2_3.geometry}
          material={nodes.pod021_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_2_3.geometry}
          material={nodes.pod022_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_2_3.geometry}
          material={nodes.pod023_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_2_3.geometry}
          material={nodes.pod024_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_2_3.geometry}
          material={nodes.pod025_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_2_3.geometry}
          material={nodes.pod026_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_2_3.geometry}
          material={nodes.pod027_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_2_3.geometry}
          material={nodes.pod028_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_2_3.geometry}
          material={nodes.pod029_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_2_3.geometry}
          material={nodes.pod030_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_2_3.geometry}
          material={nodes.pod031_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_2_3.geometry}
          material={nodes.pod032_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_2_3.geometry}
          material={nodes.pod033_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_2_3.geometry}
          material={nodes.pod034_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_2_3.geometry}
          material={nodes.pod035_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_2_3.geometry}
          material={nodes.pod036_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_2_3.geometry}
          material={nodes.pod037_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_2_3.geometry}
          material={nodes.pod038_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_2_3.geometry}
          material={nodes.pod039_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_2_3.geometry}
          material={nodes.pod040_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_2_3.geometry}
          material={nodes.pod041_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_2_3.geometry}
          material={nodes.pod042_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_2_3.geometry}
          material={nodes.pod043_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_2_3.geometry}
          material={nodes.pod044_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_2_3.geometry}
          material={nodes.pod045_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_2_3.geometry}
          material={nodes.pod046_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_2_3.geometry}
          material={nodes.pod047_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_2_3.geometry}
          material={nodes.pod_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.rgtdwn_2_3.geometry}
          material={nodes.rgtdwn_2_3.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0.000001, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_2_3.geometry}
          material={nodes.rgtup_2_3.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Sphere001_2_3.geometry}
          material={nodes.Sphere001_2_3.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_2_3.geometry}
          material={nodes.Sphere002_2_3.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_2_3.geometry}
          material={nodes.Sphere003_2_3.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_2_3.geometry}
          material={nodes.Sphere004_2_3.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_2_3.geometry}
          material={nodes.wire_1_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_2_3.geometry}
          material={nodes.wire_2_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_2_3.geometry}
          material={nodes.wire_3_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_2_3.geometry}
          material={nodes.wire_4_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_2_3.geometry}
          material={nodes.wire_5_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_2_3.geometry}
          material={nodes.wire_6_high001_2_3.material}
          position={[0.000122, 0, -0.013459]}
        />
      </group>
      <group position={[-20.345844, 6.240774, 8.978896]}>
        <mesh
          geometry={nodes.floor_2_high001_5_1.geometry}
          material={nodes.floor_2_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_5_1.geometry}
          material={nodes.floor_4_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_5_1.geometry}
          material={nodes.floor_5_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_2001_5_1.geometry}
          material={nodes.fog_2001_5_1.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.big_wire001_high001_5_1.geometry}
          material={nodes.big_wire001_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_5_1.geometry}
          material={nodes.big_wire002_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_5_1.geometry}
          material={nodes.big_wire003_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_5_1.geometry}
          material={nodes.big_wire005_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_5_1.geometry}
          material={nodes.big_wire006_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_5_1.geometry}
          material={nodes.big_wire007_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_5_1.geometry}
          material={nodes.big_wire_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_5_1.geometry}
          material={nodes.Cube001_5_1.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_5_1.geometry}
          material={nodes.Cube002_5_1.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_5_1.geometry}
          material={nodes.Cube003_5_1.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_5_1.geometry}
          material={nodes.Cube004_5_1.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_5_1.geometry}
          material={nodes.Cube005_5_1.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_5_1.geometry}
          material={nodes.Cube006_5_1.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_5_1.geometry}
          material={nodes.Cube007_5_1.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_5_1.geometry}
          material={nodes.Cube008_5_1.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_5_1.geometry}
          material={nodes.Cube009_5_1.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.Cylinder001_5_1.geometry}
          material={nodes.Cylinder001_5_1.material}
          position={[0.002212, 0.115416, -0.115012]}
          rotation={[-1.462025, 0.153089, -0.042648]}
          scale={[0.084366, 0.047614, 0.085482]}
        />
        <mesh
          geometry={nodes.Cylinder002_5_1.geometry}
          material={nodes.Cylinder002_5_1.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_5_1.geometry}
          material={nodes.Cylinder003_5_1.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_5_1.geometry}
          material={nodes.Cylinder004_5_1.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.defaultMaterial001_5_1.geometry}
          material={nodes.defaultMaterial001_5_1.material}
          position={[-0.006779, 0.159544, 0.247359]}
          rotation={[-1.668043, -0.268541, -0.017551]}
          scale={0.592855}
        />
        <mesh
          geometry={nodes.floor_1_high001_5_1.geometry}
          material={nodes.floor_1_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_5_1.geometry}
          material={nodes.floor_6_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_5_1.geometry}
          material={nodes.floor_metalpiece_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_5_1.geometry}
          material={nodes.fog_1002_5_1.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_5_1.geometry} material={nodes.glass_1_high_5_1.material} />
        <mesh geometry={nodes.glass_2_high_5_1.geometry} material={nodes.glass_2_high_5_1.material} />
        <mesh geometry={nodes.glass_3_high_5_1.geometry} material={nodes.glass_3_high_5_1.material} />
        <mesh geometry={nodes.led_1_high_5_1.geometry} material={nodes.led_1_high_5_1.material} />
        <mesh geometry={nodes.led_2_high_5_1.geometry} material={nodes.led_2_high_5_1.material} />
        <mesh geometry={nodes.led_4_high_5_1.geometry} material={nodes.led_4_high_5_1.material} />
        <mesh
          geometry={nodes.lftdwn_5_1.geometry}
          material={nodes.lftdwn_5_1.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000006, -1.396271]}
          scale={[1.000004, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_5_1.geometry}
          material={nodes.lftup_5_1.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Mesh_3001_5_1.geometry}
          material={nodes.Mesh_3001_5_1.material}
          position={[0.00748, 0.124292, 0.132539]}
          rotation={[2.940696, 0.011766, -0.157033]}
          scale={[0.012504, 0.012504, 0.009253]}
        />
        <mesh
          geometry={nodes.misc_1_high001_5_1.geometry}
          material={nodes.misc_1_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_5_1.geometry}
          material={nodes.misc_2_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Normal001_5_1.geometry}
          material={nodes.Normal001_5_1.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_5_1.geometry}
          material={nodes.Normal002_5_1.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.pod001_high001_5_1.geometry}
          material={nodes.pod001_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_5_1.geometry}
          material={nodes.pod002_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_5_1.geometry}
          material={nodes.pod003_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_5_1.geometry}
          material={nodes.pod004_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_5_1.geometry}
          material={nodes.pod005_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_5_1.geometry}
          material={nodes.pod006_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_5_1.geometry}
          material={nodes.pod007_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_5_1.geometry}
          material={nodes.pod008_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_5_1.geometry}
          material={nodes.pod009_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_5_1.geometry}
          material={nodes.pod010_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_5_1.geometry}
          material={nodes.pod011_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_5_1.geometry}
          material={nodes.pod012_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_5_1.geometry}
          material={nodes.pod013_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_5_1.geometry}
          material={nodes.pod014_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_5_1.geometry}
          material={nodes.pod015_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_5_1.geometry}
          material={nodes.pod016_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_5_1.geometry}
          material={nodes.pod017_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_5_1.geometry}
          material={nodes.pod018_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_5_1.geometry}
          material={nodes.pod019_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_5_1.geometry}
          material={nodes.pod020_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_5_1.geometry}
          material={nodes.pod021_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_5_1.geometry}
          material={nodes.pod022_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_5_1.geometry}
          material={nodes.pod023_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_5_1.geometry}
          material={nodes.pod024_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_5_1.geometry}
          material={nodes.pod025_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_5_1.geometry}
          material={nodes.pod026_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_5_1.geometry}
          material={nodes.pod027_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_5_1.geometry}
          material={nodes.pod028_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_5_1.geometry}
          material={nodes.pod029_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_5_1.geometry}
          material={nodes.pod030_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_5_1.geometry}
          material={nodes.pod031_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_5_1.geometry}
          material={nodes.pod032_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_5_1.geometry}
          material={nodes.pod033_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_5_1.geometry}
          material={nodes.pod034_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_5_1.geometry}
          material={nodes.pod035_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_5_1.geometry}
          material={nodes.pod036_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_5_1.geometry}
          material={nodes.pod037_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_5_1.geometry}
          material={nodes.pod038_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_5_1.geometry}
          material={nodes.pod039_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_5_1.geometry}
          material={nodes.pod040_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_5_1.geometry}
          material={nodes.pod041_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_5_1.geometry}
          material={nodes.pod042_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_5_1.geometry}
          material={nodes.pod043_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_5_1.geometry}
          material={nodes.pod044_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_5_1.geometry}
          material={nodes.pod045_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_5_1.geometry}
          material={nodes.pod046_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_5_1.geometry}
          material={nodes.pod047_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_5_1.geometry}
          material={nodes.pod_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.rgtdwn_5_1.geometry}
          material={nodes.rgtdwn_5_1.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0.000001, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_5_1.geometry}
          material={nodes.rgtup_5_1.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Skin2001_5_1.geometry}
          material={nodes.Skin2001_5_1.material}
          position={[0.007175, 0.135102, -0.283643]}
          rotation={[3.048996, 0.016922, -0.048459]}
          scale={[1.583777, 1.583777, 1.583777]}
        />
        <mesh
          geometry={nodes.Sphere001_5_1.geometry}
          material={nodes.Sphere001_5_1.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_5_1.geometry}
          material={nodes.Sphere002_5_1.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_5_1.geometry}
          material={nodes.Sphere003_5_1.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_5_1.geometry}
          material={nodes.Sphere004_5_1.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere005_5_1.geometry}
          material={nodes.Sphere005_5_1.material}
          position={[-0.053936, 0.211969, -0.381501]}
          rotation={[0.765665, -0.313231, 2.216415]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.Sphere006_5_1.geometry}
          material={nodes.Sphere006_5_1.material}
          position={[0.060085, 0.214964, -0.3818]}
          rotation={[0.675591, -0.440335, 1.907348]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.wire_1_high001_5_1.geometry}
          material={nodes.wire_1_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_5_1.geometry}
          material={nodes.wire_2_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_5_1.geometry}
          material={nodes.wire_3_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_5_1.geometry}
          material={nodes.wire_4_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_5_1.geometry}
          material={nodes.wire_5_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_5_1.geometry}
          material={nodes.wire_6_high001_5_1.material}
          position={[0.000122, 0, -0.013459]}
        />
      </group>
      <group position={[-20.393833, 6.240774, -17.698893]}>
        <mesh
          geometry={nodes.floor_2_high001_5_2.geometry}
          material={nodes.floor_2_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_5_2.geometry}
          material={nodes.floor_4_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_5_2.geometry}
          material={nodes.floor_5_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_2001_5_2.geometry}
          material={nodes.fog_2001_5_2.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.big_wire001_high001_5_2.geometry}
          material={nodes.big_wire001_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_5_2.geometry}
          material={nodes.big_wire002_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_5_2.geometry}
          material={nodes.big_wire003_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_5_2.geometry}
          material={nodes.big_wire005_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_5_2.geometry}
          material={nodes.big_wire006_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_5_2.geometry}
          material={nodes.big_wire007_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_5_2.geometry}
          material={nodes.big_wire_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_5_2.geometry}
          material={nodes.Cube001_5_2.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_5_2.geometry}
          material={nodes.Cube002_5_2.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_5_2.geometry}
          material={nodes.Cube003_5_2.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_5_2.geometry}
          material={nodes.Cube004_5_2.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_5_2.geometry}
          material={nodes.Cube005_5_2.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_5_2.geometry}
          material={nodes.Cube006_5_2.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_5_2.geometry}
          material={nodes.Cube007_5_2.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_5_2.geometry}
          material={nodes.Cube008_5_2.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_5_2.geometry}
          material={nodes.Cube009_5_2.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.Cylinder002_5_2.geometry}
          material={nodes.Cylinder002_5_2.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_5_2.geometry}
          material={nodes.Cylinder003_5_2.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_5_2.geometry}
          material={nodes.Cylinder004_5_2.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.floor_1_high001_5_2.geometry}
          material={nodes.floor_1_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_5_2.geometry}
          material={nodes.floor_6_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_5_2.geometry}
          material={nodes.floor_metalpiece_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_5_2.geometry}
          material={nodes.fog_1002_5_2.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_5_2.geometry} material={nodes.glass_1_high_5_2.material} />
        <mesh geometry={nodes.glass_2_high_5_2.geometry} material={nodes.glass_2_high_5_2.material} />
        <mesh
          geometry={nodes.glass_3_high_5_2.geometry}
          material={nodes.glass_3_high_5_2.material}
          position={[0.017876, 0, 0]}
        />
        <mesh geometry={nodes.led_1_high_5_2.geometry} material={nodes.led_1_high_5_2.material} />
        <mesh geometry={nodes.led_2_high_5_2.geometry} material={nodes.led_2_high_5_2.material} />
        <mesh geometry={nodes.led_4_high_5_2.geometry} material={nodes.led_4_high_5_2.material} />
        <mesh
          geometry={nodes.lftdwn_5_2.geometry}
          material={nodes.lftdwn_5_2.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000006, -1.396271]}
          scale={[1.000004, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_5_2.geometry}
          material={nodes.lftup_5_2.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.misc_1_high001_5_2.geometry}
          material={nodes.misc_1_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_5_2.geometry}
          material={nodes.misc_2_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Normal001_5_2.geometry}
          material={nodes.Normal001_5_2.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_5_2.geometry}
          material={nodes.Normal002_5_2.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.pod001_high001_5_2.geometry}
          material={nodes.pod001_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_5_2.geometry}
          material={nodes.pod002_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_5_2.geometry}
          material={nodes.pod003_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_5_2.geometry}
          material={nodes.pod004_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_5_2.geometry}
          material={nodes.pod005_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_5_2.geometry}
          material={nodes.pod006_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_5_2.geometry}
          material={nodes.pod007_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_5_2.geometry}
          material={nodes.pod008_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_5_2.geometry}
          material={nodes.pod009_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_5_2.geometry}
          material={nodes.pod010_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_5_2.geometry}
          material={nodes.pod011_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_5_2.geometry}
          material={nodes.pod012_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_5_2.geometry}
          material={nodes.pod013_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_5_2.geometry}
          material={nodes.pod014_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_5_2.geometry}
          material={nodes.pod015_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_5_2.geometry}
          material={nodes.pod016_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_5_2.geometry}
          material={nodes.pod017_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_5_2.geometry}
          material={nodes.pod018_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_5_2.geometry}
          material={nodes.pod019_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_5_2.geometry}
          material={nodes.pod020_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_5_2.geometry}
          material={nodes.pod021_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_5_2.geometry}
          material={nodes.pod022_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_5_2.geometry}
          material={nodes.pod023_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_5_2.geometry}
          material={nodes.pod024_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_5_2.geometry}
          material={nodes.pod025_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_5_2.geometry}
          material={nodes.pod026_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_5_2.geometry}
          material={nodes.pod027_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_5_2.geometry}
          material={nodes.pod028_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_5_2.geometry}
          material={nodes.pod029_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_5_2.geometry}
          material={nodes.pod030_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_5_2.geometry}
          material={nodes.pod031_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_5_2.geometry}
          material={nodes.pod032_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_5_2.geometry}
          material={nodes.pod033_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_5_2.geometry}
          material={nodes.pod034_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_5_2.geometry}
          material={nodes.pod035_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_5_2.geometry}
          material={nodes.pod036_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_5_2.geometry}
          material={nodes.pod037_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_5_2.geometry}
          material={nodes.pod038_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_5_2.geometry}
          material={nodes.pod039_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_5_2.geometry}
          material={nodes.pod040_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_5_2.geometry}
          material={nodes.pod041_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_5_2.geometry}
          material={nodes.pod042_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_5_2.geometry}
          material={nodes.pod043_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_5_2.geometry}
          material={nodes.pod044_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_5_2.geometry}
          material={nodes.pod045_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_5_2.geometry}
          material={nodes.pod046_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_5_2.geometry}
          material={nodes.pod047_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_5_2.geometry}
          material={nodes.pod_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.rgtdwn_5_2.geometry}
          material={nodes.rgtdwn_5_2.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0.000001, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_5_2.geometry}
          material={nodes.rgtup_5_2.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Sphere001_5_2.geometry}
          material={nodes.Sphere001_5_2.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_5_2.geometry}
          material={nodes.Sphere002_5_2.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_5_2.geometry}
          material={nodes.Sphere003_5_2.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_5_2.geometry}
          material={nodes.Sphere004_5_2.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_5_2.geometry}
          material={nodes.wire_1_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_5_2.geometry}
          material={nodes.wire_2_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_5_2.geometry}
          material={nodes.wire_3_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_5_2.geometry}
          material={nodes.wire_4_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_5_2.geometry}
          material={nodes.wire_5_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_5_2.geometry}
          material={nodes.wire_6_high001_5_2.material}
          position={[0.000122, 0, -0.013459]}
        />
      </group>
      <group position={[-9.518654, 6.240774, -8.623399]}>
        <mesh
          geometry={nodes.big_wire001_high001_6.geometry}
          material={nodes.big_wire001_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_6.geometry}
          material={nodes.big_wire002_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_6.geometry}
          material={nodes.big_wire003_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_6.geometry}
          material={nodes.big_wire005_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_6.geometry}
          material={nodes.big_wire006_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_6.geometry}
          material={nodes.big_wire007_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_6.geometry}
          material={nodes.big_wire_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_6.geometry}
          material={nodes.Cube001_6.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_6.geometry}
          material={nodes.Cube002_6.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_6.geometry}
          material={nodes.Cube003_6.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_6.geometry}
          material={nodes.Cube004_6.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_6.geometry}
          material={nodes.Cube005_6.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_6.geometry}
          material={nodes.Cube006_6.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_6.geometry}
          material={nodes.Cube007_6.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_6.geometry}
          material={nodes.Cube008_6.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_6.geometry}
          material={nodes.Cube009_6.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.floor_1_high001_6.geometry}
          material={nodes.floor_1_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_2_high001_6.geometry}
          material={nodes.floor_2_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_6.geometry}
          material={nodes.floor_4_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_6.geometry}
          material={nodes.floor_5_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_6.geometry}
          material={nodes.floor_6_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_6.geometry}
          material={nodes.floor_metalpiece_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_6.geometry}
          material={nodes.fog_1002_6.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.fog_2001_6.geometry}
          material={nodes.fog_2001_6.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_6.geometry} material={nodes.glass_1_high_6.material} />
        <mesh geometry={nodes.glass_2_high_6.geometry} material={nodes.glass_2_high_6.material} />
        <mesh geometry={nodes.glass_3_high_6.geometry} material={nodes.glass_3_high_6.material} />
        <mesh geometry={nodes.led_1_high_6.geometry} material={nodes.led_1_high_6.material} />
        <mesh geometry={nodes.led_2_high_6.geometry} material={nodes.led_2_high_6.material} />
        <mesh geometry={nodes.led_4_high_6.geometry} material={nodes.led_4_high_6.material} />
        <mesh
          geometry={nodes.misc_1_high001_6.geometry}
          material={nodes.misc_1_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_6.geometry}
          material={nodes.misc_2_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod001_high001_6.geometry}
          material={nodes.pod001_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_6.geometry}
          material={nodes.pod002_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_6.geometry}
          material={nodes.pod003_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_6.geometry}
          material={nodes.pod004_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_6.geometry}
          material={nodes.pod005_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_6.geometry}
          material={nodes.pod006_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_6.geometry}
          material={nodes.pod007_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_6.geometry}
          material={nodes.pod008_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_6.geometry}
          material={nodes.pod009_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_6.geometry}
          material={nodes.pod010_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_6.geometry}
          material={nodes.pod011_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_6.geometry}
          material={nodes.pod012_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_6.geometry}
          material={nodes.pod013_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_6.geometry}
          material={nodes.pod014_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_6.geometry}
          material={nodes.pod015_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_6.geometry}
          material={nodes.pod016_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_6.geometry}
          material={nodes.pod017_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_6.geometry}
          material={nodes.pod018_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_6.geometry}
          material={nodes.pod019_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_6.geometry}
          material={nodes.pod020_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_6.geometry}
          material={nodes.pod021_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_6.geometry}
          material={nodes.pod022_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_6.geometry}
          material={nodes.pod023_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_6.geometry}
          material={nodes.pod024_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_6.geometry}
          material={nodes.pod025_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_6.geometry}
          material={nodes.pod026_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_6.geometry}
          material={nodes.pod027_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_6.geometry}
          material={nodes.pod028_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_6.geometry}
          material={nodes.pod029_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_6.geometry}
          material={nodes.pod030_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_6.geometry}
          material={nodes.pod031_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_6.geometry}
          material={nodes.pod032_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_6.geometry}
          material={nodes.pod033_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_6.geometry}
          material={nodes.pod034_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_6.geometry}
          material={nodes.pod035_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_6.geometry}
          material={nodes.pod036_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_6.geometry}
          material={nodes.pod037_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_6.geometry}
          material={nodes.pod038_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_6.geometry}
          material={nodes.pod039_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_6.geometry}
          material={nodes.pod040_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_6.geometry}
          material={nodes.pod041_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_6.geometry}
          material={nodes.pod042_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_6.geometry}
          material={nodes.pod043_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_6.geometry}
          material={nodes.pod044_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_6.geometry}
          material={nodes.pod045_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_6.geometry}
          material={nodes.pod046_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_6.geometry}
          material={nodes.pod047_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_6.geometry}
          material={nodes.pod_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Sphere001_6.geometry}
          material={nodes.Sphere001_6.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_6.geometry}
          material={nodes.Sphere002_6.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_6.geometry}
          material={nodes.Sphere003_6.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_6.geometry}
          material={nodes.Sphere004_6.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_6.geometry}
          material={nodes.wire_1_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_6.geometry}
          material={nodes.wire_2_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_6.geometry}
          material={nodes.wire_3_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_6.geometry}
          material={nodes.wire_4_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_6.geometry}
          material={nodes.wire_5_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_6.geometry}
          material={nodes.wire_6_high001_6.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cylinder001_6.geometry}
          material={nodes.Cylinder001_6.material}
          position={[0.002212, 0.115416, -0.115012]}
          rotation={[-1.462025, 0.153089, -0.042648]}
          scale={[0.084366, 0.047614, 0.085482]}
        />
        <mesh
          geometry={nodes.Cylinder002_6.geometry}
          material={nodes.Cylinder002_6.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_6.geometry}
          material={nodes.Cylinder003_6.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_6.geometry}
          material={nodes.Cylinder004_6.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.defaultMaterial001_6.geometry}
          material={nodes.defaultMaterial001_6.material}
          position={[-0.006779, 0.159544, 0.247359]}
          rotation={[-1.668043, -0.268541, -0.017551]}
          scale={0.592855}
        />
        <mesh
          geometry={nodes.lftdwn_6.geometry}
          material={nodes.lftdwn_6.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000005, -1.39627]}
          scale={[1.000003, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_6.geometry}
          material={nodes.lftup_6.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Mesh_3001_6.geometry}
          material={nodes.Mesh_3001_6.material}
          position={[0.00748, 0.124292, 0.132539]}
          rotation={[2.940696, 0.011766, -0.157033]}
          scale={[0.012504, 0.012504, 0.009253]}
        />
        <mesh
          geometry={nodes.Normal001_6.geometry}
          material={nodes.Normal001_6.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_6.geometry}
          material={nodes.Normal002_6.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.rgtdwn_6.geometry}
          material={nodes.rgtdwn_6.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_6.geometry}
          material={nodes.rgtup_6.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Skin2001_6.geometry}
          material={nodes.Skin2001_6.material}
          position={[0.007175, 0.135102, -0.283643]}
          rotation={[3.048996, 0.016922, -0.048459]}
          scale={[1.583777, 1.583777, 1.583777]}
        />
        <mesh
          geometry={nodes.Sphere005_6.geometry}
          material={nodes.Sphere005_6.material}
          position={[-0.053936, 0.211969, -0.381501]}
          rotation={[0.765665, -0.313231, 2.216415]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.Sphere006_6.geometry}
          material={nodes.Sphere006_6.material}
          position={[0.060085, 0.214964, -0.3818]}
          rotation={[0.675591, -0.440335, 1.907348]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
      </group>
      <group position={[-9.481591, 6.240774, 8.978896]}>
        <mesh
          geometry={nodes.big_wire001_high001_8.geometry}
          material={nodes.big_wire001_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_8.geometry}
          material={nodes.big_wire002_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_8.geometry}
          material={nodes.big_wire003_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_8.geometry}
          material={nodes.big_wire005_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_8.geometry}
          material={nodes.big_wire006_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_8.geometry}
          material={nodes.big_wire007_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_8.geometry}
          material={nodes.big_wire_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_8.geometry}
          material={nodes.Cube001_8.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_8.geometry}
          material={nodes.Cube002_8.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_8.geometry}
          material={nodes.Cube003_8.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_8.geometry}
          material={nodes.Cube004_8.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_8.geometry}
          material={nodes.Cube005_8.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_8.geometry}
          material={nodes.Cube006_8.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_8.geometry}
          material={nodes.Cube007_8.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_8.geometry}
          material={nodes.Cube008_8.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_8.geometry}
          material={nodes.Cube009_8.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.floor_1_high001_8.geometry}
          material={nodes.floor_1_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_2_high001_8.geometry}
          material={nodes.floor_2_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_8.geometry}
          material={nodes.floor_4_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_8.geometry}
          material={nodes.floor_5_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_8.geometry}
          material={nodes.floor_6_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_8.geometry}
          material={nodes.floor_metalpiece_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_8.geometry}
          material={nodes.fog_1002_8.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.fog_2001_8.geometry}
          material={nodes.fog_2001_8.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_8.geometry} material={nodes.glass_1_high_8.material} />
        <mesh geometry={nodes.glass_2_high_8.geometry} material={nodes.glass_2_high_8.material} />
        <mesh geometry={nodes.glass_3_high_8.geometry} material={nodes.glass_3_high_8.material} />
        <mesh geometry={nodes.led_1_high_8.geometry} material={nodes.led_1_high_8.material} />
        <mesh geometry={nodes.led_2_high_8.geometry} material={nodes.led_2_high_8.material} />
        <mesh geometry={nodes.led_4_high_8.geometry} material={nodes.led_4_high_8.material} />
        <mesh
          geometry={nodes.misc_1_high001_8.geometry}
          material={nodes.misc_1_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_8.geometry}
          material={nodes.misc_2_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod001_high001_8.geometry}
          material={nodes.pod001_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_8.geometry}
          material={nodes.pod002_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_8.geometry}
          material={nodes.pod003_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_8.geometry}
          material={nodes.pod004_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_8.geometry}
          material={nodes.pod005_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_8.geometry}
          material={nodes.pod006_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_8.geometry}
          material={nodes.pod007_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_8.geometry}
          material={nodes.pod008_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_8.geometry}
          material={nodes.pod009_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_8.geometry}
          material={nodes.pod010_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_8.geometry}
          material={nodes.pod011_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_8.geometry}
          material={nodes.pod012_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_8.geometry}
          material={nodes.pod013_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_8.geometry}
          material={nodes.pod014_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_8.geometry}
          material={nodes.pod015_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_8.geometry}
          material={nodes.pod016_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_8.geometry}
          material={nodes.pod017_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_8.geometry}
          material={nodes.pod018_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_8.geometry}
          material={nodes.pod019_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_8.geometry}
          material={nodes.pod020_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_8.geometry}
          material={nodes.pod021_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_8.geometry}
          material={nodes.pod022_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_8.geometry}
          material={nodes.pod023_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_8.geometry}
          material={nodes.pod024_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_8.geometry}
          material={nodes.pod025_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_8.geometry}
          material={nodes.pod026_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_8.geometry}
          material={nodes.pod027_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_8.geometry}
          material={nodes.pod028_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_8.geometry}
          material={nodes.pod029_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_8.geometry}
          material={nodes.pod030_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_8.geometry}
          material={nodes.pod031_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_8.geometry}
          material={nodes.pod032_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_8.geometry}
          material={nodes.pod033_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_8.geometry}
          material={nodes.pod034_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_8.geometry}
          material={nodes.pod035_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_8.geometry}
          material={nodes.pod036_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_8.geometry}
          material={nodes.pod037_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_8.geometry}
          material={nodes.pod038_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_8.geometry}
          material={nodes.pod039_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_8.geometry}
          material={nodes.pod040_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_8.geometry}
          material={nodes.pod041_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_8.geometry}
          material={nodes.pod042_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_8.geometry}
          material={nodes.pod043_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_8.geometry}
          material={nodes.pod044_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_8.geometry}
          material={nodes.pod045_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_8.geometry}
          material={nodes.pod046_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_8.geometry}
          material={nodes.pod047_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_8.geometry}
          material={nodes.pod_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Sphere001_8.geometry}
          material={nodes.Sphere001_8.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_8.geometry}
          material={nodes.Sphere002_8.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_8.geometry}
          material={nodes.Sphere003_8.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_8.geometry}
          material={nodes.Sphere004_8.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_8.geometry}
          material={nodes.wire_1_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_8.geometry}
          material={nodes.wire_2_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_8.geometry}
          material={nodes.wire_3_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_8.geometry}
          material={nodes.wire_4_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_8.geometry}
          material={nodes.wire_5_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_8.geometry}
          material={nodes.wire_6_high001_8.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cylinder001_8.geometry}
          material={nodes.Cylinder001_8.material}
          position={[0.002212, 0.115416, -0.115012]}
          rotation={[-1.462025, 0.153089, -0.042648]}
          scale={[0.084366, 0.047614, 0.085482]}
        />
        <mesh
          geometry={nodes.Cylinder002_8.geometry}
          material={nodes.Cylinder002_8.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_8.geometry}
          material={nodes.Cylinder003_8.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_8.geometry}
          material={nodes.Cylinder004_8.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.defaultMaterial001_8.geometry}
          material={nodes.defaultMaterial001_8.material}
          position={[-0.006779, 0.159544, 0.247359]}
          rotation={[-1.668043, -0.268541, -0.017551]}
          scale={0.592855}
        />
        <mesh
          geometry={nodes.lftdwn_8.geometry}
          material={nodes.lftdwn_8.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000005, -1.39627]}
          scale={[1.000003, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_8.geometry}
          material={nodes.lftup_8.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Mesh_3001_8.geometry}
          material={nodes.Mesh_3001_8.material}
          position={[0.00748, 0.124292, 0.132539]}
          rotation={[2.940696, 0.011766, -0.157033]}
          scale={[0.012504, 0.012504, 0.009253]}
        />
        <mesh
          geometry={nodes.Normal001_8.geometry}
          material={nodes.Normal001_8.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_8.geometry}
          material={nodes.Normal002_8.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.rgtdwn_8.geometry}
          material={nodes.rgtdwn_8.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_8.geometry}
          material={nodes.rgtup_8.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Skin2001_8.geometry}
          material={nodes.Skin2001_8.material}
          position={[0.007175, 0.135102, -0.283643]}
          rotation={[3.048996, 0.016922, -0.048459]}
          scale={[1.583777, 1.583777, 1.583777]}
        />
        <mesh
          geometry={nodes.Sphere005_8.geometry}
          material={nodes.Sphere005_8.material}
          position={[-0.053936, 0.211969, -0.381501]}
          rotation={[0.765665, -0.313231, 2.216415]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.Sphere006_8.geometry}
          material={nodes.Sphere006_8.material}
          position={[0.060085, 0.214964, -0.3818]}
          rotation={[0.675591, -0.440335, 1.907348]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
      </group>
      <group position={[-31.124641, 6.240774, 8.978896]}>
        <mesh
          geometry={nodes.floor_2_high001_8_1_2.geometry}
          material={nodes.floor_2_high001_8_1_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_8_1_2.geometry}
          material={nodes.floor_4_high001_8_1_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_8_1_2.geometry}
          material={nodes.floor_5_high001_8_1_2.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_2001_8_1_1.geometry}
          material={nodes.fog_2001_8_1_1.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.big_wire001_high001_8_1.geometry}
          material={nodes.big_wire001_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_8_1.geometry}
          material={nodes.big_wire002_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_8_1.geometry}
          material={nodes.big_wire003_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_8_1.geometry}
          material={nodes.big_wire005_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_8_1.geometry}
          material={nodes.big_wire006_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_8_1.geometry}
          material={nodes.big_wire007_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_8_1.geometry}
          material={nodes.big_wire_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_8_1.geometry}
          material={nodes.Cube001_8_1.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_8_1.geometry}
          material={nodes.Cube002_8_1.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_8_1.geometry}
          material={nodes.Cube003_8_1.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_8_1.geometry}
          material={nodes.Cube004_8_1.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_8_1.geometry}
          material={nodes.Cube005_8_1.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_8_1.geometry}
          material={nodes.Cube006_8_1.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_8_1.geometry}
          material={nodes.Cube007_8_1.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_8_1.geometry}
          material={nodes.Cube008_8_1.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_8_1.geometry}
          material={nodes.Cube009_8_1.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.Cylinder001_8_1.geometry}
          material={nodes.Cylinder001_8_1.material}
          position={[0.002212, 0.115416, -0.115012]}
          rotation={[-1.462025, 0.153089, -0.042648]}
          scale={[0.084366, 0.047614, 0.085482]}
        />
        <mesh
          geometry={nodes.Cylinder002_8_1.geometry}
          material={nodes.Cylinder002_8_1.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_8_1.geometry}
          material={nodes.Cylinder003_8_1.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_8_1.geometry}
          material={nodes.Cylinder004_8_1.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.floor_1_high001_8_1.geometry}
          material={nodes.floor_1_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_8_1.geometry}
          material={nodes.floor_6_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_8_1.geometry}
          material={nodes.floor_metalpiece_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_8_1.geometry}
          material={nodes.fog_1002_8_1.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_8_1.geometry} material={nodes.glass_1_high_8_1.material} />
        <mesh geometry={nodes.glass_2_high_8_1.geometry} material={nodes.glass_2_high_8_1.material} />
        <mesh geometry={nodes.led_1_high_8_1.geometry} material={nodes.led_1_high_8_1.material} />
        <mesh geometry={nodes.led_2_high_8_1.geometry} material={nodes.led_2_high_8_1.material} />
        <mesh geometry={nodes.led_4_high_8_1.geometry} material={nodes.led_4_high_8_1.material} />
        <mesh
          geometry={nodes.lftdwn_8_1.geometry}
          material={nodes.lftdwn_8_1.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000006, -1.396271]}
          scale={[1.000004, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_8_1.geometry}
          material={nodes.lftup_8_1.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.misc_1_high001_8_1.geometry}
          material={nodes.misc_1_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_8_1.geometry}
          material={nodes.misc_2_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Normal001_8_1.geometry}
          material={nodes.Normal001_8_1.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_8_1.geometry}
          material={nodes.Normal002_8_1.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.pod001_high001_8_1.geometry}
          material={nodes.pod001_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_8_1.geometry}
          material={nodes.pod002_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_8_1.geometry}
          material={nodes.pod005_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_8_1.geometry}
          material={nodes.pod006_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_8_1.geometry}
          material={nodes.pod007_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_8_1.geometry}
          material={nodes.pod008_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_8_1.geometry}
          material={nodes.pod011_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_8_1.geometry}
          material={nodes.pod012_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_8_1.geometry}
          material={nodes.pod014_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_8_1.geometry}
          material={nodes.pod015_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_8_1.geometry}
          material={nodes.pod016_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_8_1.geometry}
          material={nodes.pod017_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_8_1.geometry}
          material={nodes.pod018_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_8_1.geometry}
          material={nodes.pod019_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_8_1.geometry}
          material={nodes.pod020_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_8_1.geometry}
          material={nodes.pod021_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_8_1.geometry}
          material={nodes.pod022_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_8_1.geometry}
          material={nodes.pod023_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_8_1.geometry}
          material={nodes.pod024_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_8_1.geometry}
          material={nodes.pod025_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_8_1.geometry}
          material={nodes.pod026_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_8_1.geometry}
          material={nodes.pod027_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_8_1.geometry}
          material={nodes.pod028_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_8_1.geometry}
          material={nodes.pod029_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_8_1.geometry}
          material={nodes.pod030_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_8_1.geometry}
          material={nodes.pod031_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_8_1.geometry}
          material={nodes.pod032_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_8_1.geometry}
          material={nodes.pod033_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_8_1.geometry}
          material={nodes.pod034_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_8_1.geometry}
          material={nodes.pod035_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_8_1.geometry}
          material={nodes.pod036_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_8_1.geometry}
          material={nodes.pod037_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_8_1.geometry}
          material={nodes.pod039_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_8_1.geometry}
          material={nodes.pod040_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_8_1.geometry}
          material={nodes.pod041_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_8_1.geometry}
          material={nodes.pod043_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_8_1.geometry}
          material={nodes.pod044_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_8_1.geometry}
          material={nodes.pod045_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_8_1.geometry}
          material={nodes.pod046_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_8_1.geometry}
          material={nodes.pod_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.rgtdwn_8_1.geometry}
          material={nodes.rgtdwn_8_1.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0.000001, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_8_1.geometry}
          material={nodes.rgtup_8_1.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Sphere001_8_1.geometry}
          material={nodes.Sphere001_8_1.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_8_1.geometry}
          material={nodes.Sphere002_8_1.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_8_1.geometry}
          material={nodes.Sphere003_8_1.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_8_1.geometry}
          material={nodes.Sphere004_8_1.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_8_1.geometry}
          material={nodes.wire_1_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_8_1.geometry}
          material={nodes.wire_2_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_8_1.geometry}
          material={nodes.wire_4_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_8_1.geometry}
          material={nodes.wire_5_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_8_1.geometry}
          material={nodes.wire_6_high001_8_1.material}
          position={[0.000122, 0, -0.013459]}
        />
      </group>
      <group position={[-9.481591, 6.240774, -17.760576]}>
        <mesh
          geometry={nodes.floor_2_high001_8_3.geometry}
          material={nodes.floor_2_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_8_3.geometry}
          material={nodes.floor_4_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_8_3.geometry}
          material={nodes.floor_5_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_2001_8_3.geometry}
          material={nodes.fog_2001_8_3.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.big_wire001_high001_8_3.geometry}
          material={nodes.big_wire001_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_8_3.geometry}
          material={nodes.big_wire002_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_8_3.geometry}
          material={nodes.big_wire003_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_8_3.geometry}
          material={nodes.big_wire005_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_8_3.geometry}
          material={nodes.big_wire006_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_8_3.geometry}
          material={nodes.big_wire007_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_8_3.geometry}
          material={nodes.big_wire_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_8_3.geometry}
          material={nodes.Cube001_8_3.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_8_3.geometry}
          material={nodes.Cube002_8_3.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_8_3.geometry}
          material={nodes.Cube003_8_3.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_8_3.geometry}
          material={nodes.Cube004_8_3.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_8_3.geometry}
          material={nodes.Cube005_8_3.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_8_3.geometry}
          material={nodes.Cube006_8_3.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_8_3.geometry}
          material={nodes.Cube007_8_3.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_8_3.geometry}
          material={nodes.Cube008_8_3.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_8_3.geometry}
          material={nodes.Cube009_8_3.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.Cylinder001_8_3.geometry}
          material={nodes.Cylinder001_8_3.material}
          position={[0.002212, 0.115416, -0.115012]}
          rotation={[-1.462025, 0.153089, -0.042648]}
          scale={[0.084366, 0.047614, 0.085482]}
        />
        <mesh
          geometry={nodes.Cylinder002_8_3.geometry}
          material={nodes.Cylinder002_8_3.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_8_3.geometry}
          material={nodes.Cylinder003_8_3.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_8_3.geometry}
          material={nodes.Cylinder004_8_3.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.defaultMaterial001_8_3.geometry}
          material={nodes.defaultMaterial001_8_3.material}
          position={[-0.006779, 0.159544, 0.247359]}
          rotation={[-1.668043, -0.268541, -0.017551]}
          scale={0.592855}
        />
        <mesh
          geometry={nodes.floor_1_high001_8_3.geometry}
          material={nodes.floor_1_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_8_3.geometry}
          material={nodes.floor_6_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_8_3.geometry}
          material={nodes.floor_metalpiece_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_8_3.geometry}
          material={nodes.fog_1002_8_3.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_8_3.geometry} material={nodes.glass_1_high_8_3.material} />
        <mesh geometry={nodes.glass_2_high_8_3.geometry} material={nodes.glass_2_high_8_3.material} />
        <mesh geometry={nodes.glass_3_high_8_3.geometry} material={nodes.glass_3_high_8_3.material} />
        <mesh geometry={nodes.led_1_high_8_3.geometry} material={nodes.led_1_high_8_3.material} />
        <mesh geometry={nodes.led_2_high_8_3.geometry} material={nodes.led_2_high_8_3.material} />
        <mesh geometry={nodes.led_4_high_8_3.geometry} material={nodes.led_4_high_8_3.material} />
        <mesh
          geometry={nodes.lftdwn_8_3.geometry}
          material={nodes.lftdwn_8_3.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000006, -1.396271]}
          scale={[1.000004, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_8_3.geometry}
          material={nodes.lftup_8_3.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Mesh_3001_8_3.geometry}
          material={nodes.Mesh_3001_8_3.material}
          position={[0.00748, 0.124292, 0.132539]}
          rotation={[2.940696, 0.011766, -0.157033]}
          scale={[0.012504, 0.012504, 0.009253]}
        />
        <mesh
          geometry={nodes.misc_1_high001_8_3.geometry}
          material={nodes.misc_1_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_8_3.geometry}
          material={nodes.misc_2_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Normal001_8_3.geometry}
          material={nodes.Normal001_8_3.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_8_3.geometry}
          material={nodes.Normal002_8_3.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.pod001_high001_8_3.geometry}
          material={nodes.pod001_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_8_3.geometry}
          material={nodes.pod002_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_8_3.geometry}
          material={nodes.pod003_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_8_3.geometry}
          material={nodes.pod004_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_8_3.geometry}
          material={nodes.pod005_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_8_3.geometry}
          material={nodes.pod006_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_8_3.geometry}
          material={nodes.pod007_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_8_3.geometry}
          material={nodes.pod008_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_8_3.geometry}
          material={nodes.pod009_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_8_3.geometry}
          material={nodes.pod010_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_8_3.geometry}
          material={nodes.pod011_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_8_3.geometry}
          material={nodes.pod012_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_8_3.geometry}
          material={nodes.pod013_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_8_3.geometry}
          material={nodes.pod014_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_8_3.geometry}
          material={nodes.pod015_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_8_3.geometry}
          material={nodes.pod016_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_8_3.geometry}
          material={nodes.pod017_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_8_3.geometry}
          material={nodes.pod018_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_8_3.geometry}
          material={nodes.pod019_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_8_3.geometry}
          material={nodes.pod020_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_8_3.geometry}
          material={nodes.pod021_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_8_3.geometry}
          material={nodes.pod022_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_8_3.geometry}
          material={nodes.pod023_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_8_3.geometry}
          material={nodes.pod024_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_8_3.geometry}
          material={nodes.pod025_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_8_3.geometry}
          material={nodes.pod026_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_8_3.geometry}
          material={nodes.pod027_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_8_3.geometry}
          material={nodes.pod028_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_8_3.geometry}
          material={nodes.pod029_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_8_3.geometry}
          material={nodes.pod030_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_8_3.geometry}
          material={nodes.pod031_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_8_3.geometry}
          material={nodes.pod032_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_8_3.geometry}
          material={nodes.pod033_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_8_3.geometry}
          material={nodes.pod034_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_8_3.geometry}
          material={nodes.pod035_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_8_3.geometry}
          material={nodes.pod036_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_8_3.geometry}
          material={nodes.pod037_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_8_3.geometry}
          material={nodes.pod038_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_8_3.geometry}
          material={nodes.pod039_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_8_3.geometry}
          material={nodes.pod040_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_8_3.geometry}
          material={nodes.pod041_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_8_3.geometry}
          material={nodes.pod042_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_8_3.geometry}
          material={nodes.pod043_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_8_3.geometry}
          material={nodes.pod044_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_8_3.geometry}
          material={nodes.pod045_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_8_3.geometry}
          material={nodes.pod046_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_8_3.geometry}
          material={nodes.pod047_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_8_3.geometry}
          material={nodes.pod_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.rgtdwn_8_3.geometry}
          material={nodes.rgtdwn_8_3.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0.000001, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_8_3.geometry}
          material={nodes.rgtup_8_3.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Skin2001_8_3.geometry}
          material={nodes.Skin2001_8_3.material}
          position={[0.007175, 0.135102, -0.283643]}
          rotation={[3.048996, 0.016922, -0.048459]}
          scale={[1.583777, 1.583777, 1.583777]}
        />
        <mesh
          geometry={nodes.Sphere001_8_3.geometry}
          material={nodes.Sphere001_8_3.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_8_3.geometry}
          material={nodes.Sphere002_8_3.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_8_3.geometry}
          material={nodes.Sphere003_8_3.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_8_3.geometry}
          material={nodes.Sphere004_8_3.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere005_8_3.geometry}
          material={nodes.Sphere005_8_3.material}
          position={[-0.053936, 0.211969, -0.381501]}
          rotation={[0.765665, -0.313231, 2.216415]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.Sphere006_8_3.geometry}
          material={nodes.Sphere006_8_3.material}
          position={[0.060085, 0.214964, -0.3818]}
          rotation={[0.675591, -0.440335, 1.907348]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.wire_1_high001_8_3.geometry}
          material={nodes.wire_1_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_8_3.geometry}
          material={nodes.wire_2_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_8_3.geometry}
          material={nodes.wire_3_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_8_3.geometry}
          material={nodes.wire_4_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_8_3.geometry}
          material={nodes.wire_5_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_8_3.geometry}
          material={nodes.wire_6_high001_8_3.material}
          position={[0.000122, 0, -0.013459]}
        />
      </group>
      <group position={[-14.882006, 6.240774, 8.978896]}>
        <mesh
          geometry={nodes.big_wire001_high001_9.geometry}
          material={nodes.big_wire001_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_9.geometry}
          material={nodes.big_wire002_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_9.geometry}
          material={nodes.big_wire003_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_9.geometry}
          material={nodes.big_wire005_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_9.geometry}
          material={nodes.big_wire006_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_9.geometry}
          material={nodes.big_wire007_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_9.geometry}
          material={nodes.big_wire_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_9.geometry}
          material={nodes.Cube001_9.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_9.geometry}
          material={nodes.Cube002_9.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_9.geometry}
          material={nodes.Cube003_9.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_9.geometry}
          material={nodes.Cube004_9.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_9.geometry}
          material={nodes.Cube005_9.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_9.geometry}
          material={nodes.Cube006_9.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_9.geometry}
          material={nodes.Cube007_9.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_9.geometry}
          material={nodes.Cube008_9.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_9.geometry}
          material={nodes.Cube009_9.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.floor_1_high001_9.geometry}
          material={nodes.floor_1_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_2_high001_9.geometry}
          material={nodes.floor_2_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_9.geometry}
          material={nodes.floor_4_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_9.geometry}
          material={nodes.floor_5_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_9.geometry}
          material={nodes.floor_6_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_9.geometry}
          material={nodes.floor_metalpiece_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_9.geometry}
          material={nodes.fog_1002_9.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.fog_2001_9.geometry}
          material={nodes.fog_2001_9.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_9.geometry} material={nodes.glass_1_high_9.material} />
        <mesh geometry={nodes.glass_2_high_9.geometry} material={nodes.glass_2_high_9.material} />
        <mesh geometry={nodes.glass_3_high_9.geometry} material={nodes.glass_3_high_9.material} />
        <mesh geometry={nodes.led_1_high_9.geometry} material={nodes.led_1_high_9.material} />
        <mesh geometry={nodes.led_2_high_9.geometry} material={nodes.led_2_high_9.material} />
        <mesh geometry={nodes.led_4_high_9.geometry} material={nodes.led_4_high_9.material} />
        <mesh
          geometry={nodes.misc_1_high001_9.geometry}
          material={nodes.misc_1_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_9.geometry}
          material={nodes.misc_2_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod001_high001_9.geometry}
          material={nodes.pod001_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_9.geometry}
          material={nodes.pod002_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_9.geometry}
          material={nodes.pod003_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_9.geometry}
          material={nodes.pod004_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_9.geometry}
          material={nodes.pod005_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_9.geometry}
          material={nodes.pod006_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_9.geometry}
          material={nodes.pod007_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_9.geometry}
          material={nodes.pod008_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_9.geometry}
          material={nodes.pod009_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_9.geometry}
          material={nodes.pod010_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_9.geometry}
          material={nodes.pod011_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_9.geometry}
          material={nodes.pod012_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_9.geometry}
          material={nodes.pod013_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_9.geometry}
          material={nodes.pod014_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_9.geometry}
          material={nodes.pod015_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_9.geometry}
          material={nodes.pod016_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_9.geometry}
          material={nodes.pod017_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_9.geometry}
          material={nodes.pod018_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_9.geometry}
          material={nodes.pod019_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_9.geometry}
          material={nodes.pod020_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_9.geometry}
          material={nodes.pod021_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_9.geometry}
          material={nodes.pod022_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_9.geometry}
          material={nodes.pod023_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_9.geometry}
          material={nodes.pod024_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_9.geometry}
          material={nodes.pod025_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_9.geometry}
          material={nodes.pod026_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_9.geometry}
          material={nodes.pod027_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_9.geometry}
          material={nodes.pod028_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_9.geometry}
          material={nodes.pod029_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_9.geometry}
          material={nodes.pod030_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_9.geometry}
          material={nodes.pod031_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_9.geometry}
          material={nodes.pod032_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_9.geometry}
          material={nodes.pod033_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_9.geometry}
          material={nodes.pod034_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_9.geometry}
          material={nodes.pod035_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_9.geometry}
          material={nodes.pod036_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_9.geometry}
          material={nodes.pod037_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_9.geometry}
          material={nodes.pod038_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_9.geometry}
          material={nodes.pod039_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_9.geometry}
          material={nodes.pod040_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_9.geometry}
          material={nodes.pod041_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_9.geometry}
          material={nodes.pod042_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_9.geometry}
          material={nodes.pod043_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_9.geometry}
          material={nodes.pod044_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_9.geometry}
          material={nodes.pod045_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_9.geometry}
          material={nodes.pod046_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_9.geometry}
          material={nodes.pod047_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_9.geometry}
          material={nodes.pod_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Sphere001_9.geometry}
          material={nodes.Sphere001_9.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_9.geometry}
          material={nodes.Sphere002_9.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_9.geometry}
          material={nodes.Sphere003_9.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_9.geometry}
          material={nodes.Sphere004_9.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_9.geometry}
          material={nodes.wire_1_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_9.geometry}
          material={nodes.wire_2_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_9.geometry}
          material={nodes.wire_3_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_9.geometry}
          material={nodes.wire_4_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_9.geometry}
          material={nodes.wire_5_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_9.geometry}
          material={nodes.wire_6_high001_9.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cylinder001_9.geometry}
          material={nodes.Cylinder001_9.material}
          position={[0.002212, 0.115416, -0.115012]}
          rotation={[-1.462025, 0.153089, -0.042648]}
          scale={[0.084366, 0.047614, 0.085482]}
        />
        <mesh
          geometry={nodes.Cylinder002_9.geometry}
          material={nodes.Cylinder002_9.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_9.geometry}
          material={nodes.Cylinder003_9.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_9.geometry}
          material={nodes.Cylinder004_9.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.defaultMaterial001_9.geometry}
          material={nodes.defaultMaterial001_9.material}
          position={[-0.006779, 0.159544, 0.247359]}
          rotation={[-1.668043, -0.268541, -0.017551]}
          scale={0.592855}
        />
        <mesh
          geometry={nodes.lftdwn_9.geometry}
          material={nodes.lftdwn_9.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000005, -1.39627]}
          scale={[1.000003, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_9.geometry}
          material={nodes.lftup_9.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Mesh_3001_9.geometry}
          material={nodes.Mesh_3001_9.material}
          position={[0.00748, 0.124292, 0.132539]}
          rotation={[2.940696, 0.011766, -0.157033]}
          scale={[0.012504, 0.012504, 0.009253]}
        />
        <mesh
          geometry={nodes.Normal001_9.geometry}
          material={nodes.Normal001_9.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_9.geometry}
          material={nodes.Normal002_9.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.rgtdwn_9.geometry}
          material={nodes.rgtdwn_9.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_9.geometry}
          material={nodes.rgtup_9.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Skin2001_9.geometry}
          material={nodes.Skin2001_9.material}
          position={[0.007175, 0.135102, -0.283643]}
          rotation={[3.048996, 0.016922, -0.048459]}
          scale={[1.583777, 1.583777, 1.583777]}
        />
        <mesh
          geometry={nodes.Sphere005_9.geometry}
          material={nodes.Sphere005_9.material}
          position={[-0.053936, 0.211969, -0.381501]}
          rotation={[0.765665, -0.313231, 2.216415]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.Sphere006_9.geometry}
          material={nodes.Sphere006_9.material}
          position={[0.060085, 0.214964, -0.3818]}
          rotation={[0.675591, -0.440335, 1.907348]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
      </group>
      <group position={[-14.882006, 6.240774, -17.664179]}>
        <mesh
          geometry={nodes.floor_2_high001_9_3.geometry}
          material={nodes.floor_2_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_9_3.geometry}
          material={nodes.floor_4_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_9_3.geometry}
          material={nodes.floor_5_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_2001_9_3.geometry}
          material={nodes.fog_2001_9_3.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.big_wire001_high001_9_3.geometry}
          material={nodes.big_wire001_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_9_3.geometry}
          material={nodes.big_wire002_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_9_3.geometry}
          material={nodes.big_wire003_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_9_3.geometry}
          material={nodes.big_wire005_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_9_3.geometry}
          material={nodes.big_wire006_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_9_3.geometry}
          material={nodes.big_wire007_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_9_3.geometry}
          material={nodes.big_wire_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_9_3.geometry}
          material={nodes.Cube001_9_3.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_9_3.geometry}
          material={nodes.Cube002_9_3.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_9_3.geometry}
          material={nodes.Cube003_9_3.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_9_3.geometry}
          material={nodes.Cube004_9_3.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_9_3.geometry}
          material={nodes.Cube005_9_3.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_9_3.geometry}
          material={nodes.Cube006_9_3.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_9_3.geometry}
          material={nodes.Cube007_9_3.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_9_3.geometry}
          material={nodes.Cube008_9_3.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_9_3.geometry}
          material={nodes.Cube009_9_3.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.Cylinder002_9_3.geometry}
          material={nodes.Cylinder002_9_3.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_9_3.geometry}
          material={nodes.Cylinder003_9_3.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_9_3.geometry}
          material={nodes.Cylinder004_9_3.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.floor_1_high001_9_3.geometry}
          material={nodes.floor_1_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_9_3.geometry}
          material={nodes.floor_6_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_9_3.geometry}
          material={nodes.floor_metalpiece_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_9_3.geometry}
          material={nodes.fog_1002_9_3.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_9_3.geometry} material={nodes.glass_1_high_9_3.material} />
        <mesh geometry={nodes.glass_2_high_9_3.geometry} material={nodes.glass_2_high_9_3.material} />
        <mesh
          geometry={nodes.glass_3_high_9_3.geometry}
          material={nodes.glass_3_high_9_3.material}
          position={[0.011721, 0, 0]}
        />
        <mesh geometry={nodes.led_1_high_9_3.geometry} material={nodes.led_1_high_9_3.material} />
        <mesh geometry={nodes.led_2_high_9_3.geometry} material={nodes.led_2_high_9_3.material} />
        <mesh geometry={nodes.led_4_high_9_3.geometry} material={nodes.led_4_high_9_3.material} />
        <mesh
          geometry={nodes.lftdwn_9_3.geometry}
          material={nodes.lftdwn_9_3.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000006, -1.396271]}
          scale={[1.000004, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_9_3.geometry}
          material={nodes.lftup_9_3.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.misc_1_high001_9_3.geometry}
          material={nodes.misc_1_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_9_3.geometry}
          material={nodes.misc_2_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Normal001_9_3.geometry}
          material={nodes.Normal001_9_3.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_9_3.geometry}
          material={nodes.Normal002_9_3.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.pod001_high001_9_3.geometry}
          material={nodes.pod001_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_9_3.geometry}
          material={nodes.pod002_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_9_3.geometry}
          material={nodes.pod003_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_9_3.geometry}
          material={nodes.pod004_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_9_3.geometry}
          material={nodes.pod005_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_9_3.geometry}
          material={nodes.pod006_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_9_3.geometry}
          material={nodes.pod007_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_9_3.geometry}
          material={nodes.pod008_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_9_3.geometry}
          material={nodes.pod009_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_9_3.geometry}
          material={nodes.pod010_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_9_3.geometry}
          material={nodes.pod011_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_9_3.geometry}
          material={nodes.pod012_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_9_3.geometry}
          material={nodes.pod013_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_9_3.geometry}
          material={nodes.pod014_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_9_3.geometry}
          material={nodes.pod015_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_9_3.geometry}
          material={nodes.pod016_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_9_3.geometry}
          material={nodes.pod017_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_9_3.geometry}
          material={nodes.pod018_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_9_3.geometry}
          material={nodes.pod019_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_9_3.geometry}
          material={nodes.pod020_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_9_3.geometry}
          material={nodes.pod021_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_9_3.geometry}
          material={nodes.pod022_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_9_3.geometry}
          material={nodes.pod023_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_9_3.geometry}
          material={nodes.pod024_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_9_3.geometry}
          material={nodes.pod025_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_9_3.geometry}
          material={nodes.pod026_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_9_3.geometry}
          material={nodes.pod027_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_9_3.geometry}
          material={nodes.pod028_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_9_3.geometry}
          material={nodes.pod029_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_9_3.geometry}
          material={nodes.pod030_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_9_3.geometry}
          material={nodes.pod031_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_9_3.geometry}
          material={nodes.pod032_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_9_3.geometry}
          material={nodes.pod033_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_9_3.geometry}
          material={nodes.pod034_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_9_3.geometry}
          material={nodes.pod035_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_9_3.geometry}
          material={nodes.pod036_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_9_3.geometry}
          material={nodes.pod037_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_9_3.geometry}
          material={nodes.pod038_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_9_3.geometry}
          material={nodes.pod039_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_9_3.geometry}
          material={nodes.pod040_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_9_3.geometry}
          material={nodes.pod041_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_9_3.geometry}
          material={nodes.pod042_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_9_3.geometry}
          material={nodes.pod043_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_9_3.geometry}
          material={nodes.pod044_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_9_3.geometry}
          material={nodes.pod045_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_9_3.geometry}
          material={nodes.pod046_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_9_3.geometry}
          material={nodes.pod047_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_9_3.geometry}
          material={nodes.pod_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.rgtdwn_9_3.geometry}
          material={nodes.rgtdwn_9_3.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0.000001, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_9_3.geometry}
          material={nodes.rgtup_9_3.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Sphere001_9_3.geometry}
          material={nodes.Sphere001_9_3.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_9_3.geometry}
          material={nodes.Sphere002_9_3.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_9_3.geometry}
          material={nodes.Sphere003_9_3.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_9_3.geometry}
          material={nodes.Sphere004_9_3.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_9_3.geometry}
          material={nodes.wire_1_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_9_3.geometry}
          material={nodes.wire_2_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_9_3.geometry}
          material={nodes.wire_3_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_9_3.geometry}
          material={nodes.wire_4_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_9_3.geometry}
          material={nodes.wire_5_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_9_3.geometry}
          material={nodes.wire_6_high001_9_3.material}
          position={[0.000122, 0, -0.013459]}
        />
      </group>
      <group position={[-14.867907, 6.240774, -8.623399]}>
        <mesh
          geometry={nodes.big_wire001_high001_11.geometry}
          material={nodes.big_wire001_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire002_high001_11.geometry}
          material={nodes.big_wire002_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire003_high001_11.geometry}
          material={nodes.big_wire003_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire005_high001_11.geometry}
          material={nodes.big_wire005_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire006_high001_11.geometry}
          material={nodes.big_wire006_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire007_high001_11.geometry}
          material={nodes.big_wire007_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.big_wire_high001_11.geometry}
          material={nodes.big_wire_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cube001_11.geometry}
          material={nodes.Cube001_11.material}
          position={[0.171031, 0.110058, -0.075613]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.060091, 0.004716, 0.023302]}
        />
        <mesh
          geometry={nodes.Cube002_11.geometry}
          material={nodes.Cube002_11.material}
          position={[0.171161, 0.109341, -0.083345]}
          rotation={[-1.659451, -0.185751, -0.334496]}
          scale={[0.048918, 0.004918, 0.014522]}
        />
        <mesh
          geometry={nodes.Cube003_11.geometry}
          material={nodes.Cube003_11.material}
          position={[0.067768, -0.077474, -0.117648]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.001035, 0.027751, 0.025006]}
        />
        <mesh
          geometry={nodes.Cube004_11.geometry}
          material={nodes.Cube004_11.material}
          position={[0.067764, -0.078174, -0.121069]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube005_11.geometry}
          material={nodes.Cube005_11.material}
          position={[0.069499, -0.079059, -0.124562]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube006_11.geometry}
          material={nodes.Cube006_11.material}
          position={[0.071235, -0.079942, -0.128054]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube007_11.geometry}
          material={nodes.Cube007_11.material}
          position={[0.072971, -0.080827, -0.131548]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube008_11.geometry}
          material={nodes.Cube008_11.material}
          position={[0.074707, -0.081709, -0.135039]}
          rotation={[-1.689154, 0.270167, -1.993036]}
          scale={[0.000975, 0.014937, 0.025004]}
        />
        <mesh
          geometry={nodes.Cube009_11.geometry}
          material={nodes.Cube009_11.material}
          position={[0.088451, -0.086207, -0.121335]}
          rotation={[-1.648458, 0.176678, -0.398018]}
          scale={[0.037485, 0.033061, 0.025023]}
        />
        <mesh
          geometry={nodes.floor_1_high001_11.geometry}
          material={nodes.floor_1_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_2_high001_11.geometry}
          material={nodes.floor_2_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_4_high001_11.geometry}
          material={nodes.floor_4_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_5_high001_11.geometry}
          material={nodes.floor_5_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_6_high001_11.geometry}
          material={nodes.floor_6_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.floor_metalpiece_high001_11.geometry}
          material={nodes.floor_metalpiece_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.fog_1002_11.geometry}
          material={nodes.fog_1002_11.material}
          position={[0.103931, -1.727877, -0.838086]}
          rotation={[-1.570786, -1.561171, -1.570786]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh
          geometry={nodes.fog_2001_11.geometry}
          material={nodes.fog_2001_11.material}
          position={[0.001541, -1.085298, -0.473992]}
          rotation={[-1.570821, 1.561171, 1.570821]}
          scale={[4.087283, 4.087283, 4.087283]}
        />
        <mesh geometry={nodes.glass_1_high_11.geometry} material={nodes.glass_1_high_11.material} />
        <mesh geometry={nodes.glass_2_high_11.geometry} material={nodes.glass_2_high_11.material} />
        <mesh geometry={nodes.glass_3_high_11.geometry} material={nodes.glass_3_high_11.material} />
        <mesh geometry={nodes.led_1_high_11.geometry} material={nodes.led_1_high_11.material} />
        <mesh geometry={nodes.led_2_high_11.geometry} material={nodes.led_2_high_11.material} />
        <mesh geometry={nodes.led_4_high_11.geometry} material={nodes.led_4_high_11.material} />
        <mesh
          geometry={nodes.misc_1_high001_11.geometry}
          material={nodes.misc_1_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.misc_2_high001_11.geometry}
          material={nodes.misc_2_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod001_high001_11.geometry}
          material={nodes.pod001_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod002_high001_11.geometry}
          material={nodes.pod002_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod003_high001_11.geometry}
          material={nodes.pod003_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod004_high001_11.geometry}
          material={nodes.pod004_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod005_high001_11.geometry}
          material={nodes.pod005_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod006_high001_11.geometry}
          material={nodes.pod006_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod007_high001_11.geometry}
          material={nodes.pod007_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod008_high001_11.geometry}
          material={nodes.pod008_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod009_high001_11.geometry}
          material={nodes.pod009_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod010_high001_11.geometry}
          material={nodes.pod010_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod011_high001_11.geometry}
          material={nodes.pod011_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod012_high001_11.geometry}
          material={nodes.pod012_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod013_high001_11.geometry}
          material={nodes.pod013_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod014_high001_11.geometry}
          material={nodes.pod014_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod015_high001_11.geometry}
          material={nodes.pod015_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod016_high001_11.geometry}
          material={nodes.pod016_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod017_high001_11.geometry}
          material={nodes.pod017_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod018_high001_11.geometry}
          material={nodes.pod018_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod019_high001_11.geometry}
          material={nodes.pod019_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod020_high001_11.geometry}
          material={nodes.pod020_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod021_high001_11.geometry}
          material={nodes.pod021_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod022_high001_11.geometry}
          material={nodes.pod022_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod023_high001_11.geometry}
          material={nodes.pod023_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod024_high001_11.geometry}
          material={nodes.pod024_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod025_high001_11.geometry}
          material={nodes.pod025_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod026_high001_11.geometry}
          material={nodes.pod026_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod027_high001_11.geometry}
          material={nodes.pod027_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod028_high001_11.geometry}
          material={nodes.pod028_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod029_high001_11.geometry}
          material={nodes.pod029_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod030_high001_11.geometry}
          material={nodes.pod030_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod031_high001_11.geometry}
          material={nodes.pod031_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod032_high001_11.geometry}
          material={nodes.pod032_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod033_high001_11.geometry}
          material={nodes.pod033_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod034_high001_11.geometry}
          material={nodes.pod034_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod035_high001_11.geometry}
          material={nodes.pod035_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod036_high001_11.geometry}
          material={nodes.pod036_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod037_high001_11.geometry}
          material={nodes.pod037_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod038_high001_11.geometry}
          material={nodes.pod038_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod039_high001_11.geometry}
          material={nodes.pod039_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod040_high001_11.geometry}
          material={nodes.pod040_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod041_high001_11.geometry}
          material={nodes.pod041_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod042_high001_11.geometry}
          material={nodes.pod042_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod043_high001_11.geometry}
          material={nodes.pod043_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod044_high001_11.geometry}
          material={nodes.pod044_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod045_high001_11.geometry}
          material={nodes.pod045_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod046_high001_11.geometry}
          material={nodes.pod046_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod047_high001_11.geometry}
          material={nodes.pod047_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.pod_high001_11.geometry}
          material={nodes.pod_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Sphere001_11.geometry}
          material={nodes.Sphere001_11.material}
          position={[-0.205025, 0.079528, 0.03046]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere002_11.geometry}
          material={nodes.Sphere002_11.material}
          position={[-0.192193, 0.075835, 0.022942]}
          rotation={[-2.379618, 1.279525, 1.154381]}
          scale={[0.078424, 0.089046, 0.023084]}
        />
        <mesh
          geometry={nodes.Sphere003_11.geometry}
          material={nodes.Sphere003_11.material}
          position={[0.216686, 0.130709, 0.02297]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.Sphere004_11.geometry}
          material={nodes.Sphere004_11.material}
          position={[0.228286, 0.12477, 0.026296]}
          rotation={[-0.13962, 1.233164, -1.316931]}
          scale={[0.079485, 0.090251, 0.023396]}
        />
        <mesh
          geometry={nodes.wire_1_high001_11.geometry}
          material={nodes.wire_1_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_2_high001_11.geometry}
          material={nodes.wire_2_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_3_high001_11.geometry}
          material={nodes.wire_3_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_4_high001_11.geometry}
          material={nodes.wire_4_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_5_high001_11.geometry}
          material={nodes.wire_5_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.wire_6_high001_11.geometry}
          material={nodes.wire_6_high001_11.material}
          position={[0.000122, 0, -0.013459]}
        />
        <mesh
          geometry={nodes.Cylinder001_11.geometry}
          material={nodes.Cylinder001_11.material}
          position={[0.002212, 0.115416, -0.115012]}
          rotation={[-1.462025, 0.153089, -0.042648]}
          scale={[0.084366, 0.047614, 0.085482]}
        />
        <mesh
          geometry={nodes.Cylinder002_11.geometry}
          material={nodes.Cylinder002_11.material}
          position={[0.144737, -0.109319, -0.489566]}
          rotation={[0.004714, 0.420235, 0.085792]}
          scale={[0.012649, 0.121301, 0.012649]}
        />
        <mesh
          geometry={nodes.Cylinder003_11.geometry}
          material={nodes.Cylinder003_11.material}
          position={[-0.147164, -0.124536, -0.493319]}
          rotation={[3.140592, 0.455386, 0.099268]}
          scale={[-0.012176, -0.116764, -0.012176]}
        />
        <mesh
          geometry={nodes.Cylinder004_11.geometry}
          material={nodes.Cylinder004_11.material}
          position={[0.004978, -0.086375, -0.619142]}
          rotation={[1.00876, 1.553439, -0.762117]}
          scale={[0.015824, 0.151744, 0.015824]}
        />
        <mesh
          geometry={nodes.defaultMaterial001_11.geometry}
          material={nodes.defaultMaterial001_11.material}
          position={[-0.006779, 0.159544, 0.247359]}
          rotation={[-1.668043, -0.268541, -0.017551]}
          scale={0.592855}
        />
        <mesh
          geometry={nodes.lftdwn_11.geometry}
          material={nodes.lftdwn_11.material}
          position={[-0.339724, 0.124425, -0.249578]}
          rotation={[Math.PI / 2, -0.000005, -1.39627]}
          scale={[1.000003, 1.000004, 1.000004]}
        />
        <mesh
          geometry={nodes.lftup_11.geometry}
          material={nodes.lftup_11.material}
          position={[-0.211664, 0.110989, -0.520966]}
          rotation={[Math.PI, 0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Mesh_3001_11.geometry}
          material={nodes.Mesh_3001_11.material}
          position={[0.00748, 0.124292, 0.132539]}
          rotation={[2.940696, 0.011766, -0.157033]}
          scale={[0.012504, 0.012504, 0.009253]}
        />
        <mesh
          geometry={nodes.Normal001_11.geometry}
          material={nodes.Normal001_11.material}
          position={[-0.066071, 0.268343, -0.43219]}
          rotation={[-0.159199, -0.315854, 0.357451]}
          scale={[0.040176, 0.040176, 0.005615]}
        />
        <mesh
          geometry={nodes.Normal002_11.geometry}
          material={nodes.Normal002_11.material}
          position={[0.069217, 0.271501, -0.42894]}
          rotation={[-0.021502, -0.28259, 0.645901]}
          scale={[0.039054, 0.039054, 0.005458]}
        />
        <mesh
          geometry={nodes.rgtdwn_11.geometry}
          material={nodes.rgtdwn_11.material}
          position={[0.340532, 0.1253, -0.251817]}
          rotation={[Math.PI / 2, 0, 1.396264]}
          scale={[1, 1, 1.075234]}
        />
        <mesh
          geometry={nodes.rgtup_11.geometry}
          material={nodes.rgtup_11.material}
          position={[0.212671, 0.114859, -0.519657]}
          rotation={[-Math.PI, -0.872665, -Math.PI / 2]}
        />
        <mesh
          geometry={nodes.Skin2001_11.geometry}
          material={nodes.Skin2001_11.material}
          position={[0.007175, 0.135102, -0.283643]}
          rotation={[3.048996, 0.016922, -0.048459]}
          scale={[1.583777, 1.583777, 1.583777]}
        />
        <mesh
          geometry={nodes.Sphere005_11.geometry}
          material={nodes.Sphere005_11.material}
          position={[-0.053936, 0.211969, -0.381501]}
          rotation={[0.765665, -0.313231, 2.216415]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
        <mesh
          geometry={nodes.Sphere006_11.geometry}
          material={nodes.Sphere006_11.material}
          position={[0.060085, 0.214964, -0.3818]}
          rotation={[0.675591, -0.440335, 1.907348]}
          scale={[0.046707, 0.046707, 0.046707]}
        />
      </group>
      <mesh
        geometry={nodes.floor_2_high001_8_1.geometry}
        material={nodes.floor_2_high001_8_1.material}
        position={[-31.13221, 6.2151, 17.783228]}
      />
      <mesh
        geometry={nodes.floor_2_high001_8_1_1.geometry}
        material={nodes.floor_2_high001_8_1_1.material}
        position={[-20.390917, 6.201199, 17.788546]}
      />
      <mesh
        geometry={nodes.floor_4_high001_8_1.geometry}
        material={nodes.floor_4_high001_8_1.material}
        position={[-31.136145, 6.234396, 17.761795]}
      />
      <mesh
        geometry={nodes.floor_4_high001_8_1_1.geometry}
        material={nodes.floor_4_high001_8_1_1.material}
        position={[-20.387955, 6.234396, 17.79739]}
      />
      <mesh
        geometry={nodes.floor_5_high001_8_1.geometry}
        material={nodes.floor_5_high001_8_1.material}
        position={[-31.136248, 6.205168, 17.785572]}
      />
      <mesh
        geometry={nodes.floor_5_high001_8_1_1.geometry}
        material={nodes.floor_5_high001_8_1_1.material}
        position={[-20.384817, 6.222482, 17.784492]}
      />
      <mesh
        geometry={nodes.fog_2001_8_1.geometry}
        material={nodes.fog_2001_8_1.material}
        position={[-31.158321, 5.071491, 18.026823]}
        rotation={[-1.570821, 1.561171, 1.570821]}
        scale={[4.087283, 4.087283, 4.087283]}
      />
      <mesh
        geometry={nodes.lftdwn.geometry}
        
        position={[-4.445998, 6.362573, -0.073265]}
        rotation={[0, 1.396263, 0]}
        scale={[0.24, 0.18, 1]}
        >
        <meshBasicMaterial>
        <videoTexture attach="map" args={useFunc('/lftdwn.mp4')} />
      </meshBasicMaterial>        
      </mesh>
      <mesh
        geometry={nodes.rgtdwn.geometry}
        
        position={[-3.766531, 6.362573, -0.073265]}
        rotation={[0, -1.396263, 0]}
        scale={[0.24, 0.18, 1]}
        >
        <meshBasicMaterial>
        <videoTexture attach="map" args={useFunc('/rgtdwn.mp4')} />
      </meshBasicMaterial>        
      </mesh>
      <mesh
        geometry={nodes.rgtup.geometry}
        
        position={[-3.895029, 6.357136, -0.343629]}
        rotation={[0, -0.698132, 0]}
        scale={[0.19, 0.19, 1]}
        >
        <meshBasicMaterial>
            <videoTexture attach="map" args={useFunc('/rgtup.mp4')} />
          </meshBasicMaterial>           
      
        </mesh>
      <mesh
        geometry={nodes.lftup.geometry}
        //material={nodes.lftup.material}
        position={[-4.320686, 6.357136, -0.343629]}
        rotation={[0, 0.698132, 0]}
        scale={[0.19, 0.19, 1]}
        >
          <meshBasicMaterial>
            <videoTexture attach="map" args={useFunc('/lftup.mp4')} />
          </meshBasicMaterial>
        </mesh>
      <group position={[-2.115879, 5.144, 0.31]}>
        <group
          position={[0.358937, 4.466122, 28.700638]}
          rotation={[-0.542285, -0.002416, -0.036777]}
          scale={[0.02177, 0.02177, 0.02177]}>
          <mesh
            geometry={nodes.defaultMaterial004.geometry}
            material={nodes.defaultMaterial004.material}
            position={[-122.85054, 550.117432, -1227.768555]}
            rotation={[-0.877813, -0.029173, -0.011426]}
            scale={[0.139294, 0.139294, 0.139294]}
          />
          <mesh
            geometry={nodes.defaultMaterial005.geometry}
            material={nodes.defaultMaterial005.material}
            position={[-122.563927, 550.035645, -1227.616089]}
            rotation={[-0.877813, -0.029173, -0.011426]}
            scale={[0.139294, 0.139294, 0.139294]}
          />
          <mesh
            geometry={nodes.defaultMaterial006.geometry}
            //material={nodes.defaultMaterial006.material}
            
            position={[-122.874184, 550.053406, -1227.663818]}
            rotation={[-0.877813, -0.029173, -0.011426]}
            scale={[0.139294, 0.139294, 0.139294]}
            >
              <meshStandardMaterial opacity={0.30} color="white" vertexColors={true}
              roughness={0.50} side={DoubleSide} transparent={true} map={texture} emissive="black"/>
            </mesh>
        </group>
        <mesh
          geometry={nodes.Cube010.geometry}
          material={nodes.Cube010.material}
          position={[-1.82369, 1.201966, -0.174845]}
          rotation={[-1.655822, -0.179692, -0.330429]}
          scale={[0.06029, 0.004732, 0.023379]}
        />
        <mesh
          geometry={nodes.Cube011.geometry}
          material={nodes.Cube011.material}
          position={[-1.82359, 1.20127, -0.182605]}
          rotation={[-1.655822, -0.179692, -0.330429]}
          scale={[0.04908, 0.004934, 0.01457]}
        />
        <mesh
          geometry={nodes.Cylinder005.geometry}
          material={materials['Material.159']}
          position={[-1.89664, 0.69, -0.192507]}
          rotation={[-0.107384, 0.243917, -0.117631]}
          scale={[0.009446, 0.451253, 0.009165]}
        />
        <mesh
          geometry={nodes.Cylinder006.geometry}
          material={materials['Material.160']}
          position={[-1.75192, 0.927, -0.230508]}
          rotation={[-0.023413, 0.143264, 0.204631]}
          scale={[0.007177, 0.322803, 0.0061]}
        />
        <mesh
          geometry={nodes.Cylinder008.geometry}
          material={nodes.Cylinder008.material}
          position={[-1.993165, 1.208538, -0.213771]}
          rotation={[-1.459566, 0.159814, -0.039877]}
          scale={[0.084645, 0.047772, 0.085765]}
        />
        <mesh
          geometry={nodes.Cylinder011.geometry}
          material={materials['Material.162']}
          position={[-1.85291, 0.983242, -0.590707]}
          rotation={[0.010481, 0.423645, 0.078766]}
          scale={[0.012691, 0.121703, 0.012691]}
        />
        <mesh
          geometry={nodes.Cylinder012.geometry}
          material={materials['Material.163']}
          position={[-2.127614, 1.002732, -0.598377]}
          rotation={[3.140371, 0.45192, 0.106365]}
          scale={[-0.012216, -0.117151, -0.012216]}
        />
        <mesh
          geometry={nodes.Cylinder013.geometry}
          material={materials['Material.164']}
          position={[-1.988055, 1.00779, -0.72033]}
          rotation={[2.930221, 1.516716, -2.677161]}
          scale={[0.015876, 0.152247, 0.015876]}
        />
        <mesh
          geometry={nodes.Cylinder048.geometry}
          material={materials['Material.185']}
          position={[-2.158201, 0.88, -0.208774]}
          rotation={[-0.037393, 0.972139, -0.048705]}
          scale={[0.007177, 0.322803, 0.0061]}
        />
        <mesh
          geometry={nodes.Cylinder049.geometry}
          material={materials['Material.189']}
          position={[-2.069016, 0.665, -0.212838]}
          rotation={[-0.218915, 0.70158, 0.218724]}
          scale={[0.009446, 0.451253, 0.009165]}
        />
        <mesh
          geometry={nodes.defaultMaterial007.geometry}
          material={materials['b.003']}
          position={[-2.000648, 1.251813, 0.149955]}
          rotation={[-1.664052, -0.262515, -0.013353]}
          scale={[0.594818, 0.594818, 0.594818]}
        />
        <mesh
          geometry={nodes.GözKapagiSag.geometry}
          material={nodes.GözKapagiSag.material}
          position={[-1.938675, 1.309697, -0.479253]}
          rotation={[-0.895034, -0.227756, 1.954022]}
          scale={[-0.049797, -0.049797, -0.049797]}
        />
        <mesh
          geometry={nodes.GözKapagıSol.geometry}
          material={nodes.GözKapagıSol.material}
          position={[-2.049802, 1.306543, -0.480666]}
          rotation={[2.597278, -0.358943, 1.95658]}
          scale={[0.04837, 0.04837, 0.04837]}
        />
        <mesh
          geometry={nodes.Mesh_3.geometry}
          material={nodes.Mesh_3.material}
          position={[-1.986966, 1.216688, 0.035]}
          rotation={[2.943533, 0.007111, -0.151461]}
          scale={[0.012546, 0.012546, 0.009283]}
        />
        <mesh
          geometry={nodes.Normal006.geometry}
          material={nodes.Normal006.material}
          position={[-2.061793, 1.363328, -0.531317]}
          rotation={[-0.158176, -0.31143, 0.351399]}
          scale={[0.040309, 0.040309, 0.005634]}
        />
        <mesh
          geometry={nodes.Normal007.geometry}
          material={nodes.Normal007.material}
          position={[-1.926025, 1.36562, -0.528518]}
          rotation={[-0.020432, -0.278998, 0.639334]}
          scale={[0.039183, 0.039183, 0.005477]}
        />
        <mesh
          geometry={nodes.Skin2002.geometry}
          material={nodes.Skin2002.material}
          position={[-1.988642, 1.228747, -0.38292]}
          rotation={[3.051795, 0.012896, -0.042417]}
          scale={[1.589023, 1.589023, 1.589023]}
        />
        <mesh
          geometry={nodes.Sphere007.geometry}
          material={nodes.Sphere007.material}
          position={[-2.049802, 1.306543, -0.480666]}
          rotation={[0.76628, -0.315162, 2.209056]}
          scale={[0.046861, 0.046861, 0.046861]}
        />
        <mesh
          geometry={nodes.Sphere008.geometry}
          material={nodes.Sphere008.material}
          position={[-1.935386, 1.308819, -0.481354]}
          rotation={[0.675108, -0.441625, 1.899447]}
          scale={[0.046861, 0.046861, 0.046861]}
        />
        <mesh
          geometry={nodes.Sphere116.geometry}
          material={nodes.Sphere116.material}
          position={[-2.200811, 1.173434, -0.067201]}
          rotation={[-2.400245, 1.281356, 1.178924]}
          scale={[0.078684, 0.089341, 0.023161]}
        />
        <mesh
          geometry={nodes.Sphere117.geometry}
          material={nodes.Sphere117.material}
          position={[-2.187984, 1.169669, -0.074799]}
          rotation={[-2.400245, 1.281356, 1.178924]}
          scale={[0.078684, 0.089341, 0.023161]}
        />
        <mesh
          geometry={nodes.Sphere118.geometry}
          material={nodes.Sphere118.material}
          position={[-1.77741, 1.205, -0.077]}
          rotation={[-0.11986, 1.23742, -1.334798]}
          scale={[0.079748, 0.09055, 0.023474]}
        />
        <mesh
          geometry={nodes.Sphere119.geometry}
          material={nodes.Sphere119.material}
          position={[-1.765799, 1.205, -0.068]}
          rotation={[-0.11986, 1.23742, -1.334798]}
          scale={[0.079748, 0.09055, 0.023474]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/compressedf.glb')
