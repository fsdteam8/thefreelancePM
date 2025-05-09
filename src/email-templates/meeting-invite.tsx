import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface MeetingInviteProps {
  meetingDate?: string;
  meetingTime?: string;
  meetingId?: string;
  meetingLink?: string;
}

const hostName = "Ashanti Johnson";
const hostTitle = "PMP";

export const MeetingInvite = ({
  meetingDate = "May 15th, 2025",
  meetingTime = "10:00 AM - 11:00 AM",
  meetingId = "abc-defg-hij",
  meetingLink = "https://meet.google.com/abc-defg-hij",
}: MeetingInviteProps) => {
  // Handle focus areas as either string or array
  //   const focusAreasList = Array.isArray(focusAreas) ? focusAreas : [focusAreas];

  return (
    <Html>
      <Head />
      <Preview>
        Meeting Invitation: Join {hostName}, {hostTitle} for a Google Meet
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 my-auto mx-auto font-sans">
          <Container className="border border-solid border-gray-200 rounded my-10 mx-auto p-5 max-w-md bg-white">
            {/* Header with Logo */}
            {/* <Section className="mt-4 text-center">
              <Img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Online%20Meeting%20Invite%202-27z0nF2ccz5PTXfrWh87vECOKCQl7w.png"
                width="120"
                height="40"
                alt="Company Logo"
                className="mx-auto"
              />
            </Section> */}

            {/* Meeting Banner */}
            <Section className="mt-6 bg-blue-800 text-white p-8 text-center rounded">
              <Text className="text-sm mb-2">Please join us for a</Text>
              <Text className="text-3xl font-bold mb-0">MEETING</Text>
            </Section>

            {/* Meeting Details */}
            <Section className="mt-6 text-center">
              <Text className="text-xl font-semibold text-gray-700">
                {meetingDate} {meetingTime}
              </Text>

              <Text className="text-gray-600 mt-4 mb-6">
                Join us for a meeting with {hostName}, PMP, to discuss the next
                steps with your project management journey!
              </Text>

              <Text className="text-gray-700 font-medium">
                MEETING ID: {meetingId}
              </Text>

              <Button
                className="bg-blue-700 text-white font-medium py-2 px-6 rounded mt-4 text-center"
                href={meetingLink}
              >
                Join Zoom
              </Button>
            </Section>

            {/* Agenda Section */}
            {/* <Section className="mt-8">
              <Text className="bg-blue-700 text-white text-center py-2 font-medium">
                AGENDA
              </Text>
              <div className="border border-solid border-gray-200 p-4">
                {focusAreasList.map((area, index) => (
                  <Text key={index} className="text-gray-700 mb-2">
                    • {area}
                  </Text>
                ))}
              </div>
            </Section> */}

            {/* Footer */}
            <Section className="mt-8 text-center text-gray-500 text-xs">
              <Text>
                This is an automated invitation. Please do not reply to this
                email.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MeetingInvite;
