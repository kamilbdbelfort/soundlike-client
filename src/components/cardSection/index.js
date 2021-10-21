import { CardGroup, Button } from "react-bootstrap";
import React from "react";

import SoundCard from "./soundCard/index";

export default function CardSection(props) {
  return (
    <CardGroup>
      {props.soundsList.map((sound) => {
        return <SoundCard sound={sound} />;
      })}
      <Button>Load more...</Button>
    </CardGroup>
  );
}
