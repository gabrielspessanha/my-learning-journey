import { styled } from "styled-components";



export const Content = styled.form`
    margin: 2rem auto;
    max-width: 1080px;
    
    

    section{
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        margin: 1rem 0;

        select, input{
            width: 15rem;
            line-height: 1.5rem;
            background-color:  #1a1a1a;
        }

        div{
            padding: 1rem 0rem;
            display: flex;
            flex-direction: column;
        }
    
    }

    label{
        display: block;
    }
    textarea{
       width: 100%;
       max-width: 100%;
       background-color:  #1a1a1a;
       margin-bottom: 1rem 0;
    }
    button{
        display: block;
    }

`