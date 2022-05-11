import React, { useState } from "react";
export default function MyApp() {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  const [faq5, setFaq5] = useState(false);
  const [faq6, setFaq6] = useState(false);

  return (
    <div id="faq" className="relative" >
      <div className="flex flex-col items-center justify-center sm:px-0 px-6 z-20 pb-8">
        <div className="md:py-14 py-20">
          <h1
            role="heading"
            className="xl:text-6xl md:text-4xl text-5xl font-bold leading-10 text-white"
          >
            FAQ
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-8/12 sm:w-9/12 w-full">
                
          <div className="bg-white shadow rounded p-4"  onClick={() => setFaq1(!faq1)}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold font-comfortaa uppercase text-lg leading-none text-gray-800">
                  What is an NFT?
                </h2>
              </div>
              <button
                onClick={() => setFaq1(!faq1)}
                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                {faq1 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>

            {faq1 && (
              <ul className="">
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4">
                    {`NFT stands for "Non-fungible token," a unique, digital item
                    with blockchain-managed ownership that users can buy, own,
                    and trade. While some NFT's function as digital art, they
                    can also offer additional benefits like exclusive access to
                    websites, event tickets, game items, and ownership records
                    for physical objects. Think of it as a unique piece of art
                    that can also serve as a one-of-a-kind "members-only" card.`}
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div className="bg-white shadow rounded p-4 mt-8" onClick={() => setFaq2(!faq2)}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold font-comfortaa uppercase text-lg leading-none text-gray-800">
                WHAT IS  THE GENEX PROJECT?
                </h2>
              </div>
              <button
                onClick={() => {
                  setFaq2(!faq2);
                }}
                data-menu
                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                {faq2 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {faq2 && (
              <ul>
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4 ">
                    {`Hello Dear World,
 
 I'm GeneX #0000. I am sending you this letter with light waves, I think this message will reach you in months. I'm in the TransportX spaceship now and we set off from Earth for the journey to Proxima B. I've been in the pitch black space for 2 months and I'm very curious about my new utopian planet.
 I have important things to tell you. Our purpose to go into space is against inequality, racism, sexual abuse and much more evil in the world, we have decided to leave the world. We are all GeneX, a total of 5555 gathered from all over the world for a just world where there is no inequality.
 We GeneXs from all over the world started off by arriving on the island of PlatfromX, known only to us, off the Pacific coast, which will not be visible on any satellite. Our island had all the resources needed for a spaceship. We prepared the TransportX in a very short time without getting tired of the 5555 GeneX. We were so close to our goal, all we wanted was a new world ruled by goodness. We chose the planet Proxima B, which is 4.24 light years away, as the planet closest to Earth. We all took our places in the capsule and started our magical adventure.`}
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div className="bg-white shadow rounded p-4 mt-8" onClick={() => setFaq3(!faq3)}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold font-comfortaa uppercase text-lg leading-none text-gray-800">
                WHAT IS LAYER ZERO/OMNICHAIN?
                </h2>
              </div>
              <button
                onClick={() => {
                  setFaq3(!faq3);
                }}
                data-menu
                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                {faq3 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {faq3 && (
              <ul>
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4 ">
                  LayerZero is an omnichain interoperability protocol that enables decentralized applications (dApps) to build across multiple blockchains in “a trustless, efficient manner”. In other words, it serves as a transport layer using which smart contracts can communicate across blockchains. You can move your Omnichain NFTs from one network to another. For example, you can transfer a GeneX from Polygon to Ethereum by paying gas fee.
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div className="bg-white shadow rounded p-4 mt-8" onClick={() => setFaq4(!faq4)}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold font-comfortaa uppercase text-lg leading-none text-gray-800">
                WHEN IS THE SALE?
                </h2>
              </div>
              <button
                onClick={() => setFaq4(!faq4)}
                data-menu
                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                {faq4 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {faq4 && (
              <ul>
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4 ">
                  The sale will be in May 2022. The certain date will be announced very soon. Follow our social media accounts for any announcements.
                  </p>
                </li>
              </ul>
            )}
          </div>

          <div className="bg-white shadow rounded p-4 mt-8" onClick={() => setFaq5(!faq5)}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold font-comfortaa uppercase text-lg leading-none text-gray-800">
                WHAT IS THE MINT PRICE?
                </h2>
              </div>
              <button
                onClick={() => setFaq5(!faq5)}
                data-menu
                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                {faq4 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {faq5 && (
              <ul>
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4 ">
                  There is no mint price. It's free to mint.
                  </p>
                </li>
              </ul>
            )}
          </div>

          <div className="bg-white shadow rounded p-4 mt-8" onClick={() => setFaq6(!faq6)}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold font-comfortaa uppercase text-lg leading-none text-gray-800">
                HOW CAN I BUY GENE?
                </h2>
              </div>
              <button
                onClick={() => setFaq6(!faq6)}
                data-menu
                className="focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ring-offset-white cursor-pointer"
              >
                {faq4 ? (
                  <svg
                    role="button"
                    aria-label="close dropdown"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5L5 1L9 5"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="10"
                    role="button"
                    aria-label="open dropdown"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            {faq6 && (
              <ul>
                <li>
                  <p className="text-base leading-normal text-gray-600 mt-4 ">
                  The contract addresses deployed in the determined networks will first be shared with the whitelist winners on Discord. Then, the contract addresses will be shared on our twitter address so that it can be publicmint. By entering these contracts, you will be able to mint GeneX directly from the contract. We will post a video tutorial explaining this.
                  </p>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
