import { FC, ReactNode } from "react";
import CreateTrasaction from "../Screens/CreateTransaction";
import Home from "../Screens/Home";

interface RouteProps {
    name: string
    component: any
}

export enum RouteNamesEnum {
    HOME = "home",
    CREATE_TRANSACTION = "create_trx",
}


const routes: RouteProps[] = [
    {
        name: RouteNamesEnum.HOME,
        component: Home
    },
    {
        name: RouteNamesEnum.CREATE_TRANSACTION,
        component: CreateTrasaction
    }
]

export default routes
