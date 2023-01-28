import React from "react";
import { Button } from "react-bootstrap";
type Te = {
  text: string;
  handleFilter: (value: string) => void;
  callValue: string;
};
const coustomButton = (props: Te) => {
  return (
    <Button
      className="btn btn-primary mx-2"
      onClick={(e) => props.handleFilter(props.callValue)}
    >
      {props.text}
    </Button>
  );
};

export default coustomButton;
