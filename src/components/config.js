const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0202", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: our first Date!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why is my bf so cute?", // Example trending search query
    "Why does Yash love him more?", // Another example query
    `yash's birthdate (coz her bf forgets)`, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been together?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2024-07-28", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Dil ke Paas", // Title of the song
      artist: "Arijit Singh", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Tera fitoor",
      artist: "Arijit Singh",
      left: "40%",
      top: "15%",
    },
    {
      title: "Dil meri na sune",
      artist: "Atif Aslam",
      left: "15%",
      top: "40%",
    },
    {
      title: "Tera Chera",
      artist: "Himesh Reshammiya",
      left: "30%",
      top: "75%",
    },
    {
      title: "Yeah Jo halka halka suroor",
      artist: "Madhur sharma",
      left: "5%",
      top: "65%",
    },
    {
      title: "Main Kabhi Bhoolunga Na Tuja",
      artist: "Aakrosh",
      left: "25%",
      top: "90%",
    },
    {
      title: "Chaudhary ",
      artist: "Amit trivedi",
      left: "35%",
      top: "50%",
    },
    {
      title: "Aye Ho Meri jindgi mein",
      artist: "Atif Aslam",
      left: "10%",
      top: "25%",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Best Pics!!", // Title for the messages recap page
    messageGallery: [
      { title: "februray 2, 2025", description: "A beautiful day to remember." }, // Message entry
      { title: "December 21, 2024", description: " #moment" },
      { title: "Februray 25, 2025", description: "#My love Anjali ❤️" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "Februray 14, 2025", description: "Valentine's Day 💕" }, // Picture entry
      { title: "February 14, 2025", description: "Our Amritsar trip " },
      { title: "Februray 14, 2025", description: "Best trip memories of Us " },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Hi, I love you so much💖", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for everything, my love! 💖 ", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
