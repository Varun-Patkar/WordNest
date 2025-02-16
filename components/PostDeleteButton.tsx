"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FaTrash } from "react-icons/fa";

export default function PostDeleteButton({ postId }: { postId: string }) {
	const router = useRouter();
	const { toast } = useToast();
	const [isDeleting, setIsDeleting] = useState(false);

	async function handleDelete() {
		if (!confirm("Are you sure you want to delete this post?")) return;
		setIsDeleting(true);
		try {
			// Fixed string interpolation with backticks
			const res = await fetch(`/api/auth/deletePost?id=${postId}`, {
				method: "DELETE",
			});
			const data = await res.json();
			if (res.ok && data.status === "SUCCESS") {
				toast({ title: "Deleted", description: "Post deleted successfully" });
				router.push("/");
			} else {
				toast({
					title: "Error",
					description: "Failed to delete post",
					variant: "destructive",
				});
			}
		} catch (err) {
			toast({
				title: "Error",
				description: "Failed to delete post",
				variant: "destructive",
			});
		}
		setIsDeleting(false);
	}

	return (
		<Button
			variant="destructive"
			onClick={handleDelete}
			disabled={isDeleting}
			className="startup-form_btn flex items-center m-4 text-white"
		>
			<FaTrash className="mr-2" />
			{isDeleting ? "Deleting..." : "Delete Post"}
		</Button>
	);
}
