import CommunityAction from "@/components/action/community-action";
import Header from "@/components/header";
import Faq from "./_components/faq";

const page = () => {
  return (
    <main className="pt-12">
      <Header subtitile="Thinking about joining The Freelance PM Club but have questions? We’ve got you covered! Here are some of the most common questions from our community.">
        Frequently Asked PM{" "}
        <span className="text-[#FFA400] underline">Questions</span>
      </Header>
      <section className="">
        <Faq />
      </section>
      <div className="mt-44">
        <CommunityAction />
      </div>
    </main>
  );
};

export default page;
