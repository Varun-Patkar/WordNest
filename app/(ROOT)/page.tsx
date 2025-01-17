import Image from "next/image";
import SearchForm from "../components/SearchForm";

export default function Home() {
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
				<SearchForm />
			</section>
		</>
	);
}
