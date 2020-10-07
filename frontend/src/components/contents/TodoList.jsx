import React, { useEffect, useState } from "react";
import { Form, Button, Table, ButtonGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Axios from "axios";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const history = useHistory();

  const getTodos = async () => {
    try {
      const res = await fetch("/api/todo");
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleDelete = async (id) => {
    try {
      await Axios(`/api/todo/${id}/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (url) => {
    history.push(url);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, i) => (
            <tr key={todo._id}>
              <td>{i}</td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>
                <Form>
                  <ButtonGroup>
                    <Button
                      type="submit"
                      onClick={() => handleDelete(todo._id)}
                      variant="danger"
                    >
                    <i className="fas">&#xf1f8;</i>
                    </Button>
                    <Button
                      onClick={() => handleEdit(`/${todo._id}/edit`)}
                      variant="warning"
                    >
                      <i className="fas">&#xf044;</i>
                    </Button>
                  </ButtonGroup>
                </Form>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
