import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const Navbar = async () => {
	const session = await auth();
	return (
		<header className="px-5 py-3 bg-white shadow-sm font-work-sans">
			<nav className="flex justify-between items-center">
				<Link href="/">
					<Image src="/icon.png" alt="Logo" width={144} height={30} />
				</Link>
				<div className="flex items-center gap-5 text-black">
					{session && session?.user ? (
						<>
							<Link href="/post/create">
								<span className="max-sm:hidden">Create</span>
								<BadgePlus className="size-6 sm:hidden" />
							</Link>
							<form
								action={async () => {
									"use server";
									await signOut({ redirectTo: "/" });
								}}
							>
								<button type="submit">
									<span className="max-sm:hidden">Log Out</span>
									<LogOut className="size-6 sm:hidden text-red-500" />
								</button>
							</form>
							<Link href={`/user/${session?.id}`}>
								<Avatar className="size-10">
									<AvatarImage
										src={session?.user?.image || ""}
										alt={session?.user?.name || ""}
									/>
									<AvatarFallback>AV</AvatarFallback>
								</Avatar>
							</Link>
						</>
					) : (
						<>
							<form
								action={async () => {
									"use server";
									await signIn("github");
								}}
							>
								<button type="submit">Log In</button>
							</form>
						</>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
