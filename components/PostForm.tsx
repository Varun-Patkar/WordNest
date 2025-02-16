"use client";
import React, { useActionState, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { createPost, updatePost } from "@/lib/actions";

type PostFormProps = {
	initialData?: {
		title?: string;
		description?: string;
		category?: string;
		image?: string;
		blogText?: string;
		_id?: string;
	};
};

const PostForm = ({ initialData }: PostFormProps) => {
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [blogText, setblogText] = useState(initialData?.blogText || "");
	const { toast } = useToast();
	const router = useRouter();

	const handleformSubmit = async (prevState: any, formData: FormData) => {
		try {
			const formValues = {
				title: formData.get("title") as string,
				description: formData.get("description") as string,
				category: formData.get("category") as string,
				image: formData.get("image") as string,
				blogText,
			};

			await formSchema.parseAsync(formValues);
			let result;
			if (initialData && initialData._id) {
				// Update post if initialData exists.
				result = await updatePost(initialData._id, formValues);
			} else {
				// Otherwise, create a new post.
				result = await createPost(prevState, formData, blogText);
			}

			if (result.status === "SUCCESS") {
				toast({
					title: "Success",
					description: initialData
						? "Your Blog Post has been updated successfully"
						: "Your Blog Post has been created successfully",
				});
				router.push(`/post/${result._id}`);
			}
			return result;
		} catch (error) {
			if (error instanceof z.ZodError) {
				const fieldErrors = error.flatten().fieldErrors;
				setErrors(fieldErrors as unknown as Record<string, string>);
				toast({
					title: "Error",
					description: "Please check your inputs and try again.",
					variant: "destructive",
				});
				return { ...prevState, error: "Validation failed", status: "ERROR" };
			}
			toast({
				title: "Error",
				description: "An unexpected error has occurred.",
				variant: "destructive",
			});
			return {
				...prevState,
				error: "An unexpected error has occurred.",
				status: "ERROR",
			};
		}
	};

	const [state, formAction, isPending] = useActionState(handleformSubmit, {
		error: "",
		status: "INITIAL",
	});

	return (
		<form action={formAction} className="startup-form">
			<div>
				<label htmlFor="title" className="startup-form_label">
					Title
				</label>
				<Input
					type="text"
					id="title"
					name="title"
					className="startup-form_input"
					required
					placeholder="Blog Post Title"
					defaultValue={initialData?.title || ""}
				/>
				{errors.title && <p className="startup-form_error">{errors.title}</p>}
			</div>
			<div>
				<label htmlFor="description" className="startup-form_label">
					Description
				</label>
				<Textarea
					id="description"
					name="description"
					className="startup-form_textarea"
					required
					placeholder="Short Description of the contents of your Blog Post"
					defaultValue={initialData?.description || ""}
				/>
				{errors.description && (
					<p className="startup-form_error">{errors.description}</p>
				)}
			</div>
			<div>
				<label htmlFor="category" className="startup-form_label">
					Category
				</label>
				<Input
					id="category"
					name="category"
					className="startup-form_input"
					required
					placeholder="Choose a Category (e.g. Technology, Health, Education,...)"
					defaultValue={initialData?.category || ""}
				/>
				{errors.category && (
					<p className="startup-form_error">{errors.category}</p>
				)}
			</div>
			<div>
				<label htmlFor="image" className="startup-form_label">
					Image URL
				</label>
				<Input
					id="image"
					name="image"
					className="startup-form_input"
					required
					placeholder="Paste a image to any image to be shown with your Blog Post"
					defaultValue={initialData?.image || ""}
				/>
				{errors.image && <p className="startup-form_error">{errors.image}</p>}
			</div>
			<div data-color-mode="light">
				<label htmlFor="blogText" className="startup-form_label">
					Blog Post Content
				</label>
				<MDEditor
					value={blogText}
					onChange={(t) => setblogText(t as string)}
					id="blogText"
					preview="edit"
					height={300}
					style={{ borderRadius: 20, overflow: "hidden" }}
					textareaProps={{
						placeholder:
							"Write your Blog Post here (Supports all Markdown options)",
					}}
					previewOptions={{ disallowedElements: ["style"] }}
				/>
				{errors.blogText && (
					<p className="startup-form_error">{errors.blogText}</p>
				)}
			</div>
			<div className="flex space-x-4">
				<Button
					type="submit"
					className="startup-form_btn text-white"
					disabled={isPending}
				>
					{isPending
						? initialData
							? "Updating..."
							: "Posting..."
						: initialData
							? "Update your Blog Post"
							: "Submit your Blog Post"}
					<Send className="size-6 ml-2" />
				</Button>
				{initialData && (
					<Button
						type="button"
						className="startup-form_btn text-white bg-red-500"
						onClick={() => router.push(`/post/${initialData?._id}`)}
					>
						Cancel
					</Button>
				)}
			</div>
		</form>
	);
};

export default PostForm;
