import React, {ChangeEvent, ReactNode, useState} from 'react';
import {SlowComponent} from './slowComponent/SlowComponent';
import {logDOM} from "@testing-library/react";


//find the problem and fix it as part of composition optimization, memo, children
type PropsChildren = {
    children: ReactNode;
}

export const Task_3 = (props: PropsChildren) => {
    console.log("Task 3")
    const [value, setValue] = useState('');
    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    return (
        <div>
            <div>Lags when change value</div>
            {/*<input type="text" value={value} onChange={onChange} />*/}
            {/*<Input/>*/}
            {/*/!*<SlowComponent/>*!/ //use memo variant*//*/}

            {/*{props.children}//child variant*/}
        </div>
    );
};


const Input = React.memo(() => {
    const [value, setValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };
    return (
        <input type="text" placeholder="Placeholder" value={value} onChange={handleChange}/>
    );
});