import React, { useState } from 'react';
import "./TodoApp.css";

const TodoApp = () => {

    const [tasks, setTasks] = useState([]);
    const [taskname, setTaskname] = useState('');
    const [taskdate, setTaskdate] = useState();
    const [filter, setFilter] = useState('all');
    const [notification, setNotification] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if (taskname && taskdate) {
            const newTask = { name: taskname, date: taskdate, completed: false };
            setTasks([...tasks, newTask]);
            setTaskname('');
            setTaskdate('');
            showNotification('New task added!');
        } else {
            showNotification('Please enter both task name and date.');
        }
    };

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => setNotification(''), 3000); // Hide notification after 3 seconds
    };

    const markTask = (index) => {
        const newTasks = tasks.map((task, taskIndex) =>
            taskIndex === index ? { ...task, completed: !task.completed } : task)
        setTasks(newTasks);
        showNotification(newTasks[index].completed ? 'Task marked as completed!' : 'Task marked as uncompleted!');
    }

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(newTasks);
        showNotification('Task deleted!');
    };


    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') {
            return task.completed;
        } else if (filter === 'uncompleted') {
            return !task.completed;
        }
        return true; // For "all"
    });


    return (
        <div className='todo-main-container'>
            <h1 style={{ textAlign: "center", width: "100%" }}>Task no. 5</h1>
            <div >
                <h2 className='todo-heading'>ToDo App</h2>

                <form action="" className='todo-container'>
                    <label htmlFor="task">Task : </label>
                    <input type="text" id='task' value={taskname} onChange={(e) => setTaskname(e.target.value)} />
                    <label htmlFor="date">Date :
                    </label>
                    <input type="date" value={taskdate} onChange={(e) => setTaskdate(e.target.value)} />
                    <button type='submit' onClick={addTask}>Add task</button>
                </form>
                <div className='filter-buttons'>
                    <button onClick={() => setFilter('all')}>All</button>
                    <button onClick={() => setFilter('completed')}>Completed</button>
                    <button onClick={() => setFilter('uncompleted')}>Uncompleted</button>
                </div>
            </div>

            {notification && <div className="notification">{notification}</div>}

            <div className='task-list'>
                {filteredTasks.map((task, index) => (
                    <div key={index} className='task'>
                        <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                            Task: {task.name} - Date: {task.date}
                        </p>
                        <button onClick={() => markTask(index)}>
                            {task.completed ? 'Unmark' : 'Mark as Done'
                            }</button>
                        <button onClick={() => deleteTask(index)}>Delete Task</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoApp;
