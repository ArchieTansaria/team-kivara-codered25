const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyB8lAQnAoqdNON7RvNPA9MLmZBafOTlNEQ");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export async function POST(req) {
	try {
		// Parse the request body
		const { question, options, correctAnswer } = await req.json();
		console.log(question);
		const prompt = `Explain why the correct answer to the following question is "${correctAnswer}": ${question} options : ${options}`;

		const result = await model.generateContent(prompt);
		// Correct Gemini endpoint and payload structure
		//   const response = await fetch(
		//     "https://generativelanguage.googleapis.com/v1/models/gemini-1p5:generateText",
		//     {
		//       method: "POST",
		//       headers: {
		//         "Content-Type": "application/json",
		//         "Authorization": `Bearer ${process.env.GOOGLE_GEMMA_API_KEY}`,
		//       },
		//       body: JSON.stringify({
		//         prompt: `Explain why the correct answer to the following question is "${correctAnswer}": ${question}`,
		//         temperature: 0.7, // Optional: adjust creativity level
		//         maxOutputTokens: 100, // Adjust as needed
		//         candidateCount: 1, // Request a single explanation
		//       }),
		//     }
		//   );

		// Check if the response is OK
		//   if (!result.response.ok) {
		//     throw new Error(`HTTP error! status: ${result.response.status}`);
		//   }

		// Parse the response data
		//   const data = await result.response.json();

		return new Response(
			JSON.stringify({
				explanation:
					result?.response?.candidates?.[0]?.content?.parts?.[0]
						?.text || "No explanation available.",
			}),
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error fetching explanation:", error.message);
		return new Response(
			JSON.stringify({
				error: error.message || "Failed to fetch explanation.",
			}),
			{ status: 500 }
		);
	}
}
