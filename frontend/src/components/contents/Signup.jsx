import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function Signup() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h3>SignUp</h3>
            </Card.Header>
            <Card.Body>
              <Form action="/signup" method="POST">
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="firstname"
                    placeholder="Insert your Firstname"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="lastname"
                    placeholder="Insert your Lastname"
                  />
                </Form.Group>
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
                <Button type="submit" variant="success" class="btn-block">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
