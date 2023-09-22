import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";



export function RootLayoute(){
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer style={{
                margin: "2rem 2rem"
            }}>
                <p>Feito com React router DOM</p>
            </footer>
        
        
        </>
    )
}