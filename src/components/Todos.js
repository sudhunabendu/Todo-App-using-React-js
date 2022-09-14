import React from 'react'
import Todo from './Todo';

const Todos = (props) => {

    // console.log(props.todos);

  return (
    <section>
        
        {props.todos.map((data)=>{
            return(
                <div key={data.id}>
                    <Todo data={data.data} id={data.id} onRemoveTodo={props.onRemoveTodo}/>
                 </div>   
            )
        })}
    </section>
  )
}

export default Todos