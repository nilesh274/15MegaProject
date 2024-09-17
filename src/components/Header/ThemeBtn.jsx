import React from 'react';
import useTheme from '../../contexts/theme';

const ThemeBtn = () => {
    const {themeMode, lightTheme, darkTheme} = useTheme()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus){
            darkTheme();
        }else{
            lightTheme();
        }
    }

    return (
        <>
            <label className="relative inline-block w-10 h-5 bg-gray-100 cursor-pointer rounded-full my-6 sm:w-12 sm:h-6">
                <input 
                type="checkbox" 
                className="sr-only peer" 
                value=""
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
                />
                <span className="absolute left-1 top-0.5 sm:top-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-[#6368e5] rounded-full transition-all duration-500 peer-checked:bg-[#04026f] peer-checked:left-5 sm:peer-checked:left-6"></span>
            </label>
        </>
    )
}
export default ThemeBtn;