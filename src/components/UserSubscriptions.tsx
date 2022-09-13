import { ListGroup } from "flowbite-react";
import React, {useState, useEffect} from "react";

const Subscriptions:React.FC = () => {
    const [subscription, setSubscription] = useState('subscription')
    return(
        <div className="w-48">
        <ListGroup>
            <ListGroup.Item>
                {subscription}
            </ListGroup.Item>
  </ListGroup>
</div>
    )
}

export default Subscriptions