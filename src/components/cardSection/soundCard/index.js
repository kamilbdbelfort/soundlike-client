import { Card, Button, Badge } from "react-bootstrap";
import React from "react";

export default function SoundCard(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.imageURL} />
      <Button variant="succes">
        Played <Badge bg="secondary">{props.played}</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
