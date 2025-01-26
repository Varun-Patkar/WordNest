import { client } from "@/sanity/lib/client";
import { POSTS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import React from "react";
import PostCard, { PostCardType } from "./PostCard";

const UserPosts = async ({ id }: { id: number }) => {
	const posts = await client.fetch(POSTS_BY_AUTHOR_QUERY, { id });
	return (
		<>
			{posts.length > 0 ? (
				posts.map((post: PostCardType) => (
					<PostCard key1={post._id} post={post} key={post._id} />
				))
			) : (
				<p className="no-result">No posts yet</p>
			)}
		</>
	);
};

export default UserPosts;
