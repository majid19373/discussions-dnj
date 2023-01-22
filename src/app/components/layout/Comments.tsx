import React, { ChangeEvent, useState } from 'react'
import { IComment } from '../../../utils/types/commentsType'
import { CommentsPropsType } from '../../../utils/types/componentsType'
import SendMessage from '../common/SendMessage'
import UserCommentCard from './UserCommentCard'

const Comments = ( props: CommentsPropsType ) => {
    const {
        id,
        date,
        iLikedIt,
        likes,
        text,
        user,
        replies,
        handleSendComment,
        handleLike
    } = props

    const [valueInput, setValueInput] = useState<string>('')
    const [replyShow, setReplyShow] = useState<boolean>(replies.length ? true : false)

    const handleChange = ( event: ChangeEvent<HTMLInputElement> ): void => {
        setValueInput(event.target.value)
    }

    const handleReply = () => {
        setReplyShow(true)
    }

    const handleClick = () => {
        handleSendComment(valueInput,id)
        setValueInput('')
    }
    return (
        <div className='w-full pt-4 px-4 border-b border-slate-300 last:border-0 relative'>
            <UserCommentCard
                id={id} 
                user={user}
                text={text}
                date={date}
                likes={likes}
                iLikedIt={iLikedIt}
                reply={true}
                handleReply={handleReply}
                handleLike={()=>handleLike([id])}
            />
            {replyShow
                ?
                    <div className='pl-[3.5rem] mb-4'>
                        <div 
                            className='absolute left-[36px] top-[4.5rem] bottom-4 w-[1px] bg-slate-300'
                        />
                        {replies.map((item: IComment) => {
                            return (
                                <UserCommentCard
                                    id={item.id} 
                                    user={item.user}
                                    text={item.text}
                                    date={item.date}
                                    likes={item.likes}
                                    iLikedIt={item.iLikedIt}
                                    reply={false}
                                    key={item.id}
                                    handleReply={()=>{}}
                                    handleLike={()=>handleLike([id,item.id])}
                                />
                            )
                        })}
                        <SendMessage 
                            placeholder='Reply'
                            valueInput={valueInput}
                            handleChange={handleChange}
                            handleSendComment={handleClick}
                        />
                    </div>
                :
                null
            }
        </div>
    )
}

export default Comments