import Image from 'next/image'

import { getFilme } from "@/app/filmes";

export default function Home() {
  const filmes = getFilme();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
         
       

    </main>
  )
}
