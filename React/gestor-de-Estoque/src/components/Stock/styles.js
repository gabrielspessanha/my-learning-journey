import { styled } from "styled-components";



export const Container = styled.div`
    margin: 0 2rem;


    section{

        header{
            display: flex;
            gap: 1rem;
            border-bottom: 1px solid grey;

            &>*{
                padding: 0 1rem;
                margin: -1px;
                border-bottom: 1px solid transparent;
                transition: border .2s;
                color: #FFF;

                &:hover{
                    border-bottom: 1px solid #FFF;
                }
            }
        }

        
    }
`