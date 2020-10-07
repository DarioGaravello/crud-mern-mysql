import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

export default function CreateTodo() {
  const [todo, setTodo] = useState();
  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      history.push("/todolist");
      await axios("/api/todo", {
        method: "POST",
        data: todo,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (input) => (e) => {
    setTodo({
      ...todo,
      [input]: e.target.value,
    });
  };

  const { title, description } = useState();

  return (
    <Container className="p-4">
      <Row>
        <Col className="col-md-4 mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>Create Todo</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    placeholder="Insert a Title"
                    name="title"
                    onChange={handleChange("title")}
                    value={title}
                    autoFocus
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    name="description"
                    placeholder="Write a Task"
                    onChange={handleChange("description")}
                    value={description}
                  />
                </Form.Group>
                <Form.Group>
                  <Button variant="primary" type="submit">
                    {/* <a className="nav-link text-white" href="/"> */}
                    Send
                    {/* </a> */}
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
