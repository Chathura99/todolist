import React, { useState, useEffect, useRef } from 'react';

const TodoForm = (props) => {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);
  
    useEffect(() => {
      inputRef.current.focus();
    });
  
    const handleChange = e => {
      //get input value
      setInput(e.target.value);
    };
  
    const handleSubmit = e => {
      //to remove refreshing...
      e.preventDefault();
    // set parent props
      props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        //input set by handleChange function in above
        text: input
      });
      //to clear after adding to list
      setInput('');
    };
  
    return (
      <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ? (
          <div>
            <input
              placeholder='Update your item'
              value={input}
              //when type on input field
              onChange={handleChange}
              name='text'
              ref={inputRef}
              className='todo-input edit'
            />
            <button onClick={handleSubmit} className='todo-button edit'>
              Update
            </button>
          </div>
        ) : (
          <div>
            <input
              placeholder='Add a todo'
              value={input}
              onChange={handleChange}
              name='text'
              className='todo-input'
              ref={inputRef}
            />
            <button onClick={handleSubmit} className='todo-button'>
              Add to List
            </button>
          </div>
        )}
      </form>
    );
};

export default TodoForm;