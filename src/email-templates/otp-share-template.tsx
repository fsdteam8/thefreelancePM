import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface OtpEmailProps {
  otpCode?: string;
}

const validityMinutes = 15;
const supportEmail = "support@thefreelancepmclub.com";
// const companyLogo =
//   "https://files.edgestore.dev/1zj9v0wokztdui8j/Assets/_public/Logo.png";
const companyName = "FreelancePM";

export const OtpEmail = ({ otpCode = "123456" }: OtpEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Your password reset code is: {otpCode}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 my-auto mx-auto font-sans">
          <Container className="border border-solid border-gray-200 rounded my-10 mx-auto p-5 max-w-md bg-white">
            {/* Header with Logo */}
            {/* <Section className="mt-4 text-center">
              <Img
                src={companyLogo}
                width="80"
                height="40"
                alt={`${companyName} Logo`}
                className="mx-auto"
              />
            </Section> */}

            {/* Title */}
            <Section className="mt-6">
              <Text className="text-2xl font-bold text-center text-gray-800">
                Password Reset
              </Text>
            </Section>

            {/* Greeting */}
            <Section>
              <Text className="text-gray-700">Hello there,</Text>
              <Text className="text-gray-700">
                We received a request to reset your password. Please use the
                following code to complete the process:
              </Text>
            </Section>

            {/* OTP Code */}
            <Section className="my-6">
              <div className="bg-gray-50 border border-gray-200 rounded-md py-6 px-4 text-center">
                <Text className="text-3xl font-mono tracking-widest font-bold text-gray-800 my-0">
                  {otpCode}
                </Text>
              </div>
            </Section>

            {/* Validity */}
            <Section>
              <Text className="text-sm text-gray-600 text-center">
                This code is valid for {validityMinutes} minutes.
              </Text>
            </Section>

            {/* Instructions */}
            <Section className="mt-6">
              <Text className="text-gray-700">
                If you didn&apos;t request a password reset, please ignore this
                email or contact us to let us know.
              </Text>
            </Section>

            {/* Security Note */}
            <Section className="mt-6 bg-blue-50 p-4 rounded-md">
              <Text className="text-sm text-blue-800 my-0">
                <strong>Security Tip:</strong> {companyName} will never ask you
                to share this code with anyone, including our support team.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="mt-8 text-center text-gray-500 text-xs border-t border-gray-200 pt-4">
              <Text>
                If you&apos;re having trouble, please contact our support team
                at{" "}
                <a
                  href={`mailto:${supportEmail}`}
                  className="text-blue-600 underline"
                >
                  {supportEmail}
                </a>
              </Text>
              <Text>
                &copy; {new Date().getFullYear()} {companyName}. All rights
                reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default OtpEmail;
