import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, inputText]);
      setInputText('');
    }
  };

  const handleDeleteTodoList = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className='todo-container'>
        <div className='list'>
        <input className="input" type="text" value={inputText} onChange={handleInputChange} placeholder="Enter todo" />
        <button onClick={handleAddTodo} className='add-btn'>Add</button>
        {todos.map((todo, index) => (
            <div key={index}>
            <table>
                <tr className='table-row'>
                    <td className='info'>{todo}</td>
                    <td className='del-btn-container'>
                    <button className='del-btn' onClick={() => handleDeleteTodoList(index)}>Delete</button>
                    </td>
                </tr>
            </table>
            </div>
        ))}
        </div>
      </div>
    </>
  );
}

export default TodoList;