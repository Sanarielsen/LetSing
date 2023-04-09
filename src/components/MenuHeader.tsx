import { List, MicrophoneStage, UserCircle } from "phosphor-react";

interface MenuHeaderProps {

  onClickMenuControl: () => void;
}

export default function MenuHeader( { onClickMenuControl }: MenuHeaderProps ) {

  return (

    <header className="menu-header flex justify-between bg-pachi-gray-header mb-4 py-5 px-5">      
      <div className="menu-control">
        <button className="first:hover:text-pachi-green" onClick={onClickMenuControl}>
          <List size={32} />
        </button>
      </div>
      <div className="menu-brand"> 
        <MicrophoneStage size={32} />
      </div>
      <div className="menu-brand"> 
        <UserCircle size={32} />
      </div>
    </header>
  )
}