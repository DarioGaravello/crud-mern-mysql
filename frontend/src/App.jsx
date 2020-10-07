import React from "react";
import NaviBar from './components/NaviBar'
import { CreateTodo, EditTodo, TodoList, Home, Signin, Signup, Profile } from './components/contents';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <NaviBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:id/edit" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/todolist" component={TodoList} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
        </Switch>
    </Router>
  );
}
