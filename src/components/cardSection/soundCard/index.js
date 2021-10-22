import { Card, Button, Badge, Container } from "react-bootstrap";
import React from "react";
import Sharing from "../../sharing/Sharing";

import Player from "./player";

export default function SoundCard(props) {
  const soundObj = props.sound;
  return (
    <Card
      style={{
        margin: "10px",
        width: "300px",
        boxShadow: "10px 5px 5px gray",
        padding: "10px 15px",
        backgroundColor: "#171818",
        color: "gold",
        borderColor: "gold",
      }}
    >
      <Card.Title style={{ margin: ".7em auto" }}>{soundObj.name}</Card.Title>
      <Card.Img
        variant="top"
        src={soundObj.imageURL}
        style={{ height: "250px" }}
      />
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "5px",
        }}
      >
        <p style={{ fontSize: "24px", margin: "0", height: "fit-content" }}>
          Played: {soundObj.played}
        </p>
        <Player url={soundObj.soundURL} id={soundObj.id} />
      </Container>
      <Card.Body>
        <Card.Text>{soundObj.description}</Card.Text>
      </Card.Body>
      <Sharing
        name={soundObj.name}
        soundUrl={soundObj.soundURL}
        imageURL={soundObj.imageURL}
      />
    </Card>
  );
}
