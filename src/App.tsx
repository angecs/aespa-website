import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero-section";
import Discography from "./components/discography";
import MusicVideos from "./components/music-videos";
import Email from "./components/email-subscription";
import Footer from "./components/footer";
import Concerts from "./components/concerts";
import Members from "./components/members";

function App() {
  return (
    <div className="font-arial dark dark:bg-gradient-to-b dark:from-pink-200 dark:to-pink-700">
      <Navbar />
      <Hero />
      <Members />
      <Discography />
      <MusicVideos />
      <Concerts />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
