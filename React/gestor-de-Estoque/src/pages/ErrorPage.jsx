import { useRouteError } from "react-router-dom"



export function ErrorPage(){
    const error = useRouteError();
    console.error(error)

    return(
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Desculpa, uma erro inesperado foi ocorrido.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}