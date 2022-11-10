import { FC, ReactNode } from "react";
import Home from "../Screens/Home";

interface RouteProps {
    name: string
    component: FC
}

const routes: RouteProps[] = [
    {
        name: 'home',
        component: Home
    }
]

export default routes
