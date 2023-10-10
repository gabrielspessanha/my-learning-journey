'use client'
import { useState } from "react"

export default function SubscribeForm() {
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    setEmail("")
    alert("Email cadastrado com sucesso!")
  }

  return (
    <form
      className="flex justify-center"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Seu e-mail principal"
        className="bg-slate-800 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className=" rounded">
        Se inscrever
      </button>
    </form>
  )
}