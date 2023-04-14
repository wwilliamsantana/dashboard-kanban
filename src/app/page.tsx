import Image from 'next/image'
import logo from "../assets/logo.svg"
import Link from 'next/link'
import {Tablet, Users, File, Cog} from "lucide-react"


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
      <main>Content  </main>
    </div>
  )
}
