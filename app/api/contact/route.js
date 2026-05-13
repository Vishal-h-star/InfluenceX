import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Inquiry from "@/models/Inquiry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, brandName, budget, message } = body || {};

    if (!name || !email || !brandName || !budget || !message) {
      return NextResponse.json(
        { ok: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    await dbConnect();
    const doc = await Inquiry.create({ name, email, brandName, budget, message });

    return NextResponse.json(
      { ok: true, id: doc._id.toString() },
      { status: 201 }
    );
  } catch (err) {
    console.error("[POST /api/contact]", err);
    const message =
      err?.name === "ValidationError"
        ? Object.values(err.errors)[0]?.message || "Validation failed."
        : err?.message || "Something went wrong. Please try again.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
