import { CardGroup, Button } from "react-bootstrap";
import React from "react";
import { useDispatch } from "react-redux";

import SoundCard from "./soundCard/index";

export default function CardSection(props) {
  const dispatch = useDispatch();
  return (
    <>
      <h3 style={{ padding: ".5em" }}>{props.title}</h3>
      <CardGroup
        style={{
          backgroundColor: "black",
          margin: "1em",
        }}
      >
        {props.soundsList.map((sound) => {
          return <SoundCard key={sound.id} sound={sound} />;
        })}
      </CardGroup>
      {props.title === "POPULAR" || props.title === "LATEST" ? (
        <Button
          style={{ justifyContent: "flex-end" }}
          onClick={(e) => {
            e.preventDefault();
            dispatch(props.onClickFunc);
          }}
        >
          Load more...
        </Button>
      ) : (
        <></>
      )}
    </>
  );
}
