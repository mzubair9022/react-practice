import React, { useState } from 'react'

function TodoList() {
    const [tasks, setTasks] = useState(["Item 1", "Item 2", "Item 3"]);
    const [newTask, setNewTask] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [updatedIndex, setUpdatedIndex] = useState("")

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }
    function addTask(event){
        event.preventDefault();
        setTasks([...tasks, newTask])
        setNewTask("")    
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function editTaskHandle(index) {
        setIsEditing(true)
        setNewTask(tasks[index])
        setUpdatedIndex(index)
    }
    function updateTask(event) {
        event.preventDefault();
        tasks[updatedIndex] = newTask;
        setTasks([...tasks])
        setNewTask("")
        setIsEditing(false)
    }
    function cancelEdit() {
        setIsEditing(false);
        setNewTask('')
    }

    return(<>
    <div className="todo-list">
        <h1 className="todo-heading">ToDo List</h1>
        {!isEditing &&
        <div className='add-todo-form'>
            <input type="text" placeholder='Enter a task...' value={newTask} onChange={handleInputChange} />
            <button className="add-button" onClick={addTask}>Add Item</button>
        </div>
        }

        {isEditing &&
        <div className="edit-todo-form">
            <input type="text" placeholder='Enter a task...' value={newTask} onChange={handleInputChange} />
            <button className="add-button" onClick={updateTask}>Edit Item</button>
            <button className="add-button" onClick={cancelEdit}>Cancel Item</button>
        </div>
        }

        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className="item">{task}</span>
                    <button className="delete-btn" onClick={() => editTaskHandle(index)}>Edit</button>
                    <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                </li>
            )}
        </ol>
    </div>
    </>)
}

// function TodoList() {
//     const [tasks, setTasks] = useState(["first value", "second value", "third value"]);
//     const [newTask, setNewTask] = useState()

//     function inputHandler(event) {
//         event.preventDefault();
        
//         setNewTask(event.target.value)
//         console.log(newTask)
//     }
//     function addTaskHandler() {
//         setTasks(...tasks, newTask)
//     }
//     function deleteTaskHandler() {

//     }
//   return (
//     <>
//     <form className='form'>
//         <input type="text" className='input' value={newTask} onChange={inputHandler}/>
//         <button className='add-task' onClick={addTaskHandler}>Add Task</button>
//     </form>
//     <ol>
//         {tasks.map((task, index) => 
//             <li key={index}>
//                 <span className='task-item'>{task}</span>
                
//             </li>
//         )}

//     </ol>
//     </>
//   )
// }

export default TodoList