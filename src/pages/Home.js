import React from "react";
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <Row style={{ "marginTop": "30px" }}>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                height="300px"
                src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Edit</Button>
                &nbsp;
                <Button variant="danger">Delete</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                height="300px"
                src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Edit</Button>
                &nbsp;
                <Button variant="danger">Delete</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                height="300px"
                src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Edit</Button>
                &nbsp;
                <Button variant="danger">Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
