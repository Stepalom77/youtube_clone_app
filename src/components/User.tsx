import { Tabs } from "flowbite-react";
import React from "react";
import Info from "./UserInfo";
import LikedVideos from "./UserLikedVideos";
import Subscriptions from "./UserSubscriptions";
import UserVideos from "./UserVideos";

const User:React.FC = () => {
    return(
        <Tabs.Group
            aria-label="Full width tabs"
            style="fullWidth"
        >
            <Tabs.Item title="Information">
                <Info/>
            </Tabs.Item>
            <Tabs.Item title="Videos">
                <UserVideos/>
            </Tabs.Item>
            <Tabs.Item title="Subscriptions">
                <Subscriptions/>
            </Tabs.Item>
            <Tabs.Item title="Liked videos">
                <LikedVideos/>
            </Tabs.Item>
        </Tabs.Group>
    )
}

export default User