// import Link from 'next/link';
import styles from '../styles/Nav2.module.css';
// import React, {useEffect, useState} from "react";
// import ReactDOM from 'react-dom';
// import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";



// import ScriptTag from 'react-script-tag';
export default function Nav2() {
    const myFunction = () =>{
        var x = document.getElementById("myTopnav");

            console.log(x.className);
            if (!x.className.includes("responsive")) {
                x.className = `${styles.topnav} ${styles.responsive}`;
            } else {
                x.className = `${styles.topnav}`;
            }
    }

    return (
        <div>
            <div className={`${styles.topnav}`} id="myTopnav">
                <a href="/" className={styles.active}>Home</a>
                <a href="/project/meals">MealDB</a>
                <a href="/project/process">Process</a>
                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>Dropdown
                        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                    </button>
                    <div className={styles["dropdown-content"]}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
        
                <a href="#about">About</a>
                <a href="#" className={styles.icon} onClick={myFunction}>&#9776;</a>
                
            </div>
        </div>
    )
}

// function myFunction() {
    

//     //使用瀏覽器 API 更新文件標題
//     useEffect(() => {
//         state = document.getElementById("myTopnav");
//         console.log(state.className);
//         if (state.className === "topnav") {
//             state.className += " responsive";

//             state = true;
//         } else {
//             x.className = "topnav";
//             state = true;
//         }
//         // return (() => {
//         //     // var x = document.getElementById("myTopnav");
            
//         // });
//     },[state]);
// }
