import axios from "axios";
import { Card } from "flowbite-react";
import React, { useState, useEffect } from "react";

interface Posts {
    content: string,
    likes: number,
    dislikes: number,
    user: any
  }

const Posts:React.FC = () => {
    const [posts, setPosts] = useState<Posts[]>([])
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const res = await axios.get<Posts[]>(`http://localhost:7000/api/posts`)
            setPosts(res.data)
          } catch(error) {
            console.error(error)
          }
        }
        fetchPosts()
      }, [])

    return(
        <div className="ml-40 mt-10 mb-5 grid md:grid-cols-2 md:gap-6 max-w-6xl">
            {posts.map((response) => {
                return(
                    <Card>
                        <h5 className="font-normal text-gray-700 dark:text-gray-400">
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

export default Posts