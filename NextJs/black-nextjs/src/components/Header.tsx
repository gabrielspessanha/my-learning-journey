'use client'
import Link from "next/link";

export default function Header(){
  return(
        <div>
          <header className="header">
            <h2>INSIGHTS</h2>
            <nav className="links">
              <Link href="/">início</Link>
              <Link href="/products">Produtos</Link>
              <Link href="/cart">Carrinho</Link>
            </nav>
          </header>
        </div>
  )
}