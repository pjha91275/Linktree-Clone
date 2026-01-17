import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();

  const rawHandle = body.handle;

  // ✅ 1. Validate handle FIRST (no DB hit)
  if (
    !rawHandle ||
    rawHandle.length < 3 ||
    rawHandle.length > 30 ||
    !/^[a-z0-9]+$/i.test(rawHandle)
  ) {
    return Response.json(
      { success: false, error: true, message: "Invalid handle" },
      { status: 400 }
    );
  }

  // ✅ 2. Normalize handle
  const handle = rawHandle.toLowerCase();

  const client = await clientPromise;
  const db = client.db("Linktree");
  const collection = db.collection("links");

  // ✅ 3. Correct MongoDB query
  const existing = await collection.findOne({ handle });

  if (existing) {
    return Response.json({
      success: false,
      error: true,
      message: "This Linktree already exists!",
      result: null,
    });
  }

  // ✅ 4. Insert normalized data
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
