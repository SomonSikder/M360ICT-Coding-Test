import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// type CardProp = {
//   item: {
//     mission_name: string;
//     links: string;
//     details: string;
//     launch_year: string;
//     launch_success: string;
//     rocket: string;
//   };
// };
const Cards = () => {
  //   const { mission_name, links, details, launch_year, launch_success, rocket } =
  //     props.item;

  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link to="/singleLaunch">Details</Link>
      </Card.Footer>
    </Card>
  );
};

export default Cards;
