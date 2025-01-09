import { z } from "zod";

// Define the schema for a single question
export const questionSchema = z.object({
  question: z.string(),
  options: z
    .array(z.string())
    .length(4)
    .describe(
      "Four possible answers to the question. Only one should be correct. They should all be of equal lengths."
    ),
  answer: z
    .enum(["A", "B", "C", "D"])
    .describe(
      "The correct answer, where A is the first option, B is the second, and so on."
    ),
});

// Define the type for a single question (not necessary in JS, but useful for documentation)
export const Question = questionSchema;

// Define the schema for an array of 10 questions
export const questionsSchema = z.array(questionSchema).length(10);
