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

    const handleKey = (event: KeyboardEvent<HTMLInputElement>): void => {
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
            <button onClick={handleSendComment} type={'button'} className={`${!valueInput.length && 'hidden'} text-blue-600 hover:text-blue-800`}>
                <FontAwesomeIcon icon={faPaperPlane} className={'text-base'} />
            </button>
        </div>
    )
}

export default SendMessage