import React, { useState } from 'react'
import { discussions } from '../utils/example/comments'
import { IDiscussion } from '../utils/types/commentsType'
import Comments from './components/layout/Comments'
import HeadComment from './components/layout/HeadComment'

const App = () => {
    const [comments, setComments] = useState<IDiscussion[]>(discussions)

    return (
        <div className='w-full md:container m-auto'>
            <div className='w-full md:max-w-lg m-auto'>
                <HeadComment />
                {comments.map(Comments)}
            </div>
        </div>
    )
}

export default App