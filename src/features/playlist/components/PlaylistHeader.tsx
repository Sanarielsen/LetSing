import { Plus, Microphone } from "phosphor-react"

export default function PlaylistHeader() {

  const handleAddMusicInPlaylist = () => {
    console.log("handleAddMusicInPlaylist()")
  }
  
  const handleRefreshPlaylist = () => {
    console.log("handleRefreshPlaylist()")
  }

  return (
    <div className="flex flex-row">
      <div className="flex items-center basis-1/2"> 
        <h1 className="text-xl font-bold"> Listagem de Músicas </h1>
        </div>

      <div className="flex justify-end basis-1/2">
        <div>
          <button className="p-3 m-3 bg-neutral-700 rounded-md border hover:border-pachi-green first:hover:text-pachi-green" onClick={handleAddMusicInPlaylist}> <Plus size={24} /> </button>
        </div>
        <div>        
          <button className="p-3 m-3 bg-neutral-700 rounded-md border hover:border-pachi-yellow first:hover:text-pachi-yellow" onClick={handleRefreshPlaylist}> <Microphone className="hover:text-pachi-yellow" size={24} /> </button>
        </div>
      </div>
    </div>
  )
}