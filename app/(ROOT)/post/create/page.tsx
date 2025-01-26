import { auth } from "@/auth";
import PostForm from "@/components/PostForm";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
	const session = await auth();
	console.log(session);

	if (!session) redirect("/");

	return (
		<>
			<section className="pink_container !min-h-[230px]">
				<h1 className="heading">Create your Blog Post</h1>
			</section>
			<PostForm />
		</>
	);
};

export default page;
