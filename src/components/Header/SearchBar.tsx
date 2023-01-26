import React from "react";
import { Button, Form } from "react-bootstrap";

// type HeaderProps = {
//   handleSearch: (name: string) => void;
// };
const SearchBar = () => {
  //   const [searchValue, setSerchValue] = useState("");

  //   const handleClick = () => {
  //     props.handleSearch(searchValue.toLocaleLowerCase());
  //     setSerchValue("");
  //   };

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search By Rocket Name"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default SearchBar;
