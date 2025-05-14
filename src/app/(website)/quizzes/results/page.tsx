"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  industryCategories,
  industryData,
} from "../_components/data/industry-data";
import { leadershipData } from "../_components/data/leadership-data";
import { roleData } from "../_components/data/role-data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ResultsPage() {
  const searchParams = useSearchParams();
  const roleId = searchParams.get("role");
  const quizType = searchParams.get("type") || "role";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [result, setResult] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [industries, setIndustries] = useState<any[]>([]);

  useEffect(() => {
    if (roleId) {
      if (quizType === "leadership") {
        // Handle special cases for leadership quiz
        const answerCounts = JSON.parse(searchParams.get("counts") || "{}");

        // Check if there's a tie or no majority
        const needsBalancedLeadership =
          checkForBalancedLeadership(answerCounts);

        if (needsBalancedLeadership) {
          // Use Balanced Leadership for ties or no clear majority
          const balancedStyle = leadershipData.find(
            (style) => style.id === "balanced",
          );
          setResult(balancedStyle);
        } else {
          // Find the leadership style based on the roleId
          const leadershipStyle = leadershipData.find(
            (style) => style.id === roleId,
          );
          setResult(leadershipStyle);
        }
      } else if (quizType === "industry") {
        // Handle industry quiz results
        const answerCounts = JSON.parse(searchParams.get("counts") || "{}");
        console.log("Industry quiz results:", answerCounts);

        // Get the categories to show based on the special rules
        const categoriesToShow = getIndustryCategoriesToShow(answerCounts);
        console.log("Categories to show:", categoriesToShow);

        // Get all industries for the selected categories
        const selectedIndustries = industryData.filter((industry) =>
          categoriesToShow.includes(industry.category),
        );
        console.log("Selected industries:", selectedIndustries);

        setIndustries(selectedIndustries);

        // Set the result to the first category for the header
        if (categoriesToShow.length > 0) {
          setResult({
            name: `${industryCategories[categoriesToShow[0]].name}${categoriesToShow.length > 1 ? " and More" : ""}`,
            description:
              "Your ideal industries based on your interests and skills",
          });
        }
      } else {
        // Find the role data based on the roleId for the role quiz
        const roleInfo = roleData.find((r) => r.id === roleId);
        setResult(roleInfo);
      }
    }
  }, [roleId, quizType, searchParams]);

  // Function to check if we need to use Balanced Leadership
  const checkForBalancedLeadership = (counts: Record<string, number>) => {
    const entries = Object.entries(counts);

    // If there are no entries, return balanced leadership
    if (entries.length === 0) return true;

    // Sort by count (highest first)
    entries.sort((a, b) => b[1] - a[1]);

    // Check for tie at the highest count
    if (entries.length > 1 && entries[0][1] === entries[1][1]) {
      return true;
    }

    // Check for no majority (all answers appear the same number of times)
    const allSameCounts = entries.every((entry) => entry[1] === entries[0][1]);
    if (allSameCounts && entries.length > 1) {
      return true;
    }

    return false;
  };

  // Function to determine which industry categories to show based on the rules
  const getIndustryCategoriesToShow = (counts: Record<string, number>) => {
    const entries = Object.entries(counts);
    console.log("Answer counts entries:", entries);

    // If there are no entries, return A and B as default (per the example)
    if (entries.length === 0) return ["A", "B"];

    // Sort by count (highest first)
    entries.sort((a, b) => b[1] - a[1]);
    console.log("Sorted entries:", entries);

    // Case 1: Majority - show the category with the most answers
    // Case 2: Tie - show both categories
    // Case 3: No majority - show the top two categories (A and B in the example)

    // Check for tie at the highest count
    if (entries.length > 1 && entries[0][1] === entries[1][1]) {
      // Return both tied categories
      return [entries[0][0], entries[1][0]];
    }

    // Check if there's no clear majority (all answers have the same count)
    const allSameCounts = entries.every((entry) => entry[1] === entries[0][1]);
    if (allSameCounts && entries.length > 1) {
      // Return the first two categories (A and B in the example)
      return [entries[0][0], entries[1][0]];
    }

    // If there's a clear winner, return just that category
    return [entries[0][0]];
  };

  if (!result && quizType !== "industry") {
    return (
      <div className="container mx-auto p-8 text-center">
        Loading results...
      </div>
    );
  }

  return (
    <div className="lg:container mx-auto  py-8 mt-[100px]">
      {quizType === "industry" ? (
        <div>
          <h1 className="text-2xl font-bold text-start mb-2">
            Your Ideal Industry Match:
          </h1>
          <p className="text-center text-gray-600 mb-4">
            Based on your quiz answers, you&apos;re best aligned with a career
            in
          </p>

          <h2 className="text-4xl font-bold text-[#004AAD] text-center mb-8">
            {result?.name || "Technology Industries"}
          </h2>

          <div className="space-y-6">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="bg-white rounded-lg shadow-md p-6 mb-6"
              >
                <h3 className="text-xl font-semibold text-[#004AAD] mb-3">
                  {industry.name}
                </h3>
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Industry Description</h4>
                  <p className="text-gray-700">{industry.description}</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Top Benefits</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {industry.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="text-gray-700">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/quizzes">
              <Button>Take Another Quiz</Button>
            </Link>
          </div>
        </div>
      ) : quizType === "leadership" ? (
        <div className="bg-white rounded-lg shadow-none p-8">
          <h1 className="text-2xl font-bold text-start mb-8">
            Your Ideal Leadership Style:
          </h1>

          {result && (
            <>
              <div className="mb-8 text-start">
                <h2 className="text-3xl font-bold text-[#004AAD] mb-2">
                  {result.name}
                </h2>
                <p className="text-lg text-gray-700">{result.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Style Description
                </h3>
                <p className="text-gray-700 mb-4">{result.longDescription}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Best For</h3>
                <p className="text-gray-700">{result.bestFor}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Pros</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {result.pros.map((pro: string, index: number) => (
                      <li key={index} className="text-gray-700">
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Cons</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {result.cons.map((con: string, index: number) => (
                      <li key={index} className="text-gray-700">
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          <div className="mt-8 text-center">
            <Link href="/quizzes">
              <Button>Take Another Quiz</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-none p-8">
          <h1 className="text-2xl font-bold text-start mb-8">
            Your Ideal PM-Related Role:
          </h1>

          {result && (
            <>
              <div className="mb-8 text-start">
                <h2 className="text-3xl font-bold text-[#004AAD] mb-2">
                  {result.name}
                </h2>
                <p className="text-lg text-gray-700">{result.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Role Description</h3>
                <p className="text-gray-700 mb-4">{result.longDescription}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Common Industries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.industries.map((industry: string) => (
                    <span
                      key={industry}
                      className="bg-[#004AAD] text-white px-3 py-1 rounded-full text-sm"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="mt-8 text-center">
            <Link href="/quizzes">
              <Button>Take Another Quiz</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
