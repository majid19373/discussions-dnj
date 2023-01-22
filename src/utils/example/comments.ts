import { IDiscussion, IUser } from "../types/commentsType";

export const discussions: IDiscussion[] = [
    {
        id: 3,
        date: 1672576574000,
        user: {
            name: "Bessie Cooper",
            avatar: "https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg"
        },
        text: "I think for our second compaign we can try to target a different audience. How does it sound for you?",
        likes: 2,
        iLikedIt: false,
        replies: [
            {
                id: 5,
                date: 1672581014000,
                user: {
                    name: "Marvin McKinney",
                    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                },
                text: "Yes, that sounds good! I can think about this tomorrow. Then do we plan to start that compaign?",
                likes: 3,
                iLikedIt: true,
            },
            {
                id: 6,
                date: 1672581614000,
                user: {
                    name: "Bessie Cooper",
                    avatar: "https://www.godaddy.com/garage/wp-content/uploads/judith-kallos-BW-NEW-150x150.jpg",
                },
                text: "We plan to run the compaign on Friday - as far as I know. Do you think you will get this done by Thursday @Marvin?",
                likes: 0,
                iLikedIt: false,
            }
        ]
    },
    {
        id: 2,
        date: 1672232414000,
        user: {
            name: "Marvin McKinney",
            avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        },
        text: "The first compaign went smoothly. Please make sure to see all attachments with the results to understand the flow.",
        likes: 2,
        iLikedIt: false,
        replies: []
    },
    {
        id: 1,
        date: 1671886814000,
        user: {
            name: "Savannah Nguyen"
        },
        text: "We have just published the first campaign. Let's see the results in the 5 days and we will iterate on this.",
        likes: 50,
        iLikedIt: true,
        replies: []
    }
]

export const currentUser: IUser = {
    name: 'Current User',
    avatar: 'https://picsum.photos/id/64/150/150'
}