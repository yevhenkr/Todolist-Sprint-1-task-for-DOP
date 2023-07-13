import React from 'react';
import s from './SuperButton.module.css'
import {inspect} from 'util';

type PropsType = {
    callBack: () => void
    disabled?: boolean
    color?: string
    children?: React.ReactNode
}

export const SuperButton: React.FC<PropsType> = (props) => {
    const {callBack, children, color, disabled, ...restProps} = props
    console.log(props.color)
    const onClickHandler = () => {
        callBack()
    }

    //в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx
    // const finalClassName = s.button
    //     + (disabled
    //         ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s.red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (className ? ' ' + className : '')
    // const finalClassName = s.button + ' ' + s.red

    // const finalClassName = `${s.button} ${s.default}`
    // const finalClassName = `${s.button} ${color === 'red' ? s.red : s.default}
    //                                ${disabled ? s.disabled : ''}`

    const finalClassName = `${s.button} 
                                   ${color === 'red' ? s.red :color==='secondary'? s.secondary: s.default} 
                                   ${disabled ? s.disabled : ''}`

    return (
        <button className={finalClassName} onClick={onClickHandler}>{children}</button>
    );
};

//-----------------------------------------------------------------
//
// import React from 'react';
//
// type PropsType={
//     callBack:()=>void
//     name:string
//     color: string
// }
//
// export const SuperButton:React.FC<PropsType> = ({name, callBack, ...props}) => {
//     console.log(props.color)
//     const onClickHandler=()=>{
//         callBack()
//     }
//     return (
//         <button onClick={onClickHandler}>{name}</button>
//     );
// };