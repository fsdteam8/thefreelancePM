import Header from "@/components/header";
import SubscriptionContainer from "./_components/subscription-container";

const page = () => {
  return (
    <div className="">
      <Header subtitile="Empowering freelance project managers to thrive – choose your plan today!">
        Pick the Plan That Fits Your{" "}
        <span className="text-[#FFA400] underline">Journey</span>
      </Header>

      <SubscriptionContainer />
    </div>
  );
};

export default page;
