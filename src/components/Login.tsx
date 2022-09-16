import React, {useState, useEffect} from "react";
import axios from "axios";
import { useAuth0 } from '@auth0/auth0-react';

interface Users {
    _id: any,
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    telephone_number:number,
    description: string,
    payment_method: string,
    rating: string,
    subscriptions: string[],
    subscribers: string[],
    members: string[],
    liked_videos: string[],
    comments: string[],
    posts: string[],
    videos: string[]
  }
  interface Videos {
    video: string,
    title: string,
    user: any,
    views: number
  }

const Login: React.FC = () => {
    const [users, setUsers] = useState<Users[]>([])
    const [list, setList] = useState<Videos[]>([])
    const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently} = useAuth0()

    const fetchVideos = async () => {
        try {
          const response = await axios.get<Videos[]>('https://youtubeclone-production.up.railway.app/api/videos')
          setList(response.data)
          console.log(response.data)
        } catch(error) {
          console.error(error)
        }
      }

    const fetchUsers = async () => {
        try {
          const token = await getAccessTokenSilently()
          const response = await axios.get<Users[]>('https://youtubeclone-production.up.railway.app/api/users', {
            headers: {
                authorization: `Bearer ${token}`
            }
          })
          setUsers(response.data)
          console.log(response.data)
        } catch(error) {
          console.error(error)
        }
      }
    
    return(
        <div className="ml-40 mt-10 mb-5 grid md:grid-cols-1 md:gap-6 max-w-6xl">
            <h1>Auth0 Login</h1>
            <ul className="grid md:grid-cols-1 md:gap-6 max-w-6xl">
                <li>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={loginWithPopup}>Login with Popup</button>
                </li>
                <li>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={loginWithRedirect}>Login with Redirect</button>
                </li>
                <li>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={logout as any}>Logout</button>
                </li>
            </ul>
            <h3>User is {isAuthenticated ? "Logged in" : "Not logged in"}</h3>
            <ul className="grid md:grid-cols-1 md:gap-6 max-w-6xl">
                <li>
                    <button onClick={fetchVideos} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Call API Route</button>
                </li>
                <li>
                    <button onClick={fetchUsers} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Call Protected API Route</button>
                </li>
            </ul>
            {isAuthenticated && (
                <pre className="text-center">{JSON.stringify(user, null, 2)}</pre>
            )}
        </div>
    )
}

export default Login