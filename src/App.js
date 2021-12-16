import Header from "./component/Header";
import Tasks from "./component/Tasks";
import { useState } from "react";
import AddForm from "./component/AddForm";


function App() {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Fev 5th at 2:30',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at school',
        day: 'March 6th at 2:30',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'April 7th at 4:30',
        reminder: false
    }
])

// Add Task
const addTask=(task)=>{
  const id = Math.floor(Math.random() * 10000 + 1)
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Delete a Task
const onDelete=(id)=>{
  setTasks(tasks.filter((task)=> task.id !== id))
}

// Toggle Reminder
const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder}: task))
}

  return (
    <div className="container">
      <Header onAdd={()=>setShowAdd(!showAdd)} showAddTask={showAdd}/>
      {showAdd && <AddForm onAdd={addTask} />}
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} /> : 'Nothing to Show'}
    </div>
  );
}

export default App;

