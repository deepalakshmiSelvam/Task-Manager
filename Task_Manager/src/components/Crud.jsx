import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const Crud = () => {
    const [inputValue, setInputvalue] = useState("") // To receive the user input, generic state
    const [tasks, setTasks] = useState([]) // Stores the value
    const [selectedTask, setSelectedTask] = useState(null)

    const handleChange = (e) => {
        // console.log(e.target.value)
        setInputvalue(e.target.value)
    }

    const handleAddTask = () => {
        const obj = {
            text: inputValue,
            id: Date.now()
        }
        setTasks([...tasks, obj])
        // console.log(tranformedtext)
        setInputvalue("")
    }
    // console.log(tasks)
    const handleEditTask = (task) => {
        setInputvalue(task.text)
        setSelectedTask(task)
    }

    const handleUpdateTask = () => {
        const tempArr = [...tasks]
        const currentDataIndex = tempArr.findIndex((p) => p.id == selectedTask.id)
        const currentData = tempArr[currentDataIndex]
        currentData.text = inputValue

        setTasks(tempArr)
        setSelectedTask(null)
        setInputvalue("")
    }

    const handleDeleteTask = (task) => {
        setTasks(tasks.filter((p) => p.id != task.id))
        setInputvalue("")
    }
    // console.log(tasks)

    const currentDate = new Date().toDateString()

    return (
        <div>
            <input type="text" placeholder="Enter your Task" name="inputValue" value={inputValue} onChange={handleChange} />
            {selectedTask ? <button onClick={handleUpdateTask} style="colour: red;">UpdateTask</button> : <button onClick={handleAddTask} >AddTask</button>}
            {tasks.map((item) => (
                <Card sx={{ maxWidth: 250 }} key={item.id}>
                    <input type="checkbox"/>
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {item.text}
                        </Typography>
                    </CardContent>
                    <h1><CalendarMonthIcon/>{currentDate}</h1>
                    <CardActions>
                        <Button size="small" onClick={() => handleEditTask(item)}><EditIcon/></Button>
                        <Button size="small" onClick={() => handleDeleteTask(item)}><DeleteIcon/></Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
    console.log(item)
}
export default Crud;