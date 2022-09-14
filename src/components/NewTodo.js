import React, { useState } from "react";

const NewTodo = (props) => {

    const [todo, setTodo] = useState({
        title:'',
        desc:''
    })

    const {title,desc} = todo;

    const handleChange = (e)=>{
        const name = e.target.name;

        setTodo((oldTodo)=>{
            return {...oldTodo,[name]:e.target.value}
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onAddTodo(todo);
        setTodo({title:'', desc:''})

    }

  return (
    <div className="container">
      <h3>New Todo</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Enter Title
            </label>
            <input
              type="title"
              className="form-control"
              id="title"
              placeholder="Enter Title"
              name="title"
              value={title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Enter Description
            </label>
            <textarea
              className="form-control"
              id="desc"
              rows={3}
              defaultValue={""}
              placeholder="Enter Description"
              name="desc"
              value={desc}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <br/>
    </div>
  );
};

export default NewTodo;
