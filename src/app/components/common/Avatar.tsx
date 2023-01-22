import React from 'react'
import { avatarName } from '../../../utils/functions/text'
import { AvatarPropsType } from '../../../utils/types/componentsType'
import AvatarImage from './AvatarImage'

const Avatar = ( props: AvatarPropsType ) => {
    const {user} = props

    if(user.avatar){
        return (
            <AvatarImage 
                src={user.avatar}
                alt={user.name}
            />
        )
    }

    return (
        <div className='w-full min-w-[2.5rem] max-w-[2.5rem] min-h-[2.5rem] max-h-[2.5rem] basis-10 h-10 text-blue-600 font-bold overflow-hidden rounded-full bg-blue-200 flex items-center justify-center'>
            {avatarName(user.name)}
        </div>
    )
}

export default Avatar