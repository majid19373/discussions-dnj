import { ChangeEventHandler } from "react"
import { IComment, IDiscussion, IUser } from "./commentsType"

export interface handleSendCommentPropsType {
    handleSendComment: Function
}
export interface CommentsPropsType extends handleSendCommentPropsType, IDiscussion {
    handleLike: Function
}

export interface SendMessagePropsType {
    placeholder: string
    valueInput: string 
    handleChange: ChangeEventHandler
    handleSendComment: VoidFunction
}

export interface AvatarPropsType {
    user: IUser
}

export interface AvatarImagePropsType {
    src: string
    alt: string
}
export interface UserCommentCardPropsType extends IComment {
    reply: boolean
    handleReply: VoidFunction
    handleLike: VoidFunction
}