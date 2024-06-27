import React from "react";
import Navbar from "./navbar";
import Hero from "./hero-section";
import "./App.css";
import Avatars from "./avatars";
import Discography from "./discography";
import MusicVideos from "./music-videos";
import Email from "./email-subscription";
import Footer from "./footer";

function App() {
  return (
    <div className="font-arial dark dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-700">
      <Navbar />
      <Hero />
      <Avatars />
      <Discography />
      <MusicVideos />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
