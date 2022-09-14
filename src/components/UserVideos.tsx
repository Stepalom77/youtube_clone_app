import React, {useState, useEffect} from "react";
import { Card } from "flowbite-react";
import axios from "axios";
interface UserVideos {
    username: string,
    videos:{
        title: string,
        views: number,
        video: string
    }[]
  }
const UserVideos:React.FC = () => {
    const [videos, setVideos] = useState<UserVideos>({
        username: '',
        videos: [{
            title: '',
            views: 0,
            video: ''
        }]})
        useEffect(() => {
            const fetchUserVideos = async() => {
                try {
                    const response = await axios.get<UserVideos>('http://localhost:7000/api/users-with-videos/631fe4bfed9eb772e211481c')
                    setVideos(response.data)
                } catch(err) {
                    console.error(err)
                }
            }
            fetchUserVideos()
        }, [])
    return(
        <div className="ml-40 mt-10 mb-5 grid md:grid-cols-2 md:gap-6 max-w-6xl">
            {videos.videos.map((res) => {
                return(
                    <Card>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Video: {res.video} 
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Title: {res.title}
                    </p>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <p className="relative z-0 mb-6 w-full group font-normal text-gray-700 dark:text-gray-400">User: {videos.username} </p>
                        <p className="relative z-0 mb-6 w-full group font-normal text-gray-700 dark:text-gray-400">Views: {res.views} </p>
                    </div>
                </Card>
                )
            })}

        </div>
    )
}

export default UserVideos