import React from 'react';

const Form = () => {
    return (
        <form>
            <input type="text" className="todo-input" />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name='todos' className="filter-todo">
                    <option value="all">ALL</option>
                    <option value="completed">COMPLETED</option>
                    <option value="uncompleted">NOT COMPLETED</option>
                </select>
            </div>
        </form>
    )
}

export default Form