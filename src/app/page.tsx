import Image from 'next/image'
import logo from '../assets/logo.svg'
import Link from 'next/link'
import { Tablet, Users, File, Cog, Edit2, SortDesc, Search } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-[max-content_1fr] bg-[#7C3AED]">
      <nav className="pl-9 pt-8 pr-7 min-h-full">
        <Image src={logo} alt="logo" width={50} height={56} />

        <ul className="mt-14 flex flex-col gap-9 font-medium text-[#CAB3FF] min-w-[120px] ">
          <li className="flex items-center gap-4 hover:font-bold hover:text-white ">
            <Tablet size={20} />
            <Link href={'/'}>Boards</Link>
          </li>
          <li className="flex items-center gap-4 hover:font-bold hover:text-white ">
            <Users size={20} />
            <Link href={'/'}>Equipes</Link>
          </li>
          <li className="flex items-center gap-4 hover:font-bold hover:text-white ">
            <File size={20} />
            <Link href={'/'}>Relatórios</Link>
          </li>
          <li className="flex items-center gap-4 hover:font-bold hover:text-white ">
            <Cog size={20} />
            <Link href={'/'}>Ajustes</Link>
          </li>
        </ul>
      </nav>
      <main className="mt-1">
        <div className="h-full bg-[#fbfaff] rounded-tl-[32px] px-8 py-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-[#403937]">Meu Kanban</h1>
              <Edit2 size={24} fill="#C7C7CD" color="#C7C7CD" />
            </div>

            <div className="w-16 h-16">
              <Image
                src="https://github.com/wwilliamsantana.png"
                alt="Image Profile"
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="flex items-center mt-8 gap-4 px-6">
            <button className="flex items-center gap-2 px-8 py-3 rounded-md bg-[#7C3AED] text-white text-sm">
              <SortDesc size={24} />
              Filtrar
            </button>
            <div className="px-6 py-3 rounded-lg shadow flex items-center flex-1 gap-3">
              <Search size={24} color="#a8a8b9" />
              <input
                className="w-full placeholder:text-[#7C7C8A] outline-none text-[#7C7C8A]"
                type="text"
                placeholder="Busque por cards, assuntos ou responsáveis..."
              />
            </div>
          </div>

          <div className="flex gap-12 pt-8 ">
            <div className="flex-1 p-6">
              <h2 className="py-6 text-xl font-bold">A fazer</h2>

              <div className="grid gap-6">
                <div className="p-6 shadow-md rounded-lg max-w-xs max-h-40">
                  <h3 className="font-bold text-sm">#boraCodar um Kanban 🧑‍💻</h3>
                  <p className="font-medium text-sm text-[#756966] mt-2 line-clamp-2 ">
                    Novo desafio do #boraCodar da Rocketseat, onde é proposto
                    construir um quadro de Kanban.Novo desafio do #boraCodar da
                    Rocketseat, onde é proposto construir um quadro de Kanban.
                  </p>
                  <div className="flex items-center gap-2 font-medium text-xs mt-2">
                    <span className="rounded-full text-[#7C3AED] bg-[#E2D6FF] px-2 py-1">
                      rocketseat
                    </span>
                    <span className="rounded-full text-[#7C3AED] bg-[#E2D6FF] px-2 py-1">
                      desafio
                    </span>
                  </div>
                </div>

                <div className="p-6 shadow-md rounded-lg max-w-xs max-h-40">
                  <h3 className="font-bold text-sm">Manter a ofensiva 🔥</h3>
                  <p className="font-medium text-sm text-[#756966] mt-2 line-clamp-2 ">
                    Manter minha atividade na plataforma da Rocketseat para não
                    perder a ofensiva
                  </p>
                  <div className="flex items-center gap-2 font-medium text-xs mt-2">
                    <span className="rounded-full text-[#7C3AED] bg-[#E2D6FF] px-2 py-1">
                      rocketseat
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 p-6">
              <h2 className="py-6 text-xl font-bold">Fazendo</h2>

              <div className="grid gap-6">
                <div className="p-6 shadow-md rounded-lg max-w-xs max-h-40">
                  <h3 className="font-bold text-sm">
                    Conferir o novo desafio 🚀{' '}
                  </h3>
                  <p className="font-medium text-sm text-[#756966] mt-2 line-clamp-2 ">
                    Conferir o novo projeto do #boraCodar para fazê-lo da melhor
                    maneira possível
                  </p>
                  <div className="flex items-center gap-2 font-medium text-xs mt-2">
                    <span className="rounded-full text-[#7C3AED] bg-[#E2D6FF] px-2 py-1">
                      rocketseat
                    </span>
                    <span className="rounded-full text-[#7C3AED] bg-[#E2D6FF] px-2 py-1">
                      desafio
                    </span>
                  </div>
                </div>

                <div className="p-6 shadow-md rounded-lg max-w-xs max-h-40">
                  <h3 className="font-bold text-sm">Ser incrível 😎</h3>
                  <p className="font-medium text-sm text-[#756966] mt-2 line-clamp-2 ">
                    Sempre me lembrar de manter minha autenticidade e espalhar
                    amor
                  </p>
                  <div className="flex items-center gap-2 font-medium text-xs mt-2">
                    <span className="rounded-full text-[#7C3AED] bg-[#E2D6FF] px-2 py-1">
                      autocuidado
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 p-6">
              <h2 className="py-6 text-xl font-bold">Feito</h2>

              <div className="grid gap-6">
                <div className="p-6 shadow-md rounded-lg max-w-xs max-h-40">
                  <h3 className="font-bold text-sm">
                    #boraCodar uma página de login 🧑‍💻
                  </h3>
                  <p className="font-medium text-sm text-[#756966] mt-2 line-clamp-2 ">
                    Novo desafio do #boraCodar da Rocketseat, onde é proposto
                    construir um quadro de Kanban.
                  </p>
                  <div className="flex items-center gap-2 font-medium text-xs mt-2">
                    <span className="rounded-full text-[#7C3AED] bg-[#E2D6FF] px-2 py-1">
                      rocketseat
                    </span>
                    <span className="rounded-full text-[#7C3AED] bg-[#E2D6FF] px-2 py-1">
                      desafio
                    </span>
                  </div>
                </div>

                <div className="p-6 shadow-md rounded-lg max-w-xs max-h-40">
                  <h3 className="font-bold text-sm">
                    #boraCodar uma página de login 🧑‍💻
                  </h3>
                  <p className="font-medium text-sm text-[#756966] mt-2 line-clamp-2 ">
                    Novo desafio do #boraCodar da Rocketseat, onde é proposto
                    construir um quadro de Kanban.
                  </p>
                  <div className="flex items-center gap-2 font-medium text-xs mt-2">
                    <span className="rounded-full text-[#7C3AED] bg-[#E2D6FF] px-2 py-1">
                      rocketseat
                    </span>
                    <span className="rounded-full text-[#7C3AED] bg-[#E2D6FF] px-2 py-1">
                      desafio
                    </span>
                  </div>
                </div>

                <div className="p-6 shadow-md rounded-lg max-w-xs max-h-40">
                  <h3 className="font-bold text-sm">
                    #boraCodar uma página de login 🧑‍💻
                  </h3>
                  <p className="font-medium text-sm text-[#756966] mt-2 line-clamp-2 ">
                    Novo desafio do #boraCodar da Rocketseat, onde é proposto
                    construir um quadro de Kanban.
                  </p>
                  <div className="flex items-center gap-2 font-medium text-xs mt-2">
                    <span className="rounded-full text-[#7C3AED] bg-[#E2D6FF] px-2 py-1">
                      rocketseat
                    </span>
                    <span className="rounded-full text-[#7C3AED] bg-[#E2D6FF] px-2 py-1">
                      desafio
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
