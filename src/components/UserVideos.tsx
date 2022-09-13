import React, {useState, useEffect} from "react";
import { Card } from "flowbite-react";
import axios from "axios";

const UserVideos:React.FC = () => {
    const [userVideo, setUserVideo] = useState('user video')
    const [titleUser, setTitleUser] = useState('title of video')
    const [user, setUser] = useState('user')
    const [views, setViews] = useState('views')
    return(
        <div className="max-w-sm">
            <Card>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {userVideo}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {titleUser}
                </p>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <p className="relative z-0 mb-6 w-full group font-normal text-gray-700 dark:text-gray-400">{user}</p>
                    <p className="relative z-0 mb-6 w-full group font-normal text-gray-700 dark:text-gray-400">{views}</p>
                </div>
            </Card>
        </div>
    )
}

export default UserVideos