"use client"
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react'

const Generate = () => {

    const [link, setlink] = useState("")
    const [handle, sethandle] = useState("")
    const [linktext, setlinktext] = useState("")
    const [pic, setpic] = useState("")

    const submitLinks = async () => {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "link": link,
  "linktext": linktext,
  "handle": handle
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

const r =  await fetch("http://localhost:3000/api/add", requestOptions)
const result = await r.json()
toast(r.message)
    }
  
  return (
    <div className="bg-[#E9C0E9] min-h-screen grid grid-cols-2">
      <div className="col1 flex justify-center items-center flex-col text-gray-900">
        <div className="flex flex-col gap-5 my-8">
          <h1 className="font-bold text-4xl">Craete your Bittree</h1>
          <div className="item">
            <h2 className="font-semibold text-2xl">
              Step 1: Claim your Handle
            </h2>
            <div className="mx-4">
              <input value={handle || ""} onChange={e=>{sethandle(e.target.value)}}
                type="text"
                className="bg-white px-4 py-2 my-2 focus:outline-pink-500 rounded-full"
                placeholder="Choose a Handle"
              />
            </div>
          </div>

          <div className="item">
            <h2 className="font-semibold text-2xl">
              Step 2: Add Links
            </h2>
            <div className="mx-4 flex gap-2">
              <input value={link || ""} onChange={e=>{setlink(e.target.value)}}
                type="text"
                className="bg-white px-4 py-2 my-2 focus:outline-pink-500 rounded-full"
                placeholder="Enter link test"
              />
              <input value={linktext || ""} onChange={e=>{setlinktext(e.target.value)}}
                type="text"
                className="bg-white px-4 py-2 my-2 focus:outline-pink-500 rounded-full"
                placeholder="Enter link"
              />
              <button className="p-5 py-2 mx-2 bg-slate-900 text-white font-bold rounded-3xl">Add Link</button>
            </div>
          </div>

          <div className="item">
            <h2 className="font-semibold text-2xl">
              Step 3: Add Picture and Finalize
            </h2>
            <div className="mx-4 flex flex-col">
              <input value={pic || ""} onChange={e=>{setpic(e.target.value)}}
                type="text"
                className="bg-white px-4 py-2 my-2 focus:outline-pink-500 rounded-full"
                placeholder="Chose a Handle"
              />
                            <button className="p-5 py-2 mx-2 my-5 w-fit bg-slate-900 text-white font-bold rounded-3xl">Create your BitLink</button>

            </div>
          </div>
        </div>
      </div>

      <div className="col2 w-full h-screen bg-[#E9C0E9]">
        <img className='h-full object-contain' src="/generate.png" alt="Generate your links" />
        <ToastContainer />
      </div>
      
    </div>
  );
};

export default Generate;
