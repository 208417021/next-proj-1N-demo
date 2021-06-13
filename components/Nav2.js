import Link from 'next/link';
import styles from '../styles/Nav2.module.css';
import React, {useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Nav2() {
    return (
        <div>
            <div className={styles.topnav} id="myTopnav">
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
                <a href="#" className={styles.icon} onClick={myFunction()}>&#9776;</a>
            </div>
        </div>
    )
}

function myFunction() {
    
    
    useEffect(() => {
        // 使用瀏覽器 API 更新文件標題
        var x = document.getElementById("myTopnav");
        console.log(x.className);
        return (() => {
            // var x = document.getElementById("myTopnav");
            
            if (x.className === "topnav") {
                x.className += " responsive";
                console.log(x.className);
            } else {
                x.className = "topnav";
            }
        });
    }, []);
    
}