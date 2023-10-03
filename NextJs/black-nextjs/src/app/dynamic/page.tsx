'use client'
import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

interface ApiResponse{
    name: string
    timestamp: Date
}


export default function Dynamic() {
    const [clientSideData, setClientSideData] = useState<ApiResponse>()

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async ()=>{
        const data = await fetch("/api").then(res => res.json())
        setClientSideData(data)
    }

    return (
        <>
        <Container tag="main">
            <h1 className="my-5">
                Como funcionam as renderizações do Next.js
            </h1>

            <Row>
                <Col>
                <h3>
                    Gerado no servidor:
                </h3>
                <h2>
                    
                </h2>
                </Col>

                <Col>
                <h3>
                    Gerado no cliente:
                </h3>
                <h2>
                    {clientSideData?.timestamp.toString()}
                </h2>
                </Col>
            </Row>
        </Container>
        </>
        
    )
}