import { getFilme } from "@/app/filme";
import { Eye, Gem } from 'lucide-react';
import Image from 'next/image'
import { UserCircle, ShoppingCart, PlusCircle, Candy, Instagram, Twitch, CreditCard, CircleDollarSign } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const filmes = getFilme();
  return (
    <div className="bg-slate-800 min-h-screen items-center justify-between">
    <header className="w-full bg-zinc-950">
      <div className="flex w-full h-28 items-center">
        <img
          className='mt-0 ml-4 sm:ml-10' // Adjust margin for small screens
          src="/logo.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <div class="flex items-center ml-4 sm:ml-16"> {/* Adjust margin for small screens */}
          <div className="flex text-white">
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex"> Lancamentos </p>
          </div>
          <div className="flex text-white">
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex"> Só o Melhores </p>
          </div>
          <div className="flex text-white">
            <p className="mt-3 sm:mt-0 ml-4 sm:ml-20 flex"> Categorias </p>
          </div>
        </div>
        <div class="flex font-bold text-cyan-500 p-5 mt-3 ml-auto mr-4"> {/* Adjust margin for small screens */}
          <UserCircle /> ENTRAR
        </div>
      </div>
    </header>
      <main className="grid grid-cols-1 md:grid-cols-4 ml-7 mr-7 gap-4 mt-8 ">
        {filmes.map((filme) => (
          <div
            key={filme.codigo}
            className='bg-zinc-950 rounded-xl shadow-2xl hover:shadow-2xl hover:shadow-black transition-shadow duration-300 bg-whit'
          >
            <div className="w-full md:w-62 h-50">
              <img className="rounded-lg " src={filme.image} alt={filme.nome} />
            </div>
            <div className="text-base text-white font-medium px-3 mt-3 ">{filme.nome}</div>
            <div className="text-[12px] m-3 mt-3 text-gray-400 text-justify">{filme.resumo}</div>
            <div className='bg-slate-400 m-3 mt-6 w-full md:w-[100] h-[1px]'></div>
            <div className="text-xs text-cyan-700 um= px-3 mt-3 flex">
              <div className='flex '>
                <div className='w-[12px] h-[12px]'>
                  <Gem size={12} />
                </div>
                <div className=' ml-1'>
                  {filme.estilo}
                </div>
                <div className='  ml-16 text-gray-400 flex'>
                  <div className='w-[12px] h-[12px]'>
                    <Eye size={12} />
                  </div>
                  <div className=' ml-1'>
                    {filme.visu}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="m-5 border border-cyan-500 text-base text-cyan-500 rounded-md w-full md:w-40 h-11 items-center hover:bg-cyan-500 hover:text-white">
                <Link href={filme.link}>VER DETALHES</Link>
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}
