import React, { Children, createContext, useContext, 
    useEffect, 
useState } from 'react';
import { processColor } from '../data/dummy';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [activeSettings, setActiveSettings] = useState(false)
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('rgb(129,129,129)');
    const [colorTitle, setColorTitle] = useState('default-theme')
    const [currentMode, setCurrentMode] = useState('Light');

    const setMode = (e) => {
        setCurrentMode(e.target.value)

        localStorage.setItem('themeMode', e.target.value)
    }
    
    const setColor = (color) => {
        setCurrentColor(color.color)
        setColorTitle(color.name)
        
        localStorage.setItem('colorMode', color.color)
    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]:true});
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                activeSettings,
                setActiveSettings,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,currentMode,
                setMode,setColor,colorTitle
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);