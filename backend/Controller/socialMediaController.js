const oauth2Client = require("../Config/youtubeOauthConfig")
// import axios from 'axios';
require("dotenv").config();
const { google } = require("googleapis");
const BASE_INSTAGRAM_URL = 'https://graph.instagram.com';
const BASE_FACEBOOK_URL = 'https://graph.facebook.com/v12.0';
const ACCESS_TOKEN = process.env.META_TOKEN;

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;



const generateUrl = async (req, res) => {
  try {
    const scopes = ['https://www.googleapis.com/auth/yt-analytics.readonly'];
    authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
    });

    console.log(authUrl)
    res.status(200).json(authUrl)
  }
  catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }

}

const generateToken = async (req, res) => {
  try {
    const { tokens } = await oauth2Client.getToken(req.query.code);
    oauth2Client.setCredentials(tokens);
    //   const userId = req.user.userId;
    //   await User.update(
    //     { refresh_token: tokens.refresh_token },
    //     { where: { user_id: userId } }
    //   );
    console.log(tokens)
    res.json(tokens)
    // res.redirect('http://localhost:3000');
  }
  catch (error) {
    console.error('Error during Google OAuth redirect:', error);
    res.status(500).send('Error during authentication');
  }
}



// Function to get analytics data
async function getYouTubeAnalytics() {
  try {
    const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    const youtubeAnalytics = google.youtubeAnalytics({ version: "v2", auth: oauth2Client });

    const response = await youtubeAnalytics.reports.query({
      ids: "channel==MINE",
      startDate: "2022-01-01",
      endDate: "2024-04-10",
      metrics: "views,subscribersGained,subscribersLost,shares",
      dimensions: "day",
      sort: "day"
    });

    console.log("YouTube Analytics Data:", response.data);
  } catch (error) {
    console.error("Error fetching analytics:", error);
  }
}



// //FACEBOOK ANALYTICS

// const PAGE_ID = process.env.PAGE_ID;

// async function fetchFacebookAnalytics() {
//   if (!ACCESS_TOKEN || !PAGE_ID) {
//     console.error('Missing Facebook Access Token or Page ID');
//     return;
//   }

//   try {
//     const response = await axios.get(
//       `${BASE_URL}/${PAGE_ID}/insights`,
//       {
//         params: {
//           access_token: ACCESS_TOKEN,
//           metric: 'page_impressions,page_engagement,page_fans', // Example metrics
//           period: 'day',  // Change to 'week', 'month', etc. as needed
//         }
//       }
//     );
//     console.log('Facebook Analytics Data:', response.data);
//   } catch (error) {
//     console.error('Error fetching Facebook analytics:', error.response?.data || error.message);
//   }
// }





// // INSTAGRAM ANALYTICS

// const ACCOUNT_ID = process.env.INSTAGRAM_ACCOUNT_ID;

// async function fetchInstagramAnalytics() {
//   if (!ACCESS_TOKEN || !ACCOUNT_ID) {
//     console.error('Missing Instagram Access Token or Account ID');
//     return;
//   }

//   try {
//     const response = await axios.get(
//       `${BASE_URL}/${ACCOUNT_ID}/insights`,
//       {
//         params: {
//           access_token: ACCESS_TOKEN,
//           metric: 'impressions,reach,profile_views,followers', // Example metrics
//           period: 'day',  // Change to 'week', 'month', etc. as needed
//         }
//       }
//     );
//     console.log('Instagram Analytics Data:', response.data);
//   } catch (error) {
//     console.error('Error fetching Instagram analytics:', error.response?.data || error.message);
//   }
// }



module.exports = { generateToken, generateUrl, getYouTubeAnalytics }