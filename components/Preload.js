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
        <title>THE GENEX PROJECT</title>
        <meta name="description" content="Nft Minting Tutorial" />
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
      <FAQ />
      <Gallery />
      </div>
      )}
    </>
  );
}
