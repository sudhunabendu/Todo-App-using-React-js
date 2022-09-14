import React from "react";

const Todo = (props) => {
  const {title, desc } = props.data;
  const {id} = props;

  const handleClick = (id) =>{
    props.onRemoveTodo(id)
  }

  return (
    <div>
      <div className="container">
      <table className="table table-dark table-striped">
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>{title}</td>
            <td>{desc}</td>
            <button onClick={()=>{handleClick(id)}}><i className='fa fa-trash fa-2x'></i></button>
          </tr>
        </tbody>
      </table>
      </div>
  </div>
  );
};

export default Todo;
