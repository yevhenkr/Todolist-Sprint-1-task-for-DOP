import React, {useEffect, useState} from 'react';
import {NavLink, Outlet} from 'react-router-dom';

import './App.css';
import styles from './components/Site.module.css';
import {S} from './styles/_appStyles'

function App() {
    const [burger, setBurger] = useState(true)

    return (
        <>
            <div className={styles.header}><h1>HEADER</h1></div>
            {burger
                ? <div className={styles.body}>
                    <div className={styles.nav}>
                        <S.NavWrapper><NavLink to={'/page/0'}>PAGE 1</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/1'}>PAGE 2</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/2'}>PAGE 3</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/protected'}>PAGE PROTECTED</NavLink></S.NavWrapper>
                    </div>
                    <div className={styles.content}>
                        <Outlet/>
                    </div>
                </div>
                : ''}
        </>
    );
}


export default App;

