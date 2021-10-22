import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

import { updateSound } from "../../../../store/sound/actions";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      setPlaying(false);
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url, id }) => {
  const dispatch = useDispatch();
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <Button
        style={{
          width: "100%",
          fontSize: "40px",
          border: "none",
          backgroundColor: "transparent ",
        }}
        onClick={(e) => {
          e.preventDefault();
          toggle();
          dispatch(updateSound(id));
        }}
      >
        {playing ? "⏸" : "▶️"}
      </Button>
    </div>
  );
};

export default Player;
