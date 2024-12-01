import "./Welcome.css"
import { useEffect, useState } from "react";
import Background from "../Components/Background/Background";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";


const Welcome = () => {
  const heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((prevCount) => (prevCount + 1) % heroData.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [heroData.length]);

  useEffect(() => {
    if (!playStatus) {
      setHeroCount(0); // Reset to first image/text when video is paused
    }
  }, [playStatus]);

  return (
    <div>
      <Navbar showHomeContact={true} /> {/* Show Home and Contact links */}
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default Welcome;
