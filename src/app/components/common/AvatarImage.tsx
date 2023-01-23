import React from 'react'
import { AvatarImagePropsType } from '../../../utils/types/componentsType'

const AvatarImage = ( props: AvatarImagePropsType ) => {
    const {
        src,
        alt
    } = props

    return (
        <div className='w-full min-w-[2.5rem] max-w-[2.5rem] basis-10 h-10 overflow-hidden rounded-full'>
            <picture>
                <img src={src} alt={alt} loading={'lazy'} className='w-full h-full object-cover' />
            </picture>
        </div>
    )
}

export default AvatarImage