import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const query = (await searchParams).query;
	const params = { search: query || null };
	const { data: posts } = await sanityFetch({ query: POSTS_QUERY, params });
	return (
		<>
			<section className="pink_container">
				<h1 className="heading">
					Write, Share, Inspire,
					<br /> Read, Explore, Connect
				</h1>
				<p className="sub-heading !max-2-3xl">
					Write Blogs, Share Stories, and Connect with a World of Readers.
				</p>
				<SearchForm query={query} />
			</section>
			<section className="section_container">
				<p className="text-30-semibold">
					{query ? `Search results for "${query}"` : "All Blogs"}
				</p>
				<ul className="mt-7 card_grid">
					{posts?.length > 0 ? (
						posts.map((post: StartupCardType, index: number) => (
							<StartupCard key1={post?._id} key={post?._id} post={post} />
						))
					) : (
						<p key={0} className="no-results">
							No Blogs found
						</p>
					)}
				</ul>
			</section>
			<SanityLive />
		</>
	);
}
