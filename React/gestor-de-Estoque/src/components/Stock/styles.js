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

                &:hover{
                    border-bottom: 1px solid #FFF;
                }
            }
        }

        
    }

    table{
        margin: 2rem 0;
        width: 100%;
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
                        color: #1a1a1a;
                    }
                    .show{
                        background-color: blue;
                    }
                    .update{
                        background-color: #FFF;
                    }
                    .delete{
                        background-color: red;;
                    }
                }
            }
        }
  
    }
`