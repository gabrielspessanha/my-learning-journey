import { Outlet } from "react-router-dom";
import { Stock } from "../components/Stock";

export function StockPage(){
    return(
        <>
            <Stock />
            <Outlet />
        </>
    )
}