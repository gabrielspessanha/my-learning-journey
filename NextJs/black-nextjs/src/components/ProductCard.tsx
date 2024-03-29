// src/components/ProductCard.tsx
'use client'
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { Button, Card, CardBody, CardSubtitle } from "reactstrap"
import { ProductType } from "./services/products"
import SuccessToast from "./SuccessToast"

type ProductCardProps = {
  product: ProductType
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const { id, name, imageUrl, price } = product

  return (
    <>
    <Card>
      <Link href={`/api/${id}`}>
        <Image className="card-img-top" src={imageUrl} alt="Product" height={250} width={600} />
      </Link>

      <CardBody>
        <Link href={`/api/${id}`}>
          <h5 className="card-title" style={{ cursor: 'pointer' }}>
            {name}
          </h5>
        </Link>

        <CardSubtitle className="mb-3 text-muted" tag="h6">
          R$ {price}
        </CardSubtitle>

        <Button
          color="dark"
          className="pb-2"
          block
          onClick={() => {
            setToastIsOpen(true)
            setTimeout(() => setToastIsOpen(false), 1000 * 3)
          }}
        >
          Adicionar ao Carrinho
        </Button>

      </CardBody>
    </Card>

    <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
  </>
  )
}

export default ProductCard