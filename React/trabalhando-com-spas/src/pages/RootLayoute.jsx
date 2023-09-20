import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export default function RootLayoute(){
    return( 
        <>
            <Header />
            <main>
                <p>Esse é o Layote principal</p>
                <hr />
                <Outlet />
            </main>
            <footer>
                <p>Feito com React router DOM</p>
            </footer>
        
        </>
    )
}