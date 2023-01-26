import React from "react";
import { Button, ListGroup, Nav, NavDropdown } from "react-bootstrap";

const Filter = () => {
  return (
    <Nav>
      <NavDropdown title="Filters">
        <NavDropdown.Item>
          By Launch Date
          <ListGroup>
            <ListGroup.Item>
              {" "}
              <Button variant="outline-none">Last Week</Button>{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Button variant="outline-none">Last Month</Button>{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Button variant="outline-none">Last Year</Button>{" "}
            </ListGroup.Item>
          </ListGroup>
        </NavDropdown.Item>
        <NavDropdown.Item>
          By Launch Status
          <ListGroup horizontal>
            <ListGroup.Item>
              {" "}
              <Button variant="outline-none">Failure</Button>{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <Button variant="outline-none">Success</Button>{" "}
            </ListGroup.Item>
          </ListGroup>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Button variant="outline-none">Is it upcoming?</Button>
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default Filter;
