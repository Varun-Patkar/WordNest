import { auth } from "@/auth";
import { redirect } from "next/navigation";
import PostForm from "@/components/PostForm";
import { client } from "@/sanity/lib/client";
import { POST_BY_ID_QUERY } from "@/sanity/lib/queries";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
	const session = await auth();

	if (!session) redirect("/");

	const id = (await params).id;
	const post = await client
		.withConfig({ useCdn: false })
		.fetch(POST_BY_ID_QUERY, { id });

	return (
		<>
			<section className="pink_container !min-h-[230px]">
				<h1 className="heading">Edit your Blog Post</h1>
			</section>
			<PostForm initialData={post} />
		</>
	);
};

export default page;
