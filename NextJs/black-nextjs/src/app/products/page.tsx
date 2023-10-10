'use client'
import ProductsList from "@/components/ProductsList"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap"
import products from '@/../database.json'


export default function Products() {
  return (
    <>
      <main>
        <Container className="mb-5">
          <h1 className="my-5">
            Nossos Produtos
          </h1>

          {<ProductsList products={products!} />}
        </Container>
      </main>
    </>
  )
}

