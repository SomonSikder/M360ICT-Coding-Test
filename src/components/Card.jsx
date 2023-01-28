import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Launch } from "../models/launch.model";

interface LaunchProp {
  launch: Launch;
}

const Cards = (props: LaunchProp) => {
  const { mission_name, links, launch_year, rocket, flight_number } =
    props.launch;

  return (
    <Card>
      <div className="d-flex justify-content-center align-items-center">
        <Card.Img
          variant="top"
          src={links.mission_patch_small}
          style={{ width: "200px", height: "200px" }}
        />
      </div>

      <Card.Body>
        <Card.Title>Mission Name: {mission_name}</Card.Title>
        <small className="fw-bold fs-6">Rocket: {rocket.rocket_name}</small>
        <Card.Text>
          <>
            <p>Launch Year {launch_year}</p>
          </>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link
          to={`/singleLaunch/${flight_number}`}
          className="text-decoration-none"
        >
          Details
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default Cards;
