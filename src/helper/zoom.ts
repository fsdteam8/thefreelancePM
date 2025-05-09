"use server";

import base64 from "base-64";

const ZOOM_ACCOUNT_ID = process.env.ZOOM_ACCOUNT_ID;
const ZOOM_CLIENT_ID = process.env.ZOOM_CLIENT_ID;
const ZOOM_CLIENT_SECRET = process.env.ZOOM_CLIENT_SECRET;

const getAuthHeaders = () => {
  return {
    Authorization: `Basic ${base64.encode(`${ZOOM_CLIENT_ID}:${ZOOM_CLIENT_SECRET}`)}`,
    "Content-Type": "application/json",
  };
};

export const generateZoomAccessToken = async () => {
  try {
    const response = await fetch(
      `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${ZOOM_ACCOUNT_ID}`,
      {
        method: "POST",
        headers: getAuthHeaders(),
      },
    );

    const jsonResponse = await response.json();

    return jsonResponse.access_token ?? "";
  } catch (error) {
    console.log("gnerateZoomAccessToken ERROR: >>", error);
    throw error;
  }
};

interface Props {
  customerEmail: string;
  agenda: string;
  topic: string;
  duration: number;
  startTime: Date;
}

interface ZoomMeetingResponse {
  joinUrl: string;
  startUrl: string;
  passcode: string;
}

export const generateZoomMeeting = async ({
  customerEmail,
  agenda,
  duration,
  startTime,
  topic,
}: Props): Promise<ZoomMeetingResponse | null> => {
  try {
    const access_token = await generateZoomAccessToken();

    const payload = {
      agenda,
      duration,
      schedule_for: "monir.bdcalling@gmail.com",
      calendar_type: 2,
      join_before_host: false,
      meeting_invitees: [
        {
          email: customerEmail,
        },
      ],
      registrants_confirmation_email: true,
      registrants_email_notification: true,
      registration_type: 2,
      start_time: startTime.toISOString(), // Ensure ISO format
      topic,
      type: 2,
    };

    const response = await fetch(`https://api.zoom.us/v2/users/me/meetings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Zoom API error:", await response.text());
      return null;
    }

    const data = await response.json();

    return {
      joinUrl: data.join_url ?? "",
      startUrl: data.start_url ?? "",
      passcode: data.password ?? "",
    };
  } catch (error) {
    console.error("generateZoomMeeting error:", error);
    return null;
  }
};
