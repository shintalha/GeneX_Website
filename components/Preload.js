import React, { useState } from "react";
import Header from "../components/Header";
import Head from "next/head";
import {Gallery} from "../components/Gallery";
import {Sticky} from "../components/Sticky";
import FAQ from "../components/FAQ";
import { Logo } from "../components/Logo";
import { Ptext } from "../components/Ptext";
import { Roadmap } from "../components/Roadmap";
import {useProgress } from "@react-three/drei"
import {AR} from "../components/AR"
export const Preload = () => {
  const { progress, loaded} = useProgress();
  const [done, setDone] = useState(false);
  
  const myint = setInterval(
    (() => {
      if(progress==100){
      
    
    
        clearInterval(myint);
        setTimeout(() => {
          
          
          
          setDone(1);
          
        
        }, 1000); 
       
        

      
     }}), 
    1000);
    
    

  return (
    <>
      <Head>
        <title>GeneX Project | Omnichain NFT</title>
        <meta name="description" content="GeneX Project NFT is the first 3D Omnichain NFT collection created by randomly generating over 200 rare traits. The collection is based on the Layer Zero Technology and includes 4444 unique GeneX. " />
        <link rel="icon" href="/iconnew.ico" />
      </Head>
      {!done ? (
        
        <div className="posab4">
          <img src="/loading.gif" alt="loading.." className="relative posab5"/>
          
          </div>
      ) : (
      <div>
      <Header/>
      <Sticky/>
      <Logo/>
      <Ptext/>
      <Roadmap/>
      <AR/>
      <FAQ />
      <Gallery />
      </div>
      )}
    </>
  );
}
