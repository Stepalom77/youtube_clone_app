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
                const response = await axios.get<UserLikedVideos>('http://localhost:7000/api/users/631fe4bfed9eb772e211481c')
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