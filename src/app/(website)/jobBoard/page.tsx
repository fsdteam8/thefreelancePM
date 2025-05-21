import { auth } from "@/auth";
import { getCurrentSubscription } from "@/helper/subscription";
import { redirect } from "next/navigation";
import JobBoard from "./_components/JobBoard";
import JobRightFit from "./_components/JobRightFit";

const JobBoardPage = async () => {
  const cu = await auth();
  const currentSubscription = await getCurrentSubscription(
    cu?.user.id as string,
  );

  const isJobBoardVisible =
    currentSubscription?.tier === "pro" ||
    currentSubscription?.tier === "elite";

  if (!isJobBoardVisible || !cu) redirect("/");
  return (
    <div className="mt-20">
      <JobBoard />
      <JobRightFit />
    </div>
  );
};

export default JobBoardPage;
