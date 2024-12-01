import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Post from "./components/Post.jsx"
import ProfileCard from "./components/Profile.jsx";
import TweetCard from "./components/TweetCard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Post></Post>
    <ProfileCard />
    <TweetCard />
  </StrictMode>
);
