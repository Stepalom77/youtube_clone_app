import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
interface Video {
    _id: any,
    video: string,
    title: string,
    user: any,
    views: number,
    comments:string[]
  }

const Video: React.FC = () => {
    const [video, setVideo] = useState<Video>(Object)
    const {id} = useParams()
    useEffect(() => {
      const fetchVideo = async (id: any) => {
        try {
          const response = await axios.get<Video>(`http://localhost:7000/api/videos/${id}`)
          setVideo(response.data)
        } catch(error) {
          console.error(error)
        }
      }
      fetchVideo(id)
    }, [])
      return(
  <div className="ml-40 mt-10 mb-5 grid md:grid-cols-2 md:gap-6 max-w-6xl">
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
  </div>
      )
  }

export default Video