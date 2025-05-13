import { prisma } from "@/lib/prisma";
import TestimonialCard from "../testomonial_card";

const TestomonialBoady = async () => {
  const testmonial = await prisma.testmonial.findMany({
    where: {
      active: true,
    },
  });

  if (testmonial.length === 0) return;
  return (
    <div className="container mx-auto mt-7  ">
      <div className="mb-16">
        <h3 className="text-[32px] text-center pb-[15px]">
          Success{" "}
          <span className="text-[#004AAD]  underline leading-[120%] font-semibold">
            Stories
          </span>
        </h3>
        <p className="text-[18px] font-primary text-center leading-[120%] font-normal">
          Hear from project managers who transformed their careers with our
          resources.
        </p>
      </div>
      <div className="mb-20">
        <TestimonialCard data={testmonial} />
      </div>
    </div>
  );
};

export default TestomonialBoady;
