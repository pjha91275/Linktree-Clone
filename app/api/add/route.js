import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();

  const rawHandle = body.handle;

  const handle = rawHandle.toLowerCase();

  const client = await clientPromise;
  const db = client.db("Linktree");
  const collection = db.collection("links");

  const existing = await collection.findOne({ handle });

  if (existing) {
    return Response.json({
      success: false,
      error: true,
      message: "This Linktree already exists!",
      result: null,
    });
  }

  const result = await collection.insertOne({
    ...body,
    handle,
  });

  return Response.json({
    success: true,
    error: false,
    message: "Your Linktree has been generated!",
    result,
  });
}
