import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

  const [todo, setTodo] = useState({ text: 'Complete Portfolio', done: false });

  const handleToggle = () => {
    setTodo(prevTodo => ({ ...prevTodo, done: !prevTodo.done }));
  };
  

  const todos = [
    {
      name:'JavaScript',
      comfort: 9,
      frontEnd: true,
      backend: false
    },
   {
    name:'JavaScript',
      comfort: 7,
      frontEnd: false,
      backend: true
    },
    {
      name:'React',
      comfort: 5,
      frontEnd: true,
      backend: false
    },
    {
      name:'Node.js',
      comfort: 8,
      frontEnd: false,
      backend: true
    },
    {
      name:'Express',
      comfort: 6,
      frontEnd: false,
      backend: true
    },
    {
      name:'CSS',
      comfort: 8,
      frontEnd: true,
      backend: false
    },
    {
      name:'HTML',
      comfort: 10,
      frontEnd: true,
      backend: false
    },
  ]

  return (
    <>
    <h1>My Portfolio!</h1>
    <hr />
    <h2>👋🏾 🌎</h2>
    <hr />
    <h3>My To-Do List</h3>
    <p> <input type="checkbox" checked={todo.done} onChange={() => handleToggle(todo.id)} /> {todo.done ? `You rock! - ${todo.text}` : `Check the box if you have completed '${todo.text}'.`}</p>
   

    <hr />
    <h3>My Skills</h3>
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.name} {todo.frontEnd ? '🎨' : '🚀'} - Comfort Level: {todo.comfort}
          {todo.comfort > 7 ? '🔥' : '😅'}
        </li>
      ))};
    </ul>
    </>
  )
};

export default App;
