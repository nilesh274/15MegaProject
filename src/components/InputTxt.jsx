import React, {useId} from 'react';

const InputTxt = React.forwardRef(function InputTxt({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();
    return  (
        <div className='w-full'>
            {label && <label
            className='text-sm sm:text-md md:text-lg lg:text-xl inline-block mb-1 pl-1 font-sans font-semibold dark:text-slate-200'>
            {label}
            </label>}
            <br />
            <input 
            type={type}
            className={`text-sm sm:text-md md:text-lg lg:text-xl px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full 
                ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})
export default InputTxt;