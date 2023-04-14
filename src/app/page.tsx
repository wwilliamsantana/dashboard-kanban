import Image from 'next/image'
import logo from "../assets/logo.svg"
import Link from 'next/link'
import {Tablet, Users, File, Cog, Edit2} from "lucide-react"


export default function Home() {
  return (
    <div className='min-h-screen grid grid-cols-[max-content_1fr] bg-[#7C3AED]'>
      <nav className='pl-9 pt-8 pr-7 min-h-full'>

        <Image src={logo} alt='logo' width={50} height={56}/>
       
        <ul className='mt-14 flex flex-col gap-9 font-medium text-[#CAB3FF] min-w-[120px] '>
          <li className='flex items-center gap-4 hover:font-bold hover:text-white '>
            <Tablet size={20}  />
            <Link href={"/"}>Boards</Link>
          </li>
          <li className='flex items-center gap-4 hover:font-bold hover:text-white '>
            <Users size={20}  />
            <Link href={"/"}>Equipes</Link>
          </li>
          <li className='flex items-center gap-4 hover:font-bold hover:text-white '>
            <File size={20} />
            <Link href={"/"}>Relatórios</Link>
          </li>
          <li className='flex items-center gap-4 hover:font-bold hover:text-white '>
            <Cog size={20} />
            <Link href={"/"}>Ajustes</Link>
          </li>
        </ul>

      </nav>
      <main className='mt-1'>
        <div className='h-full bg-[#fbfaff] rounded-tl-[32px] px-8 py-12'>
          <div className='flex justify-between items-center'>

            <div className='flex items-center gap-3'>
              <h1 className='text-3xl font-bold text-[#403937]'>Meu Kanban</h1>
              <Edit2 size={24} fill='#C7C7CD' color='#C7C7CD'/>
            </div>

            <div className='w-16 h-16'>
              <Image src='https://github.com/wwilliamsantana.png' alt='Image Profile' width={64} height={64} className='rounded-full'/>
            </div>

            {/* <div>
              <button></button>
              <div>
                Icon*
                <input type="text" />
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  )
}
