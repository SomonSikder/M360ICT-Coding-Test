import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../components/Card";

const Home = () => {
  return (
    <div>
      <Container className="mt-3">
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Cards></Cards>
          </Col>{" "}
          <Col>
            <Cards></Cards>
          </Col>{" "}
          <Col>
            <Cards></Cards>
          </Col>{" "}
          <Col>
            <Cards></Cards>
          </Col>{" "}
          <Col>
            <Cards></Cards>
          </Col>
          <Col>
            <Cards></Cards>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
