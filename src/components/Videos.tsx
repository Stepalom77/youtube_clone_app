import { Card } from "flowbite-react";
import React, {useState, useEffect} from "react";
import axios from "axios";
interface Videos {
  video: string,
  title: string,
  user: any,
  views: number
}
const Videos:React.FC = () => {
  const [list, setList] = useState<Videos[]>([])
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get<Videos[]>('http://localhost:7000/api/videos')
        setList(response.data)
      } catch(error) {
        console.error(error)
      }
    }
    fetchVideos()
  }, [])
    return(
<div className="ml-40 mt-10 mb-5 grid md:grid-cols-2 md:gap-6 max-w-6xl">
  {list.map((response) => {
    return(
      <Card>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {response.video}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Title: {response.title}
      </p>
      <div className="grid md:grid-cols-2 md:gap-5">
          <p className="relative z-0 mb-6 w-full group font-normal text-gray-700 dark:text-gray-400">user id: {response.user}</p>
          <p className="relative z-0 mb-6 w-full group font-normal text-gray-700 dark:text-gray-400">views: {response.views}</p>
      </div>
    </Card>
    )
  })}
</div>
    )
}

export default Videos