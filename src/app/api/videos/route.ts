import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(); // match the same DB as POST
    const videos = await db.collection("videos").find({}).toArray();

    // Convert ObjectId → string
    const safeVideos = videos.map((v) => ({
      ...v,
      _id: v._id.toString(),
    }));

    return NextResponse.json(safeVideos);
  } catch (err) {
    console.error("GET error:", err);
    return NextResponse.json(
      { error: "Failed to fetch videos" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const data = await req.json();
    const result = await db.collection("videos").insertOne(data);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: "Failed to add video" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const data = await req.json();
    const { _id, title, thumbnail, url, category, industry } = data;
    if (!_id)
      return NextResponse.json({ error: "Missing id" }, { status: 400 });

    await db
      .collection("videos")
      .updateOne(
        { _id: new ObjectId(_id) },
        { $set: { title, thumbnail, url, category, industry } }
      );

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to update video" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const client = await clientPromise;
    const db = client.db();
    await db.collection("videos").deleteOne({ _id: new ObjectId(id) });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete video" },
      { status: 500 }
    );
  }
}
