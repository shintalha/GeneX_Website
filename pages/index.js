import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import {Gallery} from "../components/Gallery";
import {Sticky} from "../components/Sticky";
import FAQ from "../components/FAQ";
import Threed from "../components/Threed";
import { Logo } from "../components/Logo";
import { Ptext } from "../components/Ptext";
import { Roadmap } from "../components/Roadmap";
import { Preload } from "../components/Preload";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-primary">
      
      <Threed/>
      <Preload/>
      
      
      
      
      
    </div>
  );
}
