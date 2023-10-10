'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { Button, Container } from 'reactstrap';

export default function Home(){
  return (
    <>
      <main >
        <Container className="py-5 text-center">
          <h1 className="mt-5 display-1">
            O melhor jeito de comprar o que você ama
          </h1>
          <p className="my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae iusto voluptatem obcaecati omnis error architecto neque cum exercitationem fugiat. Vero illo autem eum nisi sapiente, odio optio accusamus cupiditate ad.
          </p>
          <Link href="/products">
            <Button color="dark" className="px-4 pb-2">
              Conheça nossos produtos!
            </Button>
          </Link>
        </Container>
      </main>

    </>
    
  )
}

