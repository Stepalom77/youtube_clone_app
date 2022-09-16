import React, {useState, useEffect} from "react";
import axios from "axios";
import { Card } from "flowbite-react";
interface Video {
    video: string,
    title: string,
    user: any,
    views: number,
    comments:{
      content: string,
      likes: number,
      dislikes: number,
      user: any
    }[]
  }

const Video: React.FC = () => {
    const [video, setVideo] = useState<Video>({
      video: '',
      title: '',
      user: '',
      views: 0,
      comments: [{
        content: '',
        likes: 0,
        dislikes: 0,
        user: ''
      }]
    })
    useEffect(() => {
      const fetchVideo = async () => {
        try {
          const response = await axios.get<Video>('https://youtubeclone-production.up.railway.app/api/videos-with-comments/63246f09616d8116767d76a7')
          setVideo(response.data)
        } catch(error) {
          console.error(error)
        }
      }
      fetchVideo()
    }, [])
      return(
  <div className="ml-40 mt-10 mb-5 grid md:grid-cols-1 md:gap-6 max-w-6xl">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {video.video}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
        Title: {video.title}
        </p>
        <div className="grid md:grid-cols-2 md:gap-5">
            <p className="relative z-0 mb-6 w-full group font-normal text-gray-700 dark:text-gray-400">user id: {video.user}</p>
            <p className="relative z-0 mb-6 w-full group font-normal text-gray-700 dark:text-gray-400">views: {video.views}</p>
        </div>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Comments
        </h5>
        <div className="ml-10 mt-10 mb-5 grid md:grid-cols-1 md:gap-6 max-w-6xl">
          {video.comments.map((res) => {
            return(
              <Card>
              <h5 className="font-normal text-gray-700 dark:text-gray-400"  >
                User id: {res.user}
              </h5>
              <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {res.content}
              </p>
              <div className="grid md:grid-cols-2 md:gap-5">
                <p className="relative z-0 mb-6 w-full group font-normal text-gray-700 dark:text-gray-400">Likes: {res.likes}</p>
                <p className="relative z-0 mb-6 w-full group font-normal text-gray-700 dark:text-gray-400">Dislikes: {res.dislikes}</p>
              </div>
            </Card>
            )
          })}

        </div>
  </div>
      )
  }

export default Video