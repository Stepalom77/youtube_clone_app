import { Card } from "flowbite-react";
import React, {useState, useEffect} from "react";

const LikedVideos:React.FC = () => {
    const [likedVideo, setLikedVideo] = useState('video title')
    return(
        <div className="max-w-sm">
        <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {likedVideo}
            </h5>
        </Card>
    </div>
    )
}

export default LikedVideos