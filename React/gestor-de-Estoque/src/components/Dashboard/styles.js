import { styled } from "styled-components";

export const Main = styled.main`
    margin: 0 2rem;


   .mainDashboard{
    display: flex;
    place-content: center;
    gap: 1rem;

    div{
        background-color: #222831;
        padding:0 1rem;
        width: 300px;
        border-radius: 5px;
        box-shadow: 5px 5px 20px black;

        h2{
            text-align: center;
            font-size: 2.2rem;
        }
    }
   }
   .tableDashboard{
    margin-top: 2rem;
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 1rem;

    table{
        width: 100%;
        text-align: left;
        border-spacing: 0 .5rem;


        thead{
            
            tr{
                border-radius: 5px;
                height: 50px;
                border: 2px solid red;
                background-color: #1a1a1a;
            }
        }
        
        tbody{
            tr{
                transition: background .2s;

                &:hover{
                    background: #222831;
                }
            }
        }
  
    }



   }

   

`