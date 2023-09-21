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
                    <p>todos os items</p>
                    <p>Novo item</p>
                </header>
            </section>

            <Item />
        </Container>
    )
}