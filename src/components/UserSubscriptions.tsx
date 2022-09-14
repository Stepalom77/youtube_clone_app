import { ListGroup } from "flowbite-react";
import React, {useState, useEffect} from "react";
import axios from "axios";
interface UserSubscriptions {
    subscriptions: string[]
  }
const Subscriptions:React.FC = () => {
    const [subscription, setSubscription] = useState<UserSubscriptions>({subscriptions : []})
    useEffect(() => {
        const fetchUserSubscriptions = async() => {
            try {
                const response = await axios.get<UserSubscriptions>('http://localhost:7000/api/users/631fe4bfed9eb772e211481c')
                setSubscription(response.data)
            } catch(err) {
                console.error(err)
            }
        }
        fetchUserSubscriptions()
    }, [])
    return(
        <div className="ml-40 mt-10 mb-5 grid md:grid-cols-1 md:gap-6 max-w-6xl">
            {subscription.subscriptions.map((res) => {
                return(
                    <ListGroup>
                    <ListGroup.Item>
                        {res}
                    </ListGroup.Item>
                </ListGroup>
                )
            })}

        </div>
    )
}

export default Subscriptions