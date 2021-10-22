import { CardGroup, Button } from "react-bootstrap";
import React from "react";
import { useDispatch } from "react-redux";

import SoundCard from "./soundCard/index";

export default function CardSection(props) {
  const dispatch = useDispatch();
  return (
    <>
      <h3 style={{ padding: ".5em" }}>{props.title}</h3>
      <div
        style={{
          margin: "1em",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {props.soundsList.map((sound) => {
          return <SoundCard key={sound.id} sound={sound} />;
        })}
      </div>
      {props.title === "POPULAR" || props.title === "LATEST" ? (
        <Button
          style={{
            justifyContent: "right",
            margin: "0 1.5em",
            backgroundColor: "#171818",
            borderColor: "gold",
            color: "gold",
          }}
          onClick={(e) => {
            e.preventDefault();
            dispatch(props.onClickFunc);
          }}
        >
          Load more
        </Button>
      ) : (
        <></>
      )}
    </>
  );
}
