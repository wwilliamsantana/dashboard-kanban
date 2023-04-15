import Image from 'next/image'
import { Edit2, SortDesc, Search } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { board } from '@/data/board'
import { Card } from '@/components/Card'

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-[max-content_1fr] bg-[#7C3AED]">
      <Navbar />

      <main className="mt-1">
        <div className="h-full bg-[#fbfaff] rounded-tl-[32px] px-8 py-12">
          <section className="flex justify-between items-center">
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
          </section>

          <section className="flex items-center mt-8 gap-4 px-6">
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
          </section>

          <div className="flex gap-12 pt-8 ">
            {board.columns.map((cards) => {
              return (
                <div key={cards.id} className="flex-1 p-6">
                  <h2 className="py-6 text-xl font-bold">{cards.title}</h2>
                  <div className="grid gap-6">
                    {cards.cards.map((card) => (
                      <Card card={card} key={card.id} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
