import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const data = [
    {
      question: "What if I have no project management experience?",
      answer: (
        <p className="leading-7">
          No problem! Our courses and resources are designed to help{" "}
          <span className="font-semibold">aspiring project managers</span> build
          foundational skills and gain confidence in project management. You’ll
          have access to beginner-friendly templates,{" "}
          <span className="font-semibold">career quizzes</span> to help you find
          the right path, and a <span className="font-semibold">community</span>{" "}
          ready to support your journey.
        </p>
      ),
    },
    {
      question: "Can freelancing help me as a beginner project manager?",
      answer: (
        <p className="leading-7">
          Absolutely! Freelancing allows you to{" "}
          <span className="font-semibold">gain hands-on experience</span> by
          working with different clients, industries, and projects. Many
          companies are open to hiring{" "}
          <span className="font-semibold">junior project managers</span> on a
          freelance basis, and we provide the tools, job board access, and
          coaching to help you land those opportunities!
        </p>
      ),
    },
    {
      question: "Can I pivot to freelancing full-time from my corporate job?",
      answer: (
        <p className="leading-7">
          Yes! Many project managers successfully transition to{" "}
          <span className="font-semibold">full-time freelancing</span> and even
          earn more than in their corporate roles. By securing multiple clients,
          you can <span className="font-semibold">diversify your income</span>{" "}
          and create a flexible, fulfilling career. Our job board, templates,
          and coaching services will help you make the transition smoothly.
        </p>
      ),
    },
    {
      question: "Do coaching credits expire for Freelancer Elite members?",
      answer: (
        <p className="leading-7">
          No! Your{" "}
          <span className="font-semibold">
            monthly coaching credits roll over
          </span>
          , so if you don’t use them one month, you can{" "}
          <span className="font-semibold">stack them</span> for future sessions.
          Perfect for when you need extra support at key moments in your career!
        </p>
      ),
    },
    {
      question: "What kind of jobs are posted on the job board?",
      answer: (
        <p className="leading-7">
          Our job board features{" "}
          <span className="font-semibold">
            freelance, contract, and consulting roles
          </span>{" "}
          for project managers at all experience levels. Whether you’re looking
          for{" "}
          <span className="font-semibold">
            short-term gigs, long-term contracts, or high-value consulting roles
          </span>
          , we curate top opportunities from companies actively hiring project
          managers.
        </p>
      ),
    },
    {
      question: "What types of templates are included in the membership?",
      answer: (
        <p className="leading-7">
          We offer{" "}
          <span className="font-semibold">
            100+ professionally designed project management templates
          </span>
          , including: <br />
          <span>✅ project plans</span> <br />
          <span>✅ Gantt charts</span> <br />
          <span>✅ risk & issue logs</span> <br />
          <span>✅ client onboarding docs</span> <br />
          <span>✅ freelance proposals & contracts</span> <br />
          <span>✅ Agile & Scrum boards</span> <br />
          ...and more! These templates save you time and give you a professional
          edge in managing projects and pitching to clients.
        </p>
      ),
    },
    {
      question: "Is the Slack community active?",
      answer: (
        <p className="leading-7">
          Yes! Our Slack community is a
          <span className="font-semibold">dynamic space </span>
          where members: <br />
          <span>🔥 Share job leads & freelance opportunities</span> <br />
          <span>🔥 Network with other PMs & consultants</span> <br />
          <span>🔥 Get career & freelancing advice</span> <br />
          <span>🔥 Participate in exclusive discussions & events</span> <br />
          As a{" "}
          <span className="font-semibold">Freelancer Pro or Elite member</span>,
          you’ll get access to this{" "}
          <span className="font-semibold">
            invaluable networking and support system
          </span>
          .
        </p>
      ),
    },
    {
      question:
        "How do I know which project management certification is right for me?",
      answer: (
        <p className="leading-7">
          We’ve got you covered! Our{" "}
          <span className="font-semibold">“Get Certified”</span> quiz helps you
          determine which{" "}
          <span className="font-semibold">PM certification</span> aligns with
          your career goals, industry, and experience level. We also offer
          coaching sessions to guide you through the certification process.
        </p>
      ),
    },
    {
      question: "What if I’m not ready to pay for a membership yet?",
      answer: (
        <p className="leading-7">
          That’s okay! Our
          <span className="font-semibold">
            Freelancer Lite (Free) membership{" "}
          </span>
          gives you access to: <br />
          <span>✔️ 10 free PM templates</span> <br />
          <span>✔️ 1 beginner-friendly course</span> <br />
          <span>✔️ Career & certification quizzes</span> <br />
          <span>✔️ A free coaching consultation</span> <br />
          It’s a great way to{" "}
          <span className="font-semibold">test the waters</span> before
          upgrading to{" "}
          <span className="font-semibold">Freelancer Pro or Elite</span>.
        </p>
      ),
    },
    {
      question:
        "How do I know which project management certification is right for me?",
      answer: (
        <p className="leading-7">
          Easy! Click <span className="font-semibold">Join</span> Now on our
          homepage. Choose your membership level, create your account, and start
          accessing{" "}
          <span className="font-semibold">
            exclusive resources, job opportunities, and coaching
          </span>{" "}
          right away! 🚀
        </p>
      ),
    },
  ];

  return (
    <div className="container mt-12">
      <Accordion type="single" collapsible className="flex flex-col gap-7">
        {data.map((data, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="shadow-lg">
            <div>
              <AccordionTrigger className="text-[#FFA400] bg-[#004AAD] py-[18px] px-4 rounded-tl-lg rounded-tr-lg m font-semibold text-[20px]">
                {data.question}
              </AccordionTrigger>
              <AccordionContent className="py-8 px-4 ">
                {data.answer}
              </AccordionContent>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
