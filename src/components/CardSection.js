import Button from "@restart/ui/esm/Button";
import React from "react";

export default function CardSection(props) {
  return (
    <div style={{ margin: "2em" }}>
      <h3>{props.title}</h3>
      {props.soundsList.map((sound) => {
        return <div>hello</div>;
      })}
      <Button>more</Button>
    </div>
  );
}
