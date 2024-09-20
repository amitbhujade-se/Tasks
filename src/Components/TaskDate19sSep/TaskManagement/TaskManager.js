import React, { useReducer, useState } from 'react';
import { taskReducer } from './taskReducer';
import "./TaskManager.css"

const TaskManager = () => {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [taskText, setTaskText] = useState(''); 

    // Add a new task
    const handleAddTask = () => {
        if (taskText.trim()) {
            dispatch({ type: 'ADD_TASK', payload: taskText });
            setTaskText(''); // Clear input field
        }
    };

    // Delete a task by ID
    const handleDeleteTask = (id) => {
        dispatch({ type: 'DELETE_TASK', payload: id });
    };

    // Toggle task completion by ID
    const handleToggleTask = (id) => {
        dispatch({ type: 'TOGGLE_TASK', payload: id });
    };

    return (
        <div className='task-container'>
            <h1>Task no. 4</h1>
            <h2>Task Management</h2>

            <div>
                <input
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Enter a new task"
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.text}
                        <button onClick={() => handleToggleTask(task.id)}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;