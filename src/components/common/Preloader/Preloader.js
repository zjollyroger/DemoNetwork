import React from "react";
import i from "../../Users/Users.module.css";
import load from "../../../assets/images/loader.gif";


const Preloader = () => {
    return (
        <div style={{margin: '0 auto'}}>
            <img className={i.load} src={load} alt='preload'/>
        </div>
    )
}

export default Preloader;