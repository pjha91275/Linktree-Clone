"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

const Generate = () => {
  const searchParams = useSearchParams();

  const [links, setlinks] = useState([{ link: "", linktext: "" }]);
  const [handle, sethandle] = useState(searchParams.get("handle") || "");
  const [pic, setpic] = useState("");
  const [desc, setdesc] = useState("");

  const handleChange = (index, link, linktext) => {
    setlinks((prevLinks) => {
      const newLinks = [...prevLinks];
      newLinks[index] = { link, linktext };
      return newLinks;
    });
  };

  const addLink = () => {
    setlinks(links.concat([{ link: "", linktext: "" }]));
  };

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links: links,
      handle: handle,
      pic: pic,
      desc: desc,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const r = await fetch("http://localhost:3000/api/add", requestOptions);
      const result = await r.json();
      if (result.success) {
        toast.success(result.message);
        setlinks([{ link: "", linktext: "" }]);
        sethandle("");
        setpic("");
        setdesc("");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-gray-800 font-sans">
      {/* Added pt-32 to push content below the absolute Navbar */}
      <div className="container mx-auto px-4 pt-52 pb-12 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Form Section */}
          <div className="flex flex-col gap-8">
            <header className="mb-6">
              <h1 className="font-extrabold text-5xl text-white mb-3 tracking-tight">
                Create your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-lime-300">BitTree</span>
              </h1>
              <p className="text-white text-xl font-medium">Connect your world in one single link.</p>
            </header>

            {/* Step 1 */}
            <div className="group bg-white rounded-3xl shadow-sm hover:shadow-md border border-gray-100 p-8 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg shadow-indigo-200">1</div>
                <h2 className="font-bold text-2xl text-gray-800">Claim your Handle</h2>
              </div>
              <div className="relative">
                <input
                  value={handle}
                  onChange={(e) => sethandle(e.target.value)}
                  type="text"
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-indigo-500 rounded-2xl px-6 py-4 text-lg font-medium outline-none transition-all placeholder:text-gray-400 hover:bg-gray-100"
                  placeholder="Choose a Handle (e.g., pjha)"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="group bg-white rounded-3xl shadow-sm hover:shadow-md border border-gray-100 p-8 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg shadow-indigo-200">2</div>
                <h2 className="font-bold text-2xl text-gray-800">Add Links</h2>
              </div>

              <div className="flex flex-col gap-5">
                {links.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-indigo-200 transition-colors">
                    <input
                      value={item.linktext}
                      onChange={(e) => handleChange(index, item.link, e.target.value)}
                      type="text"
                      className="flex-1 bg-white border-2 border-transparent focus:border-indigo-500 rounded-xl px-5 py-3 outline-none font-medium text-gray-700 transition-all placeholder:text-gray-400"
                      placeholder="Link Title"
                    />
                    <input
                      value={item.link}
                      onChange={(e) => handleChange(index, e.target.value, item.linktext)}
                      type="text"
                      className="flex-1 bg-white border-2 border-transparent focus:border-indigo-500 rounded-xl px-5 py-3 outline-none font-medium text-gray-700 transition-all placeholder:text-gray-400"
                      placeholder="URL"
                    />
                  </div>
                ))}

                <button
                  onClick={addLink}
                  className="mt-2 py-4 px-6 bg-gray-900 hover:bg-black text-white font-bold rounded-2xl transition transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-lg"
                >
                  <span className="text-lg">+ Add Another Link</span>
                </button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group bg-white rounded-3xl shadow-sm hover:shadow-md border border-gray-100 p-8 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg shadow-indigo-200">3</div>
                <h2 className="font-bold text-2xl text-gray-800">Profile Details</h2>
              </div>

              <div className="flex flex-col gap-5">
                <input
                  value={pic}
                  onChange={(e) => setpic(e.target.value)}
                  type="text"
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-indigo-500 rounded-2xl px-6 py-4 text-lg font-medium outline-none transition-all placeholder:text-gray-400 hover:bg-gray-100"
                  placeholder="Profile Picture URL (https://...)"
                />
                <input
                  value={desc}
                  onChange={(e) => setdesc(e.target.value)}
                  type="text"
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-indigo-500 rounded-2xl px-6 py-4 text-lg font-medium outline-none transition-all placeholder:text-gray-400 hover:bg-gray-100"
                  placeholder="Bio / Description"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              disabled={!pic || !handle || !links[0].linktext}
              onClick={submitLinks}
              className="w-full py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-extrabold text-2xl rounded-3xl shadow-xl hover:shadow-indigo-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:-translate-y-1 hover:brightness-110"
            >
              Create your BitTree
            </button>
          </div>

          {/* Right Column: Mobile Preview */}
          {/* Adjusted sticky top to accommodate navbar scrolling if needed, but since navbar is absolute, top-24 pushes it down initially */}
          <div className="hidden lg:flex justify-center items-start sticky top-54 h-[calc(100vh-6rem)]">
            {/* Phone Mockup Container */}
            <div className="relative border-gray-900 bg-gray-900 border-[12px] rounded-[3rem] h-[640px] w-[340px] shadow-2xl flex flex-col items-center overflow-hidden ring-8 ring-gray-900/20 transform transition-transform duration-500 hover:scale-[1.01]">
              {/* Notch */}
              <div className="absolute top-0 w-36 h-7 bg-gray-900 rounded-b-2xl z-20"></div>

              {/* Screen Content */}
              <div
                className="w-full h-full bg-cover bg-center overflow-y-auto scrollbar-hide pt-14 pb-8 px-5 flex flex-col items-center relative"
                style={{ backgroundImage: 'linear-gradient(to bottom right, #EEF2FF, #E0E7FF)' }}
              >
                {/* Status Bar Mock */}
                <div className="absolute top-2 w-full flex justify-between px-6 text-[10px] font-bold text-gray-800 opacity-60">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <span>Signal</span>
                    <span>Wifi</span>
                    <span>Batt</span>
                  </div>
                </div>

                {/* Avatar */}
                <div className="mb-6 relative group">
                  <div className="w-28 h-28 rounded-full border-[3px] border-white/80 overflow-hidden bg-white shadow-md">
                    {pic ? (
                      <img src={pic} alt="Profile" className="w-full h-full object-cover" onError={(e) => e.target.src = 'https://via.placeholder.com/150'} />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300 text-4xl bg-gray-100">
                        <span className="opacity-50">?</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Handle & Desc */}
                <div className="text-center mb-8 w-full">
                  <h2 className="font-bold text-xl text-gray-900 tracking-tight">@{handle || "username"}</h2>
                  <p className="text-sm text-gray-500 mt-2 px-2 font-medium leading-relaxed">{desc || "Your bio will appear right here."}</p>
                </div>

                {/* Links List */}
                <div className="w-full flex flex-col gap-3 z-10">
                  {links.map((item, index) => (
                    item.linktext && (
                      <div key={index} className="w-full bg-white hover:bg-indigo-50 border border-indigo-100/50 text-gray-800 font-semibold py-4 px-6 rounded-2xl text-center shadow-sm hover:shadow-md transition-all text-sm cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis flex items-center justify-between group">
                        <span className="mx-auto group-hover:-translate-x-1 transition-transform">{item.linktext}</span>
                      </div>
                    )
                  ))}
                  {links.length === 0 || (links.length === 1 && !links[0].linktext) && (
                    <div className="w-full bg-white/50 border-2 border-dashed border-indigo-200 text-indigo-300 py-6 rounded-2xl text-center text-sm font-medium">
                      Add links to see them here
                    </div>
                  )}
                </div>

                {/* Branding Footer */}
                <div className="mt-auto pt-8 flex flex-col items-center">
                  <div className="w-8 h-1 bg-gray-300 rounded-full mb-2"></div>
                  <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase opacity-70">BitTree</span>
                </div>
              </div>
            </div>
          </div>

        </div>
        <ToastContainer position="bottom-right" theme="colored" />
      </div>
    </div>
  );
};

export default Generate;
