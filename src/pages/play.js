import { useState } from "react";
import PlayContent from "../components/play_content";
import Sns from "../components/sns";
import Title from "../components/title";
import "../_style/header.css";

const Play = () => {
  const [isPlay, setIsPlay] = useState(true);
  return (
    <>
      <Title isPlay={isPlay} />
      <PlayContent />
      <Sns isPlay={isPlay} />
    </>
  );
};
export default Play;
