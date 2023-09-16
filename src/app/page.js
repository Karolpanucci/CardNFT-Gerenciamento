import Image from 'next/image'

import { getFilme } from "@/app/filme";
import { Eye, Gem } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const filmes = getFilme();
  return (
    <div className=" bg-slate-900  flex min-h-screen flex-col items-center justify-between p-24 ">
            

            <main className="grid grid-cols-4 ml-7 mr-7 gap-4 mt-8 ">
          {filmes.map((filme) => (
            <div
              key={filme.codigo}
              className='bg-zinc-950  rounded-xl shadow-2xl hover:shadow-2xl hover:shadow-black   transition-shadow duration-300 bg-whit'
            >
              <div className="  w-62 h-50">
                <img className="rounded-lg " src={filme.image} alt={filme.nome} />
              </div>
              <div className="text-base text-white font-medium px-3 mt-3 ">{filme.nome}</div>
              <div className="text-[12px] m-3 mt-3 text-gray-400 text-justify">{filme.resumo}</div>

              <div className=' bg-slate-400  m-3 mt-6 w-[100] h-[1px]'></div>
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
                      <Eye size={12}/>
                      </div>
                      <div className=' ml-1'>
                        {filme.visu}
                      </div>
                  </div>
                 
                    
              </div>
           
            </div>


              <div className="flex justify-center">
              <button className="m-5 border border-cyan-500 text-base text-cyan-500 rounded-md w-40 h-11 items-center hover:bg-cyan-500 hover:text-white">
              <Link href={filme.link}>VER DETALHES</Link>
                </button>
              </div>
            </div>
          ))}
        </main>
       

    </div>
  )
}
