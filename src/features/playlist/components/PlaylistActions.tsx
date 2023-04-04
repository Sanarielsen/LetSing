import { NotePencil, XCircle } from "phosphor-react";

interface PlaylistActionsProps {
  item: Music;
}

export default function PlaylistActions({ item }: PlaylistActionsProps) {

  const handleAlterMusicInPlaylist = () => {

    console.log("handleAlterMusicInPlaylist()");
  }

  const handleRemoveMusicInPlaylist = () => {

    console.log("handleRemoveMusicInPlaylist()");
  }

  return (
    <>
      <div className="flex justify-center">
        <div>
          <button onClick={handleAlterMusicInPlaylist} className="p-1 m-3 bg-neutral-700 rounded-md border hover:border-pachi-green first:hover:text-pachi-green"> <NotePencil size={32} /> </button>
        </div>
        <div>
          <button onClick={handleRemoveMusicInPlaylist} className="p-1 m-3 bg-neutral-700 rounded-md border hover:border-pachi-red first:hover:text-pachi-red"> <XCircle size={32} /> </button>
        </div>
      </div>
    </>
  )
}