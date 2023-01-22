import React, { ChangeEvent, useState } from 'react'
import SendMessage from '../common/SendMessage'

const HeadComment = () => {
    const [valueInput, setValueInput] = useState<string>('')

    const handleChange = ( event: ChangeEvent<HTMLInputElement> ): void => {
        setValueInput(event.target.value)
    }
    return (
        <div className='w-full bg-slate-100 p-4 border-b border-slate-300'>
            <SendMessage 
                placeholder='Start a discussion'
                valueInput={valueInput}
                handleChange={handleChange}
            />
        </div>
    )
}

export default HeadComment