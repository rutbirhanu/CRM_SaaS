import dotenv from "dotenv";
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
dotenv.config();

const CLIENT_ID = process.env.AUTH_CLIENT_ID as string;
const CLIENT_SECRET = process.env.CLIENT_CLIENT_SECRET as string;
const REDIRECT_URI = ""; // Change based on your setup
const REFRESH_TOKEN = "" as string; // Store securely

// Initialize OAuth2 Client
const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const youtubeAnalytics = google.youtubeAnalytics({
    version: "v2",
    auth: oauth2Client,
});

// async function fetchYouTubeAnalytics() {
//     try {
//         const response = await youtubeAnalytics.reports.query({
//             ids: "channel==MINE",
//             startDate: "2024-01-01",
//             endDate: "2024-03-01",
//             metrics: "views,estimatedMinutesWatched,averageViewDuration,subscribersGained",
//             dimensions: "day",
//             sort: "day",
//         });

//         console.log("YouTube Analytics Data:", response.data);
//     } catch (error) {
//         console.error("Error fetching YouTube Analytics:", error);
//     }
// }


export async function GET(req: NextRequest) {
    try {
      const response = await youtubeAnalytics.reports.query({
        ids: "channel==MINE",
        startDate: "2024-01-01",
        endDate: "2024-04-01",
        metrics: "views,likes,comments",
        dimensions: "day",
      });
  
      return NextResponse.json(response.data, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      return NextResponse.json(
        { error: error.message || "Failed to fetch YouTube Analytics" },
        { status: 500 }
      );
    }
  }