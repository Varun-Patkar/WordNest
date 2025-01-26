"use server";

import { auth } from "@/auth";
import slugify from "slugify";
import { parseServerActionResponse } from "./utils";
import { writeClient } from "@/sanity/lib/write-client";

export const createPost = async (state: any, form: FormData, blogText: string) => {
	const session = await auth();
	if (!session) return parseServerActionResponse({
		error: "Not signed in", status: "ERROR"
	})
	const { title, description, category, link } = Object.fromEntries(Array.from(form).filter(([key]) => key !== "blogText"));
	const slug = slugify(title as string, { lower: true, strict: true });
	try {
		const post = {
			title,
			description,
			category,
			image: link,
			blogText,
			slug: {
				_type: slug,
				current: slug
			},
			author: {
				_type: "reference",
				_ref: session?._id
			},
			views: 0
		}
		const result = await writeClient.create({ _type: "post", ...post })
		return parseServerActionResponse({ ...result, error: "", status: "SUCCESS" });
	} catch (error) {
		console.log(error);
		return parseServerActionResponse({ error: JSON.stringify(error), status: "ERROR" });
	}
}