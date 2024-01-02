import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Filmaniac</Navbar.Brand>
        <Navbar.Toggle aria-controls="filmaniac" />
        <Navbar.Collapse id="filmaniac">
          <Nav
            className="me-auto my-2 my-lg-0 gap-2"
            style={{ maxHeight: "200px" }}
            filmaniac="true"
          >
            <Nav.Link href="/popular">Popular</Nav.Link>
            <Nav.Link href="/top-rated">Top Rated</Nav.Link>
            <Nav.Link href="/upcoming">Upcoming</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control 
              type="search"
              placeholder="....."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
