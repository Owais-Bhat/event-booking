const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample event data
const events = [
  {
    id: 1,
    title: "Concert",
    date: "2024-10-01",
    location: "City Hall",
    description:
      "An exciting concert featuring various artists. Enjoy a night filled with music and fun. Don’t miss out on this spectacular event!",
    images:
      "https://img.freepik.com/free-photo/young-people-vaping-from-hookah-bar_23-2149194192.jpg?t=st=1727542468~exp=1727546068~hmac=52c46996253ffd81e233acc12922e32826699bb60feb038504fef73dffe02ffa&w=360",
  },
  {
    id: 2,
    title: "Art Exhibition",
    date: "2024-10-15",
    location: "Art Gallery",
    description:
      "Explore stunning artworks from local artists. Dive into the world of creativity and inspiration. Join us for an evening of artistic appreciation.",
    images:
      "https://img.freepik.com/free-photo/side-view-people-looking-paintings_23-2149911923.jpg?t=st=1727542513~exp=1727546113~hmac=5904213cb0517e4328ab3c59232c21a01104eb73897de7a64544c72151893dae&w=740",
  },
  {
    id: 3,
    title: "Stand-Up Comedy",
    date: "2024-11-01",
    location: "Comedy Club",
    description:
      "Laugh out loud with some of the best comedians. Experience an evening of humor and joy. Great laughs guaranteed!",
    images:
      "https://img.freepik.com/free-photo/full-shot-man-playing-saxophone_23-2149247141.jpg?t=st=1727621496~exp=1727625096~hmac=3782dc13527e04fbcccb7451a102cc96d23612b11c62fb96a125ac1520290205&w=826",
  },

  {
    id: 4,
    title: "Tech Conference",
    date: "2024-11-20",
    location: "Convent Center",
    description:
      "Join industry experts for a day of innovation and technology. Network with professionals and expand your horizons. Don’t miss the latest trends in tech!",
    images:
      "https://img.freepik.com/free-photo/business-people-attending-conference_23-2149167152.jpg?t=st=1727542598~exp=1727546198~hmac=c545d485f37a2900e12519cc5b6639cf9a933f3e7da2e78c7a14d4ad2efc70f1&w=740",
  },
  {
    id: 5,
    title: "Food Festival",
    date: "2024-11-10",
    location: "Central Park",
    description:
      "Taste delicious dishes from various cuisines. Join us for a gastronomic adventure. A perfect event for food lovers!",
    images:
      "https://img.freepik.com/free-photo/delicious-dishes-served-outdoor-event_23-2149241235.jpg?t=st=1727542561~exp=1727546161~hmac=f89e34ebfefdf98ac6ae4e2b32f634915a0551a3f0ae9f6ed9fa6766d6e5cd0e&w=740",
  },
  {
    id: 6,
    title: "Theater Play",
    date: "2024-12-05",
    location: "Down Theater",
    description:
      "Enjoy a captivating theater performance. Immerse yourself in the world of drama and storytelling. An unforgettable night awaits!",
    images:
      "https://img.freepik.com/free-photo/people-watching-theater-play_23-2149251823.jpg?t=st=1727542651~exp=1727546251~hmac=5b99f3b444c9bcb2459a6a80a3b255564754e700de59f6c2ec38cc9f2135043e&w=740",
  },
  {
    id: 7,
    title: "Fitness Bootcamp",
    date: "2024-12-10",
    location: "Local Gym",
    description:
      "Join us for an intensive fitness bootcamp. Get fit and healthy with expert trainers. A great way to meet new people and stay motivated!",
    images:
      "https://img.freepik.com/free-photo/group-people-training-gym_23-2149157219.jpg?t=st=1727542715~exp=1727546315~hmac=ecbcb20fcb2c59c1e1f49369f671b5b6e4c21b909e1c9033b7f6b1e230b249cf&w=740",
  },
  {
    id: 8,
    title: "Outdoor Movie Night",
    date: "2024-12-15",
    location: "City Park",
    description:
      "Enjoy a classic movie under the stars. Bring your friends and family for a cozy night out. Snacks and drinks will be available!",
    images:
      "https://img.freepik.com/free-photo/group-people-watching-movie-night_23-2149261823.jpg?t=st=1727542772~exp=1727546372~hmac=6da5f15230e663c76c22b5e8449cd5b97fa290ba64c4dcba70093368e67300e&w=740",
  },
  {
    id: 9,
    title: "Book Fair",
    date: "2024-12-20",
    location: "City Library",
    description:
      "Discover new books and meet your favorite authors. A paradise for book lovers of all ages. Join us for exciting workshops and readings!",
    images:
      "https://img.freepik.com/free-photo/book-fair-event_23-2149183919.jpg?t=st=1727542853~exp=1727546453~hmac=6bc18b764b59e32ec7d7b894bc184e9f66cbd7c22796c7e63d78f4b5d63a091e&w=740",
  },
  {
    id: 10,
    title: "Holiday Market",
    date: "2024-12-25",
    location: "Main Square",
    description:
      "Get into the festive spirit with our holiday market. Shop for unique gifts and enjoy seasonal treats. Fun activities for the whole family!",
    images:
      "https://img.freepik.com/free-photo/holiday-market-outdoor-event_23-2149271823.jpg?t=st=1727542928~exp=1727546528~hmac=f24f1f9e24e08f74865f722e90cc6a3bc610aa7fd0610e44da4767b8c8ad49",
  },
];

// Routes
app.get("/events", (req, res) => {
  res.json(events);
});

app.get("/events/:id", (req, res) => {
  const event = events.find((e) => e.id === parseInt(req.params.id));
  if (!event) return res.status(404).json({ error: "Event not found." });
  res.json(event);
});

app.get("/events/search", (req, res) => {
  const { query } = req.query;
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(query.toLowerCase()) ||
      event.location.toLowerCase().includes(query.toLowerCase())
  );
  res.json(filteredEvents);
});

// Example of filtering by date
app.get("/events/filter", (req, res) => {
  const { date } = req.query;
  const filteredEvents = events.filter((event) => event.date === date);
  res.json(filteredEvents);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
