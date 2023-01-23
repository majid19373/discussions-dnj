import React from 'react'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { validateTextComment } from '../../../utils/functions/text'
import { displayedAt } from '../../../utils/functions/date'
import { UserCommentCardPropsType } from '../../../utils/types/componentsType'
import Avatar from '../common/Avatar'

const UserCommentCard = ( props: UserCommentCardPropsType ) => {
    const {
        id,
        date,
        iLikedIt,
        likes,
        text,
        user,
        reply,
        handleReply,
        handleLike
    } = props
    
    return (
        <div className='flex gap-4 mb-4'>
            <Avatar 
                user={user}
            />
            <div>
                <div className='flex items-center gap-2'>
                    <a href='#'>
                        <h3 className='font-semibold cursor-pointer hover:text-blue-600'>{user.name}</h3>
                    </a>
                    <span className='text-slate-400 text-xs'>{displayedAt(date)}</span>
                </div>
                <p className='text-slate-400 text-xs' dangerouslySetInnerHTML={{__html: validateTextComment(text)}}></p>
                <div className='flex items-center gap-4 mt-4'>
                    <span onClick={handleLike} className={`px-2 py-1 rounded-xl flex items-center gap-1 cursor-pointer ${iLikedIt ? 'bg-blue-500 text-white' : 'bg-slate-200 hover:bg-blue-500 hover:text-white group'}`}>
                        <FontAwesomeIcon className={`${!iLikedIt && 'text-slate-400 group-hover:text-white'}`} icon={faThumbsUp} />
                        <span className='text-xs font-semibold h-full'>{likes}</span>
                    </span>
                    {reply && <span onClick={handleReply} className='text-blue-600 hover:text-blue-800 text-xs font-semibold  cursor-pointer'>Reply</span>}
                </div>
            </div>
        </div>
    )
}

export default UserCommentCard