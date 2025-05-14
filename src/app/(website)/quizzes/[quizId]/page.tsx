"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import JobRightFit from "../../jobBoard/_components/JobRightFit";
import { quizData } from "../_components/data/quiz-data";

export default function QuizPage({ params }: { params: { quizId: string } }) {
  const router = useRouter();
  const { quizId } = params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [currentQuiz, setCurrentQuiz] = useState<any>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [multiSelectAnswers, setMultiSelectAnswers] = useState<
    Record<number, string[]>
  >({});

  useEffect(() => {
    // Find the quiz data based on the quizId
    const quiz = quizData.find((q) => q.id === quizId);
    if (quiz) {
      setCurrentQuiz(quiz);
    } else {
      // Handle case where quiz doesn't exist
      router.push("/");
    }
  }, [quizId, router]);

  if (!currentQuiz) {
    return (
      <div className="container mx-auto p-8 text-center">Loading quiz...</div>
    );
  }

  const handleAnswerSelect = (questionIndex: number, value: string) => {
    setAnswers({
      ...answers,
      [questionIndex]: value,
    });
  };

  const handleMultiSelectAnswerToggle = (
    questionIndex: number,
    value: string,
  ) => {
    const currentValues = multiSelectAnswers[questionIndex] || [];

    // If "None" is selected, clear all other selections
    if (value === "none") {
      setMultiSelectAnswers({
        ...multiSelectAnswers,
        [questionIndex]: currentValues.includes("none") ? [] : ["none"],
      });
      return;
    }

    // If any other option is selected, remove "None" if it exists
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value && v !== "none")
      : [...currentValues.filter((v) => v !== "none"), value];

    setMultiSelectAnswers({
      ...multiSelectAnswers,
      [questionIndex]: newValues,
    });
  };

  const handleSubmit = () => {
    // For certification quiz, we need to handle differently
    if (quizId === "certification-match") {
      // Get the answers we need for certification recommendations
      const currentCertifications = multiSelectAnswers[0] || [];
      const pmExperience = answers[3] || "0-1"; // Default to entry level if not answered
      const industry = answers[4] || "technology"; // Default to technology if not answered

      // Navigate to certification recommendations page
      router.push(
        `/quizzes/certifications?certs=${currentCertifications.join(",")}&exp=${pmExperience}&industry=${industry}`,
      );
      return;
    }

    // For other quizzes, use the existing logic
    // Count the frequency of each answer
    const answerCounts: Record<string, number> = {};

    Object.values(answers).forEach((answer) => {
      answerCounts[answer] = (answerCounts[answer] || 0) + 1;
    });

    // Find the most frequent answer
    let mostFrequentAnswer = "";
    let highestCount = 0;

    Object.entries(answerCounts).forEach(([answer, count]) => {
      if (count > highestCount) {
        mostFrequentAnswer = answer;
        highestCount = count;
      }
    });

    // Determine the quiz type
    let quizType = "role";
    if (quizId === "leadership-style") {
      quizType = "leadership";
    } else if (quizId === "industry-match") {
      quizType = "industry";
    }

    // For leadership and industry quizzes, we need to pass the counts to handle special cases
    const queryParams =
      quizType === "role"
        ? `role=${mostFrequentAnswer}&type=${quizType}`
        : `role=${mostFrequentAnswer}&type=${quizType}&counts=${encodeURIComponent(JSON.stringify(answerCounts))}`;

    // Navigate to results page with the most frequent answer
    router.push(`/quizzes/results?${queryParams}`);
  };

  // Check if all questions have been answered
  const allQuestionsAnswered = currentQuiz.questions.every(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (question: any, index: number) => {
      if (question.multiSelect) {
        return (
          multiSelectAnswers[index] && multiSelectAnswers[index].length > 0
        );
      }
      return answers[index] !== undefined;
    },
  );

  return (
    <>
      <Header subtitile="Find the path that works for you!">
        Discover Your Project{" "}
        <span className="text-[#FFA400] underline"> Management</span> {"  "}Path
      </Header>
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-2xl font-bold mb-2">{currentQuiz.title}</h1>
        <p className="text-gray-600 mb-8">{currentQuiz.description}</p>

        <div className="space-y-8">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {currentQuiz.questions.map((question: any, index: number) => (
            <div key={index} className="bg-blue-50 rounded-lg p-6">
              <h2 className="font-semibold mb-4">
                Question {index + 1}: {question.question}
              </h2>

              {question.multiSelect ? (
                <div className="space-y-3">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {question.options.map((option: any) => (
                    <div
                      key={option.value}
                      className="flex items-start space-x-2"
                    >
                      <Checkbox
                        id={`q${index}-${option.value}`}
                        checked={(multiSelectAnswers[index] || []).includes(
                          option.value,
                        )}
                        onCheckedChange={() =>
                          handleMultiSelectAnswerToggle(index, option.value)
                        }
                        className="mt-1"
                      />
                      <Label
                        htmlFor={`q${index}-${option.value}`}
                        className="cursor-pointer"
                      >
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </div>
              ) : (
                <RadioGroup
                  value={answers[index] || ""}
                  onValueChange={(value) => handleAnswerSelect(index, value)}
                  className="space-y-3"
                >
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {question.options.map((option: any) => (
                    <div
                      key={option.value}
                      className="flex items-start space-x-2"
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={`q${index}-${option.value}`}
                        className="mt-1"
                      />
                      <Label
                        htmlFor={`q${index}-${option.value}`}
                        className="cursor-pointer"
                      >
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            </div>
          ))}
        </div>

        <div className="my-8 flex justify-center">
          <Button
            onClick={handleSubmit}
            disabled={!allQuestionsAnswered}
            className=" px-8"
          >
            Submit
          </Button>
        </div>
      </div>
      <JobRightFit />
    </>
  );
}
