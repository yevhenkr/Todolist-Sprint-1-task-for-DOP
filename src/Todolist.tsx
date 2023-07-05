import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './App';
import {Button} from './component/Button';


// export type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }

type PropsType = {
    id: number
    title: string
    tasks: Array<TasksType>
    students: Array<string>
    removeTask: (taskId: string, todolistId: number) => void
    changeFilter: (value: FilterValuesType, todolistId: number) => void
    addTask: (title: string, todolistId: number) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
    removeTodolist: (id: number) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            // addTask();
        }
    }

    const removeTodolisthandler = () => {
        props.removeTodolist(props.id)
    }
    const addTaskHandler = () => {
        props.addTask(title, props.id)
        setTitle('')
    }

    const removeTaskHandler = (tId: string) => {
        props.removeTask(tId, props.id)
    }

    const changeFilterHandler = (value: FilterValuesType) => {
        debugger
        props.changeFilter(value, props.id)
    }
    let students = props.students.map((el) => {
        return (
            <div>{el}</div>
        )
    })

    console.log('props.filter = ' + props.filter)
    return <div>
        <h3> {props.title}
            <Button name={'+'} callback={removeTodolisthandler}></Button>
        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? 'error' : ''}
            />
            <button onClick={() => {'addTask'}}>+</button>
            <Button name={'+'} callback={addTaskHandler}></Button>
            {error && <div className="error-message">{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.taskId, newIsDoneValue, props.id);
                    }

                    return <li key={t.taskId} className={t.isDone ? 'is-done' : ''}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <span>{t.title}</span>
                        <Button name={'-'} callback={() => {removeTaskHandler(t.taskId)}}></Button>
                    </li>
                })
            }
        </ul>
        <div>
            <Button name={'all'} callback={() => changeFilterHandler('all')}></Button>
            <Button name={'active'} callback={() => changeFilterHandler('active')}></Button>
            <Button name={'completed'} callback={() => changeFilterHandler('completed')}></Button>
        </div>
        {students}
    </div>
}


