import CommunityAction from "@/components/action/community-action";
import ExploreOurResources from "./_components/explore/Explore_Our_Resources";
import Hero from "./_components/hero";
import OurMisson from "./_components/mission&benefits/Our_Mission_&_Benefits";
import TestomonialBoady from "./testmonial/_components/testomonialBoady";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <OurMisson />
      <div className="mt-32">
        <ExploreOurResources />
      </div>
      <div className="mt-32 ">
        <TestomonialBoady />
      </div>
      <CommunityAction />
    </div>
  );
}
