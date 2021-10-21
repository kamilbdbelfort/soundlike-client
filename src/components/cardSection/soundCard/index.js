import { Card, Button, Badge } from "react-bootstrap";
import React from "react";

export default function SoundCard(props) {
  const soundObj = props.sound;
  return (
    <Card style={{ margin: "10px" }}>
      <Card.Title>{soundObj.name}</Card.Title>
      <Card.Img
        variant="top"
        src={soundObj.imageURL}
        style={{ height: "300px" }}
      />
      <Button variant="succes">
        Played <Badge bg="secondary">{soundObj.played}</Badge>
      </Button>
      <Card.Body>
        <Card.Text>{soundObj.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}