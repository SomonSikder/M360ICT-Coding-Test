import React from "react";
import { Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useLaunchQuery } from "../feather/launchApi";

const SingleLaunch = () => {
  let { flight_number } = useParams();
  if (flight_number === undefined) {
    flight_number = "";
  }
  const { data } = useLaunchQuery(flight_number);

  return (
    <Container className="mt-5 ">
      <div className="bg-dark">
        <div className="text-white text-center p-4">
          <h2 className="mb-3">SpaceX</h2>
        </div>
      </div>
      <div className="d-flex justify-content-center algin-items-center">
        <Card>
          <Card.Img
            variant="top"
            src={data?.links.mission_patch_small}
            style={{ width: "300px" }}
          />
          <Card.Body>
            <Card.Title>{data?.mission_name}</Card.Title>
            <Card.Text>{data?.details}</Card.Text>
            <Link to="/">Back</Link>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default SingleLaunch;
