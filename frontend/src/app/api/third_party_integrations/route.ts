// <script src="https://apis.google.com/js/api.js"></script>
  

// function authenticate() {
//     return gapi.auth2.getAuthInstance()
//         .signIn({scope: "https://www.googleapis.com/auth/yt-analytics.readonly"})
//         .then(function() { console.log("Sign-in successful"); },
//               function(err) { console.error("Error signing in", err); });
//   }
//   function loadClient() {
//     return gapi.client.load("https://youtubeanalytics.googleapis.com/$discovery/rest?version=v2")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded and sign-in is complete before calling this method.
//   function execute() {
//     return gapi.client.youtubeAnalytics.reports.query({
//       "ids": "channel==MINE",
//       "startDate": "2017-01-01",
//       "endDate": "2017-12-31",
//       "metrics": "views,estimatedMinutesWatched,averageViewDuration,averageViewPercentage,subscribersGained",
//       "dimensions": "day",
//       "sort": "day"
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client:auth2", function() {
//     gapi.auth2.init({client_id: 'YOUR_CLIENT_ID'});
//   });




// <button onclick="authenticate().then(loadClient)">authorize and load</button>
// <button onclick="execute()">execute</button>