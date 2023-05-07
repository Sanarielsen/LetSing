import Image from 'next/image'
import { List, UserCircle } from "phosphor-react";

interface MenuHeaderProps {

  onClickMenuControl: () => void;
}

export default function MenuHeader( { onClickMenuControl }: MenuHeaderProps ) {

  return (

    <header className="menu-header flex justify-between bg-pachi-gray-header mb-4 py-5 px-5">      
      <div className="menu-control  flex align-middle">
        <button className="first:hover:text-pachi-green" onClick={onClickMenuControl}>
          <List size={32} />
        </button>
      </div>
      <div className="menu-brand flex align-middle"> 
        <Image src="/logo-light.png" width={48} height={32} alt="Logo Letsing"/>
      </div>
      <div className="menu-brand flex align-middle items-center"> 
        <UserCircle size={32} />
      </div>
    </header>
  )
}