import React, {Suspense, useState} from 'react';
import './App.css';
import {SuperButton} from './Component/SuperButton';
import {SuperTodoList} from './Component/SuperTodoList';

function App() {

    const tasks =[
        {id: 1, title:"HTMLCSS", isDone:true},
        {id: 2, title:"ls", isDone:true},
        {id: 3, title:"React", isDone:true}
    ]
    return (
        <div>
            <SuperButton callBack={()=>{}} color={'red'}>First SuperButton</SuperButton>
            <SuperButton callBack={()=>{}} color={'secondary'}>Second SuperButton</SuperButton>
            <SuperButton callBack={()=>{}} disabled >Third SuperButton</SuperButton>
            <SuperTodoList tasks={tasks} >
                <SuperButton callBack={()=>{}} color={'red'}>First SuperButton</SuperButton>
                <SuperButton callBack={()=>{}} color={'secondary'}>Second SuperButton</SuperButton>
                <SuperButton callBack={()=>{}} disabled >Third SuperButton</SuperButton>
                <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

            </SuperTodoList>
        </div>
    );
}

export default App;