'use client'
import products from '@/../database.json'
import { Button, Col, Row } from 'reactstrap'
import Image from "next/image";
import SuccessToast from '@/components/SuccessToast';
import { useState } from 'react';


export default function page({ params }: { params: { id: string } } ){
  const product = products.find(prod => prod.id === Number(params.id))
  const [toastIsOpen, setToastIsOpen] = useState(false)
  return (
    <Row>
      <Col lg={6}>
        <Image
          src={product.imageUrl}
          alt={product.name}
          height={500}
          width={600}
        />
      </Col>

      <Col lg={6}>
        <h1>{product.name}</h1>

        <h2 className="text-muted">R$ {product.price}</h2>

        <p className="my-3">
          <span className="d-block font-weight-bold">Descrição:</span>
          {product.description}
        </p>

        <p className="text-muted">Em estoque: {product.inStock}</p>

        <Button
          color="dark"
          className="my-3 pb-2"
          block
          onClick={() => {
            setToastIsOpen(true)
            setTimeout(() => setToastIsOpen(false), 1000 * 3)
          }}
        >
          Compre agora
        </Button>

        <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
      </Col>
    </Row>
  )
    

}