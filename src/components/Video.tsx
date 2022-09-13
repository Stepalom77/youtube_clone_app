import { Card } from "flowbite-react";
import React, {useState} from "react";

const Video:React.FC = () => {
    const [video, setVideo] = useState('video')
    const [title, setTitle] = useState('title')
    const [user, setUser] = useState('user')
    const [views, setViews] = useState('views')
    return(
<div className="max-w-sm">
  <Card>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {video}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    {title}
    </p>
    <div className="grid md:grid-cols-2 md:gap-6">
        <p className="relative z-0 mb-6 w-full group font-normal text-gray-700 dark:text-gray-400">{user}</p>
        <p className="relative z-0 mb-6 w-full group font-normal text-gray-700 dark:text-gray-400">{views}</p>
    </div>
  </Card>
</div>
    )
}

export default Video