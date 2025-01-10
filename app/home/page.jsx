"use client";

import { useState, useEffect } from "react";
import { experimental_useObject } from "ai/react";
import { questionsSchema } from "../../lib/schemas";

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

export default function ChatWithFiles() {
	const [files, setFiles] = useState([]);
	const [questions, setQuestions] = useState([]);
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
				[
					"application/pdf",
					"image/jpeg",
					"image/png",
					"audio/mpeg",
					"audio/wav",
				].includes(file.type) && file.size <= 10 * 1024 * 1024
		);

		if (validFiles.length !== selectedFiles.length) {
			toast.error(
				"Only PDFs, JPGs, PNGs, MP3s, or WAVs under 10MB are allowed."
			);
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

	const clearFiles = () => {
		setFiles([]);
		setQuestions([]);
	};

	const progress = partialQuestions
		? (partialQuestions.length / 10) * 100
		: 0;

	if (questions.length === 10) {
		return (
			<Quiz
				title={title ?? "Quiz"}
				questions={questions}
				clearPDF={clearFiles}
			/>
		);
	}

	const words = ["PDF", "Image", "Audio", "Video"];
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, 2000); // Change word every 2 seconds

		return () => clearInterval(interval);
	}, [words.length]);

	return (
		<div>
			<Navbar />
			<div className="font-[poppins] flex items-center justify-center mt-48 pd-4 bg-black">
				<h1 className="text-2xl md:text-4xl font-bold text-gray-300">
					Hi 👾 This is{" "}
					<span className="text-white">PrepMate AI</span>
					<br />
					Convert from{" "}
					<span
						className="font-[manrope] inline-block align-bottom text-5xl whitespace-nowrap text-slate-500 [#ffe599] font-bold transition-transform duration-500 ease-in-out"
						style={{
							display: "inline-block",
							width: "6ch", // Adjust to fit the longest word in the list
							textAlign: "left",
						}}
					>
						{words[currentWordIndex]}
					</span>
				</h1>
			</div>
			<div
				className="min-h-[100dvh] w-full flex justify-center"
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
								{"(PDFs, JPGs, PNGs, MP3s, or WAVs only)"}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
				<Card className="w-full max-w-md h-full border-0 sm:border sm:h-fit mt-12">
					<CardHeader className="text-center space-y-6">
						<div className="space-y-2">
							<CardTitle className="text-2xl font-bold">
								Convert File To Quiz
							</CardTitle>
							<CardDescription className="text-base">
								Upload a PDF, JPG, PNG, or audio file to
								transform it into an engaging interactive quiz.
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
									accept="application/pdf,image/jpeg,image/png,audio/mpeg,audio/wav"
									className="absolute inset-0 opacity-0 cursor-pointer"
								/>
								<FileUp className="h-8 w-8 mb-2 text-muted-foreground" />
								<p className="text-sm text-muted-foreground text-center">
									{files.length > 0 ? (
										<span className="font-medium text-foreground">
											{files[0].name}
										</span>
									) : (
										"Drop your PDF, JPG, PNG, or audio file here or click to browse."
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
						</CardFooter>
					)}
				</Card>
			</div>
		</div>
	);
}
