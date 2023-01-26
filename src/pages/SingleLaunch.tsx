import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleLaunch = () => {
  return (
    <Container className="mt-5">
      <Card className="bg-white text-dark">
        <Card.Img src="holder.js/100px270" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.This is a
            wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.This is a
            wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
          <Link to="/">Back</Link>
        </Card.ImgOverlay>
      </Card>
    </Container>
  );
};

export default SingleLaunch;
