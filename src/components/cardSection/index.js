import { CardGroup, Button } from "react-bootstrap";
import React from "react";

import SoundCard from "./soundCard/index";

export default function CardSection(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <CardGroup>
        {props.soundsList.map((sound) => {
          return <SoundCard key={sound.id} sound={sound} />;
        })}
        <Button>Load more...</Button>
      </CardGroup>
    </>
  );
}
