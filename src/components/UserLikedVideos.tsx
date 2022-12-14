import { Card } from "flowbite-react";
import React, {useState, useEffect} from "react";
import axios from "axios";
interface UserLikedVideos {
    liked_videos: string[]
  }
const LikedVideos:React.FC = () => {
    const [user, setUser] = useState<UserLikedVideos>({liked_videos : []})
    useEffect(() => {
        const fetchUserLikedVideos = async() => {
            try {
                const response = await axios.get<UserLikedVideos>('https://youtubeclone-production.up.railway.app/api/users/63246ba4616d8116767d76a0')
                setUser(response.data)
            } catch(err) {
                console.error(err)
            }
        }
        fetchUserLikedVideos()
    }, [])
    return(
        <div className="ml-40 mt-10 mb-5 grid md:grid-cols-2 md:gap-6 max-w-6xl">
            {user.liked_videos.map((res) => {
                return(
                    <Card>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {res}
                        </h5>
                </Card>
                )
            })}

    </div>
    )
}

export default LikedVideos