import { Card } from "flowbite-react";
import React, { useState } from "react";

const Posts:React.FC = () => {
    const [userPost, setUserPost] = useState('user')
    const [content, setContent] = useState('content')
    const [likes, setLikes] = useState('likes')
    const [dislikes, setDislikes] = useState('dislikes')
    return(
        <div className="max-w-sm">
            <Card>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {userPost}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {content}
                </p>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <p className="relative z-0 mb-6 w-full group font-normal text-gray-700 dark:text-gray-400">{likes}</p>
                    <p className="relative z-0 mb-6 w-full group font-normal text-gray-700 dark:text-gray-400">{dislikes}</p>
                </div>
            </Card>
        </div>
    )
}

export default Posts