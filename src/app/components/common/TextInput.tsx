import React, { InputHTMLAttributes } from 'react'

type PropsType = InputHTMLAttributes<HTMLInputElement>

const TextInput = ( props: PropsType ) => {
    const {
        value,
        onChange,
        placeholder,
        onKeyUp
    } = props
    return (
        <input 
            type={'text'}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onKeyUp={onKeyUp}
            className={`w-full p-2 text-sm border border-slate-300 focus:border-slate-300 bg-white placeholder:text-slate-300 rounded`} 
        />
    )
}

export default TextInput