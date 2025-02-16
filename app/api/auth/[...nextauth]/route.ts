import { handlers } from '@/auth';
import { NextResponse } from "next/server";
import { deletePost } from "@/lib/actions";

export const { GET, POST } = handlers;

export async function DELETE(request: Request) {
	const { searchParams } = new URL(request.url);
	const id = searchParams.get("id");
	if (!id) {
		return NextResponse.json({ error: "Missing post id" }, { status: 400 });
	}
	try {
		const result = await deletePost(id);
		return NextResponse.json(result);
	} catch (error) {
		console.error("Error deleting post:", error);
		return NextResponse.json({ error: "Failed to delete post", details: error }, { status: 500 });
	}
}