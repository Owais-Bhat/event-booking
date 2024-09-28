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
    description: "An exciting concert featuring various artists.",
    image:
      "https://img.freepik.com/free-photo/young-people-vaping-from-hookah-bar_23-2149194192.jpg?t=st=1727542468~exp=1727546068~hmac=52c46996253ffd81e233acc12922e32826699bb60feb038504fef73dffe02ffa&w=360",
  },
  {
    id: 2,
    title: "Art Exhibition",
    date: "2024-10-15",
    location: "Art Gallery",
    description: "Explore stunning artworks from local artists.",
    image:
      "https://img.freepik.com/free-photo/side-view-people-looking-paintings_23-2149911923.jpg?t=st=1727542513~exp=1727546113~hmac=5904213cb0517e4328ab3c59232c21a01104eb73897de7a64544c72151893dae&w=740",
  },
  // Add more events as needed
];

// Routes
app.get("/events", (req, res) => {
  res.json(events);
});

app.get("/events/:id", (req, res) => {
  const event = events.find((e) => e.id === parseInt(req.params.id));
  if (!event) return res.status(404).send("Event not found.");
  res.json(event);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
