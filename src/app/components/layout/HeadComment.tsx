import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { handleSendCommentPropsType } from '../../../utils/types/componentsType'
import SendMessage from '../common/SendMessage'

const HeadComment = ( props: handleSendCommentPropsType ) => {
    const {handleSendComment} =props
    const [valueInput, setValueInput] = useState<string>('')

    const handleClick = (): void => {
        handleSendComment(valueInput)
        setValueInput('')
    }

    const handleChange = ( event: ChangeEvent<HTMLInputElement> ): void => {
        setValueInput(event.target.value)
    }
    return (
        <div className='w-full bg-slate-100 p-4 border-b border-slate-300'>
            <SendMessage 
                placeholder='Start a discussion'
                valueInput={valueInput}
                handleChange={handleChange}
                handleSendComment={handleClick}
            />
        </div>
    )
}

export default HeadComment