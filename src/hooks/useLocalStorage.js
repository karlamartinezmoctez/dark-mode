import {useState} from "react";
// To retrieve an item from localStorage, call localStorage.getItem('itemName')
// If that item doesn't exist, it will return undefined
// Get from local storage by key
// Parse and return stored json or, if undefined, return initialValue
export const useLocalStorage = (key, initialValue) =>{
    const [storedValue, setStoredValue] = useState(()=>{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue
    })

    //save state by setStoredValue
    //Save to local storage
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return[storedValue, setStoredValue];
}