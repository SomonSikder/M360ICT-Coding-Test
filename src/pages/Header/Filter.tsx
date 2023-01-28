import React from "react";
import CoustomButton from "../../utils/CoustomButton";
import { ListGroup, Nav, NavDropdown } from "react-bootstrap";

type FilterProps = {
  handleFilter: (value: string) => void;
};
const Filter = (props: FilterProps) => {
  const { handleFilter } = props;
  return (
    <Nav>
      <NavDropdown title="Filters">
        <NavDropdown.Item>
          By Launch Date
          <ListGroup>
            <ListGroup.Item>
              {" "}
              <CoustomButton
                text={"Last Week"}
                handleFilter={handleFilter}
                callValue={"lastWeek"}
              ></CoustomButton>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <CoustomButton
                text={"Last Month"}
                handleFilter={handleFilter}
                callValue={"lastMonth"}
              ></CoustomButton>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <CoustomButton
                text={"Last Year"}
                handleFilter={handleFilter}
                callValue={"lastYear"}
              ></CoustomButton>
            </ListGroup.Item>
          </ListGroup>
        </NavDropdown.Item>
        <NavDropdown.Item>
          By Launch Status
          <ListGroup horizontal>
            <ListGroup.Item>
              {" "}
              <CoustomButton
                text={"Fail"}
                handleFilter={handleFilter}
                callValue={"fail"}
              ></CoustomButton>
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <CoustomButton
                text={"Success"}
                handleFilter={handleFilter}
                callValue={"success"}
              ></CoustomButton>
            </ListGroup.Item>
          </ListGroup>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <CoustomButton
            text={"Upcoming"}
            handleFilter={handleFilter}
            callValue={"upcoming"}
          ></CoustomButton>
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default Filter;
