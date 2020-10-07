import Todo from '../model/Todo';

export const getTodos = async (req, res) => {
    const tasks = await Todo.find();
    res.json(tasks);
};

export const getTodoById = async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    res.json(todo)
};

export const setTodos = async(req, res) => {
    const { title, description } = req.body;
    const todo = new Todo({
        title,
        description,
        userId: req.user.id
    });
    await todo.save();
    res.status(200);
};

export const updateTodo = async (req, res) => {
    const todoEdit = await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.status(204);   
};

export const deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204)
}