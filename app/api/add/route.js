import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(request) {
  const body = await request.json()

  const client = await clientPromise
  const db = client.db("Linktree")
  const collection = db.collection("links")

  const doc = await collection.findOne({ handle: body.handle })

  if (doc) {
    return NextResponse.json({
      success: false,
      error: true,
      message: "This Linktree already exists!",
      result: null,
    })
  }

  const result = await collection.insertOne(body)

  return NextResponse.json({
    success: true,
    error: false,
    message: "Your Linktree has been generated!",
    result,
  })
}
