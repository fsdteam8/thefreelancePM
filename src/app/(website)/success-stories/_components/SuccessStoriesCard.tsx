"use client";
import { Testmonial } from "@prisma/client";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

interface Props {
  data: Testmonial;
}

const SuccessStoriesCard = ({ data }: Props) => {
  return (
    <section className="w-[390px] p-5 rounded-xl felx items-center">
      <div className="flex gap-4">
        <Rating
          style={{ maxWidth: 120 }}
          value={data.rating}
          itemStyles={{
            itemShapes: Star,
            itemStrokeWidth: 2,
            activeFillColor: "#004AAD",
            activeStrokeColor: "#004AAD",
            inactiveFillColor: "#ffffff",
            inactiveStrokeColor: "#004AAD",
          }}
          readOnly
        />
      </div>
      <p className="font-normal leading-[120%] text-[18px] pt-[15px] pb-[32px]">
        {data.message}
      </p>
      <div className="flex items-center gap-x-[15px]">
        {/* <div className="h-[60px] w-[60px] object-cover relative">
          <Image
            src="https://res.cloudinary.com/drdztqgcx/image/upload/v1745577685/success_g9lyu9.png"
            alt="reviewer image"
            className="h-full w-full object-cover"
            fill
          />
        </div> */}
        <div>
          <h4 className="text-[#004AAD] text-[18px] font-medium leading-[120%]">
            {data.fullName}
          </h4>
          <p>{data.jobTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesCard;
