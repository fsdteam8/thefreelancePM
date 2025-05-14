"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Testmonial } from "@prisma/client";
import SuccessStoriesCard from "../success-stories/_components/SuccessStoriesCard";

interface Props {
  data: Testmonial[];
}

export default function TestimonialCard({ data }: Props) {
  return (
    <div className="flex flex-col justify-center">
      <Carousel className=" mb-4">
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="">
                <Card className="p-0 shadow-none border border-[#004AAD] ">
                  <CardContent className="flex aspect-square items-center justify-center p-0 h-auto">
                    <SuccessStoriesCard data={item} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
