import React, {useState} from "react";
import {useLocalStorage} from "./useLocalStorage"

const useDarkMode = (initialValue) =>{
    const [darkMode, setDarkMode] = useLocalStorage('isEnabled', initialValue);
    
    return[darkMode, setDarkMode]
}

export default useDarkMode;
