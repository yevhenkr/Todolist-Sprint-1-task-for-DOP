import React from 'react';
import { useNavigate } from 'react-router-dom';

type ContentTypeProps={
    heading:string,
    pages:string
}

export const Content = (props:ContentTypeProps) => {
    const{heading, pages}=props
    const navigate =useNavigate()
    const onClickMAimPAgeHandler=()=>{
        navigate('page/0')
    }
    const onClickKambackeHandler=()=>{
        navigate(-1)
    }
    return (
        <div>
            <div>{heading}</div>
            <div>{pages}</div>
            <button onClick={onClickKambackeHandler}>назад</button>
            <button onClick={onClickMAimPAgeHandler}>Главн страница</button>
        </div>
    );
};

