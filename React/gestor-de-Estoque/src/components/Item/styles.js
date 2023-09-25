import { styled } from "styled-components";



export const Content = styled.div`
    margin: 2rem;

    .buttons{
        display: flex;
        gap: 2rem;

        button{
            width: 7rem;
            height: 3rem;
            align-self: center;
        }
    }

    .cards{
        display: flex;
        gap: 2rem;

        p{
            margin: 2rem 0;
            padding: 1rem 2rem;
            background-color:  #1a1a1a;
            box-shadow: 2px 2px 10px black;
        }
    }
`