import { Check, X } from "lucide-react";

export default function PricingTable() {
  const features = [
    {
      name: "Templates",
      lite: "10",
      pro: "100+",
      elite: "100+",
    },
    {
      name: "Courses",
      lite: "1",
      pro: "5",
      elite: "5+",
    },
    {
      name: "Job Board Access",
      lite: false,
      pro: true,
      elite: "Priority",
    },
    {
      name: "Slack Community",
      lite: false,
      pro: true,
      elite: "VIP",
    },
    {
      name: "Resume Reviews",
      lite: false,
      pro: "1/month",
      elite: "Unlimited",
    },
    {
      name: "Coaching Sessions",
      lite: "Consultation Only",
      pro: "Additional Fee",
      elite: "1 Free/Month",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold inline-block">
          Features <span className="text-blue-600">Comparison</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Empowering freelance project managers to thrive - choose your plan
          today!
        </p>
      </div>

      <div className="rounded-lg overflow-hidden">
        <div className="bg-brand text-white">
          <div className="grid grid-cols-4">
            <div className="p-6 border-b border-white/20 font-medium text-lg">
              Feature
            </div>
            <div className="p-6 border-b border-white/20 font-medium text-lg text-center">
              <span className="hidden md:block">Freelancer</span> Lite
            </div>
            <div className="p-6 border-b border-white/20 font-medium text-lg text-center">
              <span className="hidden md:block">Freelancer</span> Pro
            </div>
            <div className="p-6 border-b border-white/20 font-medium text-lg text-center">
              <span className="hidden md:block">Freelancer</span> Elite
            </div>
          </div>

          {features.map((feature, index) => (
            <div key={index} className="grid grid-cols-4">
              <div className="p-6 text-white text-[12px] md:text-[16px]">
                {feature.name}
              </div>
              <div className="p-6 flex justify-center items-center">
                {typeof feature.lite === "boolean" ? (
                  feature.lite ? (
                    <Check className="h-6 w-6 text-green-400" />
                  ) : (
                    <X className="h-6 w-6 text-red-400" />
                  )
                ) : (
                  <span className="text-[12px] md:text-[16px]">
                    {feature.lite}
                  </span>
                )}
              </div>
              <div className="p-6 flex justify-center items-center">
                {typeof feature.pro === "boolean" ? (
                  feature.pro ? (
                    <Check className="h-6 w-6 text-green-400" />
                  ) : (
                    <X className="h-6 w-6 text-red-400" />
                  )
                ) : (
                  <span className="text-[12px] md:text-[16px]">
                    {feature.pro}
                  </span>
                )}
              </div>
              <div className="p-6 flex justify-center items-center">
                {typeof feature.elite === "boolean" ? (
                  feature.elite ? (
                    <Check className="h-6 w-6 text-green-400" />
                  ) : (
                    <X className="h-6 w-6 text-red-400" />
                  )
                ) : (
                  <span className="text-[12px] md:text-[16px]">
                    {feature.elite}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
