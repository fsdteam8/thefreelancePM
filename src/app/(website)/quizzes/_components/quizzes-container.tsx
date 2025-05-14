import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
// import QuizzesSearch from "./quizzes_Search";

const QuizzesContainer = () => {
  const quizzes = [
    {
      id: "ultimate-pm-role",
      title: "The Ultimate PM Role Quiz - Where Do You Belong?",
      description:
        "This quiz is designed to guide individuals toward the project manager role that fits their personality, skill set, and passions.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "leadership-style",
      title: "How Do You Lead? Discover Your Project Management Style!",
      description:
        "This quiz is designed to help project managers identify their leadership style match.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "industry-match",
      title:
        "What's Your Passion? Discover the right industry for you as a project manager!",
      description:
        "This quiz ensures aspiring and current PMs can find the right industry based on their interests and skills.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: "certification-match",
      title:
        "Get Certified! Determine what project management certification is right for you!",
      description:
        "This quiz is designed to help project managers determine the best certification based on their background, experience, and industry.",
      image: "/placeholder.svg?height=200&width=400",
    },
  ];
  return (
    <div>
      {/* <QuizzesSearch /> */}
      <div className="flex flex-col lg:flex-row gap-7 mt-[50px]">
        {/* Quiz Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-1 w-full">
          {quizzes.map((quiz, index) => (
            <Card
              key={index}
              className="max-w-[393px] mx-auto shadow-none overflow-hidden p-0"
            >
              <div className="bg-muted h-48 w-full" aria-hidden="true">
                {/* Placeholder for image */}
              </div>
              <CardHeader className="p-[15px]  pb-0">
                <h2 className="text-[18px] font-medium tracking-tight text-[#000000]">
                  {quiz.title}
                </h2>
              </CardHeader>
              <CardContent className="p-[15px] pt-[25px] pb-0">
                <p className="text-muted-foreground text-[14px] min-h-[70px]">
                  {quiz.description}
                </p>
              </CardContent>
              <CardFooter className="p-[15px]">
                <Button
                  className="w-full bg-[#004AAD] hover:bg-blue-700 text-white "
                  asChild
                >
                  <Link href={`/quizzes/${quiz.id}`}>Take Quiz</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizzesContainer;
