const oauth2Client = require("../Config/youtubeOauthConfig")


const generateUrl = async (req, res) => {
    try {
      const scopes = ['https://www.googleapis.com/auth/yt-analytics.readonly'];
      authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
      });
  
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
      res.redirect('http://localhost:3000');
    }
    catch (error) {
      console.error('Error during Google OAuth redirect:', error);
      res.status(500).send('Error during authentication');
    }
  }
  