import { styled } from "styled-components";


export const Table = styled.table`
        margin: 2rem;
        width: 95%;
        text-align: left;
        border-spacing: 0 .5rem;


        thead{
            tr{
                border-radius: 5px;
                height: 50px;
                background-color: #1a1a1a;
                
                th{
                    padding: 1rem 2rem;
                }
            }
        }
        
        tbody{

            tr{
                transition: background .2s;
                
                

                &:hover{
                    background: #222831;
                }

                td{
                    padding: 1rem 2rem;
                    

                    button{
                        margin-right: .5rem;
                    }
                }
            }
        }


`