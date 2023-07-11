import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo { // creates an object that allows data types to be set for something.
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url)
     .then(response => {
        const todo = response.data as Todo
        const id = todo.id;
        const title = todo.title;
        const completed = todo.completed;

        logTodo(id, title, completed)

     });

const logTodo = (id: number, title: string, completed: boolean) => { // setting data types of parameters for correct data/argument validation.
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
    `);
}

