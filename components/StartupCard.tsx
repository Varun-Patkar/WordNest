import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const StartupCard = ({
	key1,
	post,
}: {
	key1: number;
	post: StartupCardType;
}) => {
	const {
		_createdAt,
		views,
		author: { _id: authorId, name },
		_id,
		title,
		category,
		description,
		image,
	} = post;
	return (
		<li key={key1} className="startup-card group">
			<div className="flex-between">
				<p className="startup_card_date">{formatDate(_createdAt)}</p>
				<div className="flex gao-1.5">
					<EyeIcon className="size-6 text-primary" />
					<span className="text-16-medium">{views}</span>
				</div>
			</div>
			<div className="flex-between mt-5 gap-5">
				<div className="flex-1">
					<Link href={`/user/${authorId}`}>
						<p className="text-16-medium line-clamp-1">{name}</p>
					</Link>
					<Link href={`/post/${_id}`}>
						<h3 className="text-26-semibold line-clamp-1">{title}</h3>
					</Link>
				</div>
				<Link href={`/user/${authorId}`}>
					<Image
						src="https://placehold.co/48x48"
						alt="placeholder"
						width={48}
						height={48}
						className="rounded-full"
					/>
				</Link>
			</div>
			<Link href={`/post/${_id}`}>
				<p className="startup-card_desc">{description}</p>
				<img src={image} alt="placeholder" className="startup-card_img"></img>
			</Link>
			<div className="flex-between gap-3 mt-5">
				<Link href={`/?query=${category}`}>
					<p className="text-16-medium">{category}</p>
				</Link>
				<Button className="startup-card_btn" asChild>
					<Link href={`post/${_id}`}>Details</Link>
				</Button>
			</div>
		</li>
	);
};

export default StartupCard;
