import React, { Fragment, useState, useEffect } from 'react'
import {  TextField, Button } from '@material-ui/core';
import Sound from 'react-sound';
import reminderSong from "../songs/reminder.mp3"

import { AddTaskTextField,AddTaskContainer,AddTaskBtn,NoTasksHeading,TaskTable ,ActionBtn} from './Tasks.elements';
export default function Tasks() {

    let initTasksArray;
    if (localStorage.getItem("tasks") === null) {
        initTasksArray = [];
    }
    else {
        initTasksArray = JSON.parse(localStorage.getItem("tasks"));
    }

    const [currentTask, setCurrentTask] = useState("")
    const [taskBeingEdited, setTaskBeingEdited] = useState("")
    const [taskArray, setTaskArray] = useState(initTasksArray)
    const [playSong, setPlaySong] = useState(false)


    // const [ifDisplayUndone, setIfDisplayUndone] = useState(false)

    

    const handleTaskChange = (e) => {
        setCurrentTask(e.target.value)
    }

    const addTask = () => {
        let newTask = {
            id: taskArray.length === 0 ? 1 : taskArray[taskArray.length - 1].id + 1,
            taskName: currentTask,
            isEditing: false,
            isDone: false
        }

        setTaskArray([...taskArray, newTask])
        setCurrentTask("")
        // setPlaySong(true)
    }

    const handleEditTaskTextField = (task) => {
        setTaskBeingEdited(task)
    }
    const saveEditTask = (task) => {


        setTaskArray(taskArray.map((element) => {
            if (element.id === task.id) {
                element.taskName = taskBeingEdited
            }
            return element

        }))
        setTaskArray(taskArray.map(element => {
            if (element.id === task.id) {
                element.isEditing = false
            }
            return element
        }))
        setTaskBeingEdited("")
    }

    const editTask = (task) => {
        setTaskArray(taskArray.map(element => {
            if (element.id === task.id) {
                element.isEditing = true
            }
            return element
        }))
        setTaskBeingEdited(task.taskName)
    }

    const cancelEdit = (task) => {
        setTaskArray(taskArray.map(element => {
            if (element.id === task.id) {
                element.isEditing = false
            }
            return element
        }))
    }
    const doneTask = (task) => {
        setTaskArray(taskArray.map(element => {
            if (element.id === task.id) {
                element.isDone = true
            }
            return element
        }))
        // setIfDisplayUndone(true)
    }

    const UndoneTask = (task) => {
        setTaskArray(taskArray.map(element => {
            if (element.id === task.id) {
                element.isDone = false
            }
            return element
        }))
        // setIfDisplayUndone(false)
    }
    const deleteTask = (task) => {
        setTaskArray(taskArray.filter((element) => {
            return element !== task
        }))

        // localStorage.setItem("tasks", JSON.stringify(taskArray));

    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(taskArray));
    }, [taskArray])
    return (
        <>
            <Fragment >
                <AddTaskContainer >
                    <AddTaskTextField
                        
                        // InputLabelProps={{
                        //     classes: {
                        //         root: classes.inputLabel,
                        //         focused: "focused"
                        //     }
                        // }}
                        // InputProps={{
                        //     className: classes.multilineColor
                        // }}
                        label="ADD TASK"
                        variant="filled"
                        value={currentTask}
                        onChange={handleTaskChange}
                    />

                    <AddTaskBtn variant="contained" color="primary"
                        onClick={addTask} disabled={currentTask === ""} >
                        ADD
                    </AddTaskBtn>
                </AddTaskContainer>
                {taskArray.length > 0 ?
                    <TaskTable >
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            taskArray.map((task) => {
                                return (
                                    <tbody key={task.id}>
                                        <tr>
                                            <td>
                                                {task.isEditing ? (
                                                    <TextField
                                                        id="standard-basic"
                                                        value={taskBeingEdited}
                                                        onChange={e => handleEditTaskTextField(e.target.value)}

                                                    />
                                                ) : task.isDone ? (
                                                    <s>{task.taskName}</s>
                                                ) : (
                                                    <span>{task.taskName}</span>
                                                )}
                                            </td>
                                            <td>
                                                {task.isEditing ? (
                                                    <>
                                                        <ActionBtn 
                                                            variant="outlined"
                                                            color="primary"
                                                            size="small"
                                                            disabled={taskBeingEdited === ""}
                                                            onClick={() => saveEditTask(task)}
                                                        >Save</ActionBtn>

                                                        <ActionBtn 
                                                            variant="outlined"
                                                            color="secondary"
                                                            size="small"
                                                            onClick={() => cancelEdit(task)}
                                                        >Cancel</ActionBtn>
                                                    </>
                                                ) :
                                                    (
                                                        <>
                                                            <ActionBtn 
                                                                variant="outlined"
                                                                color="primary"
                                                                size="small"
                                                                onClick={e => editTask(task)}
                                                            >EDIT</ActionBtn>

                                                            {!task.isDone ? <ActionBtn 
                                                                variant="outlined"
                                                                color="default"
                                                                size="small"
                                                                // disabled={task.isDone}
                                                                onClick={() => doneTask(task)}
                                                            >DONE</ActionBtn>
                                                                : <ActionBtn 
                                                                    variant="outlined"
                                                                    color="default"
                                                                    size="small"
                                                                    // disabled={task.isDone}
                                                                    onClick={() => UndoneTask(task)}
                                                                >UNDONE</ActionBtn>
                                                            }

                                                            <ActionBtn 
                                                                variant="outlined"
                                                                color="secondary"
                                                                size="small"
                                                                onClick={() => deleteTask(task)}
                                                            >DELETE</ActionBtn>
                                                        </>
                                                    )

                                                }
                                            </td>
                                        </tr>

                                    </tbody>
                                )
                            })
                        }
                    </TaskTable>
                    : <NoTasksHeading> NO TASKS TO DO </NoTasksHeading>
                }

            </Fragment>


            <Sound
            url = {reminderSong}
            playStatus = { playSong ? Sound.status.PLAYING : Sound.status.STOPPED }
            // playFromPosition = { 300 /* in milliseconds */}
            // onLoading = { handleSongLoading }
            // onPlaying = { handleSongPlaying }
            // onFinishedPlaying = { handleSongFinishedPlaying }
              />
        </>

    )
}

