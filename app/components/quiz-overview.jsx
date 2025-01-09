import { Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { ScrollArea } from "../components/ui/scroll-area";
import { jsPDF } from "jspdf";
export default function QuizReview({ questions, userAnswers }) {
  const answerLabels = ["A", "B", "C", "D"];
  alert("hiiis")
  const pdf = new jsPDF();
  let text = "Questions\n";
  questions.forEach((element, index) => {
    text += `${index + 1}. ${element.question}\n`;
    element.options.forEach((option, i) => {
      text += `    ${String.fromCharCode(97 + i)}. ${option}\n`; // a, b, c, etc.
    });
    text += "\n"; // Add a newline between questions
  });
  
  // Add the text to the PDF
  const margin = 10; // Left margin
  const lineHeight = 10; // Line height
  const pageHeight = pdf.internal.pageSize.height - margin;
  
  // Split text into lines that fit the page width
  const lines = pdf.splitTextToSize(text, pdf.internal.pageSize.width - margin * 2);
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

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Quiz Review</CardTitle>
      </CardHeader>
      <CardContent>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className="mb-8 last:mb-0">
            <h3 className="text-lg font-semibold mb-4">{question.question}</h3>
            <div className="space-y-2">
              {question.options.map((option, optionIndex) => {
                const currentLabel = answerLabels[optionIndex];
                const isCorrect = currentLabel === question.answer;
                const isSelected = currentLabel === userAnswers[questionIndex];
                const isIncorrectSelection = isSelected && !isCorrect;

                return (
                  <div
                    key={optionIndex}
                    className={`flex items-center p-4 rounded-lg ${
                      isCorrect
                        ? 'bg-green-100 dark:bg-green-700/50'
                        : isIncorrectSelection
                        ? 'bg-red-100 dark:bg-red-700/50'
                        : 'border border-border'
                    }`}
                  >
                    <span className="text-lg font-medium mr-4 w-6">{currentLabel}</span>
                    <span className="flex-grow">{option}</span>
                    {isCorrect && (
                      <Check className="ml-2 text-green-600 dark:text-green-400" size={20} />
                    )}
                    {isIncorrectSelection && (
                      <X className="ml-2 text-red-600 dark:text-red-400" size={20} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}