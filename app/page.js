"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const router = useRouter()
  const [text, setText] = useState("")

  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }

  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
       <div className="flex justify-center flex-col ml-[10vw] gap-3">
        <p className="text-yellow-300 font-bold text-7xl">Everything you</p>
        <p className="text-yellow-300 font-bold text-7xl">are. In one,</p>
        <p className="text-yellow-300 font-bold text-7xl">simple link in bio.</p>
        <p className="text-yellow-300 font-bold text-xl">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
        <div className="input flex gap-2">
        <input value={text} onChange={(e)=> setText(e.target.value)} type="text" className="px-2 py-2 focus:outline-green-800 rounded-md bg-white text-black" placeholder="Enter your Handle" />
        <button onClick = {() => {createTree()} } className="bg-pink-300 rounded-full px-4 py-4 font-semibold">Claim your Bittree</button>
       </div>
       </div>
       <div className="flex items-center justify-center flex-col mr-[10vw] mt-[15vh]">
        <img src="/home1.png" alt="homepage image" />

       </div>
      </section>

      <section className="bg-blue-500 min-h-[100vh] grid grid-cols-2">
         <div className="flex items-center justify-center flex-col mr-[10vw]">
        <img src="/home2.png" alt="homepage image" className=" w-[35vw] h-[100vh]"/>

       </div>
          <div className="flex justify-center flex-col gap-3">
        <p className="text-yellow-300 font-bold text-7xl">Create and customize your Linktree in minutes</p>
        <p className="text-white font-bold text-2xl">Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.</p>
        <div className="input flex gap-2">
                  <button onClick = {() => {createTree()} } className="bg-pink-300 rounded-full px-4 py-4 font-semibold">Claim your Bittree</button>
       </div>
       </div>
      
      </section>
    </main>
  );
}
