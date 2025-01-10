import { useState } from "react";
import axios from "axios";
import { Check, X } from "lucide-react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../components/ui/card";
import { jsPDF } from "jspdf";
export default function QuizReview({ questions, userAnswers }) {
	const answerLabels = ["A", "B", "C", "D"];
	const pdf = new jsPDF();
	let text = "Questions\n";
	questions.forEach((element, index) => {
		text += `${index + 1}. ${element.question}\n`;
		element.options.forEach((option, i) => {
			text += `${String.fromCharCode(97 + i)}. ${option}\n`; // a, b, c, etc.
		});
		text += "\n"; // Add a newline between questions
	});
	const margin = 10; // Left margin
	const lineHeight = 10; // Line height
	const pageHeight = pdf.internal.pageSize.height - margin;

	// Split text into lines that fit the page width
	const lines = pdf.splitTextToSize(
		text,
		pdf.internal.pageSize.width - margin * 2
	);
	let cursorY = margin;

	lines.forEach((line) => {
		if (cursorY + lineHeight > pageHeight) {
			pdf.addPage(); // Add a new page if the current one is full
			cursorY = margin;
		}
		pdf.text(line, margin, cursorY);
		cursorY += lineHeight;
	});

	// Save the PDF
	pdf.save("sample.pdf");
	const [explanations, setExplanations] = useState({});
	const [loadingExplanation, setLoadingExplanation] = useState(false);
	const fetchExplanation = async (question, options, correctAnswer) => {
		setLoadingExplanation(true);

		try {
			const response = await axios.post("/api/explanation", {
				question,
				options,
				correctAnswer,
			});
			return response.data.explanation || "No explanation available.";
		} catch (error) {
			console.error("Error fetching explanation:", error);
			return "Failed to fetch explanation.";
		} finally {
			setLoadingExplanation(false);
		}
	};

	const handleExplanation = async (
		questionIndex,
		options,
		question,
		correctAnswer
	) => {
		if (!explanations[questionIndex]) {
			const explanation = await fetchExplanation(
				question,
				options,
				correctAnswer
			);
			setExplanations((prev) => ({
				...prev,
				[questionIndex]: explanation,
			}));
		}
	};

	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle className="text-2xl font-bold">
					Quiz Review
				</CardTitle>
			</CardHeader>
			<CardContent>
				{questions.map((question, questionIndex) => (
					<div key={questionIndex} className="mb-8 last:mb-0">
						<h3 className="text-lg font-semibold mb-4">
							{question.question}
						</h3>
						<div className="space-y-2">
							{question.options.map((option, optionIndex) => {
								const currentLabel = answerLabels[optionIndex];
								const isCorrect =
									currentLabel === question.answer;
								const isSelected =
									currentLabel === userAnswers[questionIndex];
								const isIncorrectSelection =
									isSelected && !isCorrect;

								return (
									<div
										key={optionIndex}
										className={`flex items-center p-4 rounded-lg ${
											isCorrect
												? "bg-green-100 dark:bg-green-700/50"
												: isIncorrectSelection
												? "bg-red-100 dark:bg-red-700/50"
												: "border border-border"
										}`}
									>
										<span className="text-lg font-medium mr-4 w-6">
											{currentLabel}
										</span>
										<span className="flex-grow">
											{option}
										</span>
										{isCorrect && (
											<Check
												className="ml-2 text-green-600 dark:text-green-400"
												size={20}
											/>
										)}
										{isIncorrectSelection && (
											<>
												<X
													className="ml-2 text-red-600 dark:text-red-400"
													size={20}
												/>
												<button
													className="ml-4 text-blue-500 underline"
													onClick={() =>
														handleExplanation(
															questionIndex,
															question.option,
															question.question,
															question.answer
														)
													}
												>
													Explain
												</button>
											</>
										)}
									</div>
								);
							})}
						</div>
						{explanations[questionIndex] && (
							<div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
								<p>{explanations[questionIndex]}</p>
							</div>
						)}
						{loadingExplanation && <p>Loading explanation...</p>}
					</div>
				))}
			</CardContent>
		</Card>
	);
}
