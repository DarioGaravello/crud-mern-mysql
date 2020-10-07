import { Router } from 'express';
import * as app from '../controllers/app.controllers';
import { isLogged } from '../libs/auth';
const router = Router();

router.get('/todo', isLogged, app.getTodos);

router.get('/todo/:id', isLogged, app.getTodoById);

router.post('/todo', isLogged, app.setTodos);

router.post('/todo/:id/edit', isLogged, app.updateTodo);

router.post('/todo/:id/delete', isLogged, app.deleteTodo);

export default router;