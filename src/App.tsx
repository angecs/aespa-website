import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero-section";
import Avatars from "./components/avatars";
import Discography from "./components/discography";
import MusicVideos from "./components/music-videos";
import Email from "./components/email-subscription";
import Footer from "./components/footer";
import Concerts from "./components/concerts";

function App() {
  return (
    <div className="font-arial dark dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-700">
      <Navbar />
      <Hero />
      <Avatars />
      <Discography />
      <MusicVideos />
      <Concerts />
      <Email />
      <Footer />
    </div>
  );
}

export default App;
