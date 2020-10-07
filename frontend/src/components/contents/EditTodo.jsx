import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useRouteMatch, useHistory } from "react-router-dom";
import Axios from "axios";

export default function EditTodo() {
  const [todoId, setTodoId] = useState([]);
  const match = useRouteMatch();
  const history = useHistory();

  const getTodo = async () => {
    const res = await fetch(`/api/todo/${match.params.id}`);
    const data = await res.json();
    setTodoId(data);
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleSubmit = async () => {
    history.push("/todolist");
    await Axios(`/api/todo${match.url}`, {
      method: "POST",
      data: todoId,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleChange = (input) => (e) => {
    setTodoId({ ...todoId, [input]: e.target.value });
  };

  const { title, description } = todoId;

  return (
    <Container className="p-4">
      <Row>
        <Col className="col-md-4 mx-auto">
          <Card>
            <Card.Body>
              <Card.Title>Edit Todo</Card.Title>
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
                    placeholder="Write a Task"
                    name="description"
                    onChange={handleChange("description")}
                    value={description}
                  />
                </Form.Group>
                <Form.Group>
                  <Button type="submit" onClick={() => handleClick()}>
                    Send
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
