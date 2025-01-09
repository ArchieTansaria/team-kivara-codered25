"use client";
import { useState } from "react";
import { experimental_useObject } from "ai/react";
import { questionsSchema } from "../lib/schemas";

import { toast } from "sonner";
import { FileUp, Plus, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import Navbar from "../components/navbar";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
	CardDescription,
} from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import Quiz from "../components/quiz";
import { Link } from "../components/ui/link";
import NextLink from "next/link";
import { generateQuizTitle } from "./actions";
import { AnimatePresence, motion } from "framer-motion";
import { VercelIcon, GitIcon } from "../components/icons";
import { div } from "framer-motion/client";

export default function ChatWithFiles() {
	const [files, setFiles] = useState([]); // No types here
	const [questions, setQuestions] = useState([]); // No types here
	const [isDragging, setIsDragging] = useState(false);
	const [title, setTitle] = useState("");

	const {
		submit,
		object: partialQuestions,
		isLoading,
	} = experimental_useObject({
		api: "/api/generate-quiz",
		schema: questionsSchema,
		initialValue: undefined,
		onError: (error) => {
			toast.error("Failed to generate quiz. Please try again.");
			setFiles([]);
		},
		onFinish: ({ object }) => {
			setQuestions(object ?? []);
		},
	});

	const handleFileChange = (e) => {
		const isSafari = /^((?!chrome|android).)*safari/i.test(
			navigator.userAgent
		);

		if (isSafari && isDragging) {
			toast.error(
				"Safari does not support drag & drop. Please use the file picker."
			);
			return;
		}

		const selectedFiles = Array.from(e.target.files || []);
		const validFiles = selectedFiles.filter(
			(file) =>
				file.type === "application/pdf" && file.size <= 5 * 1024 * 1024
		);
		console.log(validFiles);

		if (validFiles.length !== selectedFiles.length) {
			toast.error("Only PDF files under 5MB are allowed.");
		}

		setFiles(validFiles);
	};

	const encodeFileAsBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});
	};

	const handleSubmitWithFiles = async (e) => {
		e.preventDefault();
		const encodedFiles = await Promise.all(
			files.map(async (file) => ({
				name: file.name,
				type: file.type,
				data: await encodeFileAsBase64(file),
			}))
		);
		submit({ files: encodedFiles });
		const generatedTitle = await generateQuizTitle(encodedFiles[0].name);
		setTitle(generatedTitle);
	};

	const clearPDF = () => {
		setFiles([]);
		setQuestions([]);
	};

	const progress = partialQuestions ? (partialQuestions.length / 4) * 100 : 0;

	if (questions.length === 4) {
		return (
			<Quiz
				title={title ?? "Quiz"}
				questions={questions}
				clearPDF={clearPDF}
			/>
		);
	}

	return (
		<div>
			<Navbar />
			<div
				className=" min-h-[100dvh] w-full pt-36 flex justify-center"
				onDragOver={(e) => {
					e.preventDefault();
					setIsDragging(true);
				}}
				onDragExit={() => setIsDragging(false)}
				onDragEnd={() => setIsDragging(false)}
				onDragLeave={() => setIsDragging(false)}
				onDrop={(e) => {
					e.preventDefault();
					setIsDragging(false);
					console.log(e.dataTransfer.files);
					handleFileChange({
						target: { files: e.dataTransfer.files },
					});
				}}
			>
				<AnimatePresence>
					{isDragging && (
						<motion.div
							className="fixed pointer-events-none dark:bg-zinc-900/90 h-dvh w-dvw z-10 justify-center items-center flex flex-col gap-1 bg-zinc-100/90"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<div>Drag and drop files here</div>
							<div className="text-sm dark:text-zinc-400 text-zinc-500">
								{"(PDFs only)"}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
				<Card className="w-full max-w-md h-full border-0 sm:border sm:h-fit mt-12">
					<CardHeader className="text-center space-y-6">
						<div className="mx-auto flex items-center justify-center space-x-2 text-muted-foreground">
							<div className="rounded-full bg-primary/10 p-2">
								<FileUp className="h-6 w-6" />
							</div>
							<Plus className="h-4 w-4" />
							<div className="rounded-full bg-primary/10 p-2">
								<Loader2 className="h-6 w-6" />
							</div>
						</div>
						<div className="space-y-2">
							<CardTitle className="text-2xl font-bold">
								Convert PDF To Quiz
							</CardTitle>
							<CardDescription className="text-base">
								Upload a PDF to transform it into an engaging
								interactive quiz, powered by advanced AI
								capabilities.
							</CardDescription>
						</div>
					</CardHeader>
					<CardContent>
						<form
							onSubmit={handleSubmitWithFiles}
							className="space-y-4"
						>
							<div
								className={`relative flex flex-col items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 transition-colors hover:border-muted-foreground/50`}
							>
								<input
									type="file"
									onChange={handleFileChange}
									accept="application/pdf"
									className="absolute inset-0 opacity-0 cursor-pointer"
								/>
								<FileUp className="h-8 w-8 mb-2 text-muted-foreground" />
								<p className="text-sm text-muted-foreground text-center">
									{files.length > 0 ? (
										<span className="font-medium text-foreground">
											{files[0].name}
										</span>
									) : (
										<span>
											Drop your PDF here or click to
											browse.
										</span>
									)}
								</p>
							</div>
							<Button
								type="submit"
								className="w-full"
								disabled={files.length === 0}
							>
								{isLoading ? (
									<span className="flex items-center space-x-2">
										<Loader2 className="h-4 w-4 animate-spin" />
										<span>Generating Quiz...</span>
									</span>
								) : (
									"Generate Quiz"
								)}
							</Button>
						</form>
					</CardContent>
					{isLoading && (
						<CardFooter className="flex flex-col space-y-4">
							<div className="w-full space-y-1">
								<div className="flex justify-between text-sm text-muted-foreground">
									<span>Progress</span>
									<span>{Math.round(progress)}%</span>
								</div>
								<Progress value={progress} className="h-2" />
							</div>
							<div className="w-full space-y-2">
								<div className="grid grid-cols-6 sm:grid-cols-4 items-center space-x-2 text-sm">
									<div
										className={`h-2 w-2 rounded-full ${
											isLoading
												? "bg-yellow-500/50 animate-pulse"
												: "bg-muted"
										}`}
									/>
									<span className="text-muted-foreground text-center col-span-4 sm:col-span-2">
										{partialQuestions
											? `Generating question ${
													partialQuestions.length + 1
											  } of 4`
											: "Analyzing PDF content"}
									</span>
								</div>
							</div>
						</CardFooter>
					)}
				</Card>
			</div>
		</div>
	);
}
