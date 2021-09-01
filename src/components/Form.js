import React from 'react';

const Form = () => {
    return (
        <form>
            <input type="text" class="todo-input" />
            <button class="todo-button" type="submit">
                <i class="fas fa-plus-square"></i>
            </button>
            <div class="select">
                <select name='todos' class="filter-todo">
                    <option value="all">ALL</option>
                    <option value="completed">COMPLETED</option>
                    <option value="uncompleted">NOT COMPLETED</option>
                </select>
            </div>
        </form>
    )
}

export default Form