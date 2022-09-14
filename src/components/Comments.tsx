import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "flowbite-react";

interface Comments {
  content: string,
  likes: number,
  dislikes: number,
  user: any
}

const Comments:React.FC = () => {
  const [comments, setComments] = useState<Comments[]>([])
  
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get<Comments[]>(`http://localhost:7000/api/comments`)
        setComments(res.data)
      } catch(error) {
        console.error(error)
      }
    }
    fetchComments()
  }, [])

    return(
<div className="ml-40 mt-10 mb-5 grid md:grid-cols-2 md:gap-6 max-w-6xl">
{comments.map((response) => {
  return(
  <Card>
    <h5 className="font-normal text-gray-700 dark:text-gray-400"  >
    User id: {response.user}
    </h5>
    <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {response.content}
    </p>
    <div className="grid md:grid-cols-2 md:gap-6">
        <p className="relative z-0 mb-6 w-full group font-normal text-gray-700 dark:text-gray-400">Likes: {response.likes}</p>
        <p className="relative z-0 mb-6 w-full group font-normal text-gray-700 dark:text-gray-400">Dislikes: {response.dislikes}</p>
    </div>
  </Card>
)
})}
</div>
    )
}

export default Comments