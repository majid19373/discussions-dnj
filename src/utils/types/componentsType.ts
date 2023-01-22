import { ChangeEventHandler } from "react"
import { IComment, IUser } from "./commentsType"

export interface SendMessagePropsType {
    placeholder: string
    valueInput: string 
    handleChange: ChangeEventHandler
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
}