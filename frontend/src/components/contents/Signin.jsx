import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function Signin() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h3>SignIn</h3>
            </Card.Header>
            <Card.Body>
              <Form action="/signin" method="POST">
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Insert a Username"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Insert your Password"
                  />
                </Form.Group>
                <Button type="submit" variant="primary" className="btn-block">
                  Sign In
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
