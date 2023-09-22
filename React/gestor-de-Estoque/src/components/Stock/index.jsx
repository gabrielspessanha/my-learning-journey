import { Link } from "react-router-dom";
import { AllItems } from "../AllItems";
import { Item } from "../Item";
import { NewItem } from "../NewItem";
import { Container } from "./styles";



export function Stock(){
    return(
        <Container>
            <h2>Stock Items</h2>

            <section>
                <header>
                    <Link to={"/items"}>todos os items</Link>
                    <Link to={"items/newitem"}>Novo item</Link>
                </header>
            </section>
        </Container>
    )
}