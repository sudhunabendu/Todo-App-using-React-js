import React, { useState } from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos'
import {v4 as uuidv4} from 'uuid' 

const Home = (props) => {

   const [todos, setTodos]= useState([])


   const handleData = (data) =>{
    setTodos((preTodo)=>{
        return [...preTodo,{id: uuidv4(), data}]
    })
    console.log(todos);
  } 


  const handleRemoveTodo = (id) =>{
    // alert(id);
    setTodos((preTodo)=>{
    const filterTodos = preTodo.filter((data)=>data.id !== id)
      return filterTodos;
    })
  }

  return (
    <div>
        <NewTodo onAddTodo={handleData}/>
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home;