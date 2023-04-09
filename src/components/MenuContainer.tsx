import { useState } from "react";
import MenuHeader from "./MenuHeader";
import { Confetti, Info, MicrophoneStage, MusicNotes, UsersThree } from "phosphor-react";
import { useRouter } from "next/router";

interface MenuContainerProps {

  children: React.ReactNode;
}

export default function MenuContainer( {children}: MenuContainerProps ) {

  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItemSelected = (route: string) => {

    router.push(route);
  }

  const handleMenuControl = () => {    
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="static h-[100%]">
            
      <MenuHeader onClickMenuControl={handleMenuControl} />
      { menuOpen ? (        
        <>
          <div onClick={handleMenuControl} className="absolute top-0 left-0 w-[100%] h-[100%] bg-pachi-gray-header opacity-50 z-0"></div>
          <aside className="menu-aside absolute top-0 left-0 h-[100%] px-7 bg-pachi-gray-header transition-all duration-500 ease-linear">
            <div className="w-[280px] h-[100%]">          
              <div className="brand flex items-center justify-center py-7">
                <div>
                  <div className="flex justify-center">
                    <MicrophoneStage className="mr-3" size={32} />
                  </div>
                  <span className="text-3xl">Letsing</span>
                </div> 
              </div>              
              <ul>
                <li onClick={() => handleMenuItemSelected("/party")} className="flex items-center py-5 pl-3 rounded-lg hover:bg-zinc-950 cursor-pointer"><MicrophoneStage className="mx-3" size={32} />Bora cantar!</li>
                <li onClick={() => handleMenuItemSelected("/playlist")} className="flex items-center py-5 pl-3 rounded-lg hover:bg-zinc-950 cursor-pointer"><MusicNotes className="mx-3" size={32} />Playlist</li>
                <li onClick={() => handleMenuItemSelected("/participantes")} className="flex items-center py-5 pl-3 rounded-lg hover:bg-zinc-950 cursor-pointer"><UsersThree className="mx-3" size={32} />Participantes</li>
                <li onClick={() => handleMenuItemSelected("/evento")} className="flex items-center py-5 pl-3 rounded-lg hover:bg-zinc-950 cursor-pointer"><Confetti className="mx-3" size={32} />Evento</li>
                <li onClick={() => handleMenuItemSelected("/sobre")} className="flex items-center py-5 pl-3 rounded-lg hover:bg-zinc-950 cursor-pointer"><Info className="mx-3" size={32} />Sobre</li>
              </ul>
            </div>
          </aside>
        </>
      ) : null }

      { children }
    </div>
  )
}