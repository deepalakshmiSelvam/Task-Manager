import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Task=()=>{

const [inputValue, setInputValue]=useState(" ")
const [store, setStore]=useState([])
const [select,setSelect]=useState(null)


const handleChange=(e)=>{
    setInputValue(e.target.value)    
}

const handleClick=()=>{
    const obj={
        text:inputValue,
        id:Date.now()
    }
    setStore([...store , obj])
    setInputValue(" ")
}
// console.log(store)

const handleEditTask=(values)=>{
    setInputValue(values.text)
    setSelect(values)
}

const handleUpdate=()=>{
    const tempArr = [...store]
    const currentIndexData = tempArr.findIndex((p)=> p.id == select.id)
    const currentdata = tempArr[currentIndexData]
    currentdata.text = inputValue

    setStore(tempArr)
    setSelect(null)
    setInputValue(" ")
}

const handleDeleteTask=(values)=>{
    const filteredData = store.filter(p=> p.id != values.id)
    setStore(filteredData)
    setInputValue("")
    // console.log(values);   
}

return(
    <div className="main_container">
        <div className="btn_container">
            <input type="text" placeholder="Enter your task" name="input" value={inputValue}  onChange={handleChange}/>
        {select ? <button onClick={handleUpdate}>Update Task</button>:<button onClick={handleClick} >Add Task</button>}
        </div>
        <div className="task_container">
            {store.map((value)=>(
            <ul type= "none" key={value.id}>
                <li>
                    <span>{value.text}</span>
                    <button onClick={()=>handleEditTask(value)} className="edit_btn"><EditIcon/></button>
                    <button onClick={()=>handleDeleteTask(value)}className="delete_btn"><DeleteIcon/></button>
                </li>
            </ul>
        ))}
        </div>
    </div>
)
}
export default Task;