"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Certification,
  getRecommendedCertifications,
} from "../_components/data/certification-data";

export default function CertificationsPage() {
  const searchParams = useSearchParams();

  const pmExperience = searchParams.get("exp") || "0-1";
  const industry = searchParams.get("industry") || "technology";

  const [recommendations, setRecommendations] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get raw certs from query param
    const rawCerts = searchParams.get("certs");

    // Handle "none" or empty
    const currentCertifications =
      !rawCerts || rawCerts.toLowerCase() === "none" ? [] : rawCerts.split(",");

    // Get certification recommendations
    const recommendedCerts = getRecommendedCertifications(
      industry,
      pmExperience,
      currentCertifications,
    );

    setRecommendations(recommendedCerts);
    setLoading(false);
  }, [searchParams, pmExperience, industry]);

  if (loading) {
    return (
      <div className="container mx-auto p-8 text-center">
        Loading recommendations...
      </div>
    );
  }

  // If no recommendations (they already have all relevant certifications)
  if (true) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl mt-32">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h1 className="text-2xl font-bold mb-6">
            Your Certification Recommendations
          </h1>

          <div className="mb-8">
            <p className="text-lg">
              We have no recommendations at this time. You&apos;re already
              making great strides in your project management journey—keep
              building your skills, and the perfect certification will come your
              way soon!
            </p>
          </div>

          <div className="mt-8">
            <Link href="/quizzes">
              <Button className="bg-[#004AAD] hover:bg-blue-700">
                Take Another Quiz
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header subtitile="Discover Your Project Management Path">
        Find Your Perfect{" "}
        <span className="text-[#FFA400] underline">PM Certification</span>Path
      </Header>

      <div className="container mx-auto  px-4 py-8 h-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start grid-flow-row-dense">
          {recommendations.map((cert) => (
            <div
              key={cert.id}
              className="bg-white h-auto rounded-lg shadow-md border border-[#D5D5D5] overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-3xl font-semibold text-[#000000] mb-[30px]">
                  {cert.name}
                </h2>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.industries.map((ind) => (
                    <span
                      key={ind}
                      className="bg-[#004AAD] mb-[15px] mr-[15px] text-[10px] font-normal text-white text-xs p-1 px-2 rounded-full"
                    >
                      {ind}
                    </span>
                  ))}
                </div>

                <p className="font-medium mb-4 text-[18px] text-[#333333]">
                  Ideal for: {cert.idealFor}
                </p>

                <p className="text-[#333333] font-normal text-sm mb-4">
                  {cert.description}
                </p>

                <div className="mb-4">
                  <h3 className="font-normal mb-2 text-sm text-[#333333]">
                    Prerequisites:
                  </h3>
                  <ul className="list-disc pl-5 ">
                    {cert.prerequisites.map((prereq, index) => (
                      <li key={index} className="text-gray-700 text-sm">
                        {prereq}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-11">
                <Button
                  className="w-full bg-[#004AAD] py-3 hover:bg-blue-700"
                  asChild
                >
                  <a href={cert.url} className="w-full" target="_blank">
                    Learn More
                  </a>
                </Button>
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
    </>
  );
}
