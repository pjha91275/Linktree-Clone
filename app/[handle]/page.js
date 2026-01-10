import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const handle = (await params).handle
  const client = await clientPromise;
  const db = client.db("bittree")
  const collection = db.collection("links")

  // If the handle is already claimed, you cannot create the bittree
  const item = await collection.findOne({ handle: handle })

  if (!item) {
    return notFound()
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 justify-center items-center py-10 px-4">
      {item && (
        <div className="bg-gradient-to-b from-white/90 via-purple-50/80 to-pink-50/80 backdrop-blur-md rounded-[3rem] shadow-2xl p-8 sm:p-12 w-full max-w-md border border-white/50 flex flex-col items-center gap-6">

          {/* Profile Section */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="relative group">
              {/* Decorative Blur Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500 animate-pulse"></div>

              {/* Avatar Container - Circle Shape & Vibrant Gradient */}
              <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 transform transition duration-500 group-hover:rotate-6 group-hover:scale-105">
                <img
                  src={item.pic}
                  className="rounded-full border-4 border-white/90 w-36 h-36 object-cover shadow-inner bg-white"
                  alt={`${item.handle}'s profile`}
                />
              </div>
            </div>

            <div className="text-center mt-2">
              <h1 className="font-extrabold text-3xl text-gray-900 flex items-center justify-center gap-2">
                @{item.handle}
                <span className="text-blue-500" title="Verified">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.491 4.491 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                </span>
              </h1>
              <p className="text-gray-500 font-medium mt-2">{item.desc}</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full flex flex-col gap-4 mt-2">
            {item.links.map((linkItem, index) => (
              <Link key={index} href={linkItem.link} target="_blank" className="w-full group">
                <div className="bg-white border text-gray-800 font-bold py-4 px-6 rounded-2xl shadow-sm group-hover:shadow-md group-hover:scale-[1.02] transition-all duration-300 text-center flex items-center justify-between border-gray-100 hover:border-gray-200">
                  <span className="w-full text-center">{linkItem.linktext}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Branding */}
          <div className="mt-8 opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">Created with <span className="text-gray-800">BitTree</span></span>
          </div>

        </div>
      )}
    </div>
  )
}