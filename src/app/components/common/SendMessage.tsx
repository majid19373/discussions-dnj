import React, { KeyboardEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { SendMessagePropsType } from '../../../utils/types/componentsType'
import TextInput from './TextInput'
import Avatar from './Avatar'
import { currentUser } from '../../../utils/example/comments'

const SendMessage = ( props: SendMessagePropsType ) => {
    const {
        placeholder,
        valueInput,
        handleChange,
        handleSendComment
    } = props

    const handleClick = () => {
        handleSendComment()
    }
    const handleKey = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter' && valueInput.length > 0){
            handleSendComment()
        }
    }
    return (
        <div className='flex items-center gap-4 w-full'>
            <Avatar 
                user={currentUser}
            />
            <TextInput 
                placeholder={placeholder}
                onChange={handleChange}
                value={valueInput}
                onKeyUp={handleKey}
            />
            <button onClick={handleClick} type={'button'} className={`${!valueInput.length && 'hidden'}`}>
                <FontAwesomeIcon icon={faPaperPlane} className={'text-base text-blue-600'} />
            </button>
        </div>
    )
}

export default SendMessage