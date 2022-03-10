import React, { useState } from "react";
import Head from "next/head";
export default function MyApp() {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);

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
                    {`All people's bodies are different, but from the outside, all people look alike. The most important thing that makes people different from each other is their different characters. At this point, our bodies are insufficient to reflect the differences of our souls. The GeneX Project is the study of reflecting the differences in characters to bodies. And these bodies are blended with the objects in our imaginations with futuristic works, as well as the items we use all the time. The gene that shows these in our bodies is "GeneX". We wanted you to find a GeneX that reminds you of yourself from 10 thousand different GeneXs that are the result of this blending. In short, with all its differences, it means a large family where we can both win and learn.`}
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div className="bg-white shadow rounded p-4 mt-8" onClick={() => setFaq3(!faq3)}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold font-comfortaa uppercase text-lg leading-none text-gray-800">
                HOW CAN I BUY GENEX?
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
                  Minting will take place on this site on the date to be announced. 
                  If you have a whitelist, you can mint GeneX in the pre-sale, if not, 
                  you can mint GeneX in the Public Sale. If you miss the Mint, 
                  you can buy GeneX from OpenSea. We continue to work so that 
                  you can have a high quality and trouble-free minting experience.
                  </p>
                </li>
              </ul>
            )}
          </div>
          <div className="bg-white shadow rounded p-4 mt-8" onClick={() => setFaq4(!faq4)}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold font-comfortaa uppercase text-lg leading-none text-gray-800">
                WHO IS BEYOND GENEX PROJECT?
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
                  You can view our team members from the "Team" section at the bottom. 
                  We have an energetic and highly innovative team. We look forward to meeting with you.
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
