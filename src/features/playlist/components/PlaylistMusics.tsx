import TableMusics from "@/features/playlist/components/TableMusics";
import PlaylistActions from "@/features/playlist/components/PlaylistActions"
import PlaylistHeader from "@/features/playlist/components/PlaylistHeader"

const headersPlayList = ["", "Título", "Album", "Solicitante", "Actions"];
const rowsPlayList: Music[] = [

  { name: "Crush Crush Crush Crush", artist: "Paramore", album: "Riot", albumArt: "https://i.scdn.co/image/ab67616d0000b273a1b2b1b2b1b2b1b2b1b2b1b2", owner: "Samuel Henrique" },
  { name: "Still into you", artist: "Paramore", album: "After Laughter", albumArt: "https://m.media-amazon.com/images/I/71NEqnKS2dL._AC_SL1400_.jpg", owner: "Samuel Henrique" },
  { name: "Yo soy Rebelde", artist: "RBD", album: "RBD First", albumArt: "https://i.scdn.co/image/ab67616d0000b273a1b2b1b2b1b2b1b2b1b2b1b2", owner: "Pachi Parra" },
  { name: "The Sliding Mr. Bones (Next Stop, Pottersville)", artist: "Malcolm Lockyer", album: "The Sliding Mr. Bones (Next Stop, Pottersville)", albumArt: "https://i.scdn.co/image/ab67616d0000b273a1b2b1b2b1b2b1b2b1b2b1b2", owner: "Malcolm Lockyer" },
  { name: "The Sliding Mr. Bones (Next Stop, Pottersville)", artist: "Malcolm Lockyer", album: "The Sliding Mr. Bones (Next Stop, Pottersville)", albumArt: "https://i.scdn.co/image/ab67616d0000b273a1b2b1b2b1b2b1b2b1b2b1b2", owner: "Malcolm Lockyer" },
  { name: "The Sliding Mr. Bones (Next Stop, Pottersville)", artist: "Malcolm Lockyer", album: "The Sliding Mr. Bones (Next Stop, Pottersville)", albumArt: "https://i.scdn.co/image/ab67616d0000b273a1b2b1b2b1b2b1b2b1b2b1b2", owner: "Malcolm Lockyer" },
  { name: "The Sliding Mr. Bones (Next Stop, Pottersville)", artist: "Malcolm Lockyer", album: "The Sliding Mr. Bones (Next Stop, Pottersville)", albumArt: "https://i.scdn.co/image/ab67616d0000b273a1b2b1b2b1b2b1b2b1b2b1b2", owner: "Malcolm Lockyer" },
  { name: "The Sliding Mr. Bones (Next Stop, Pottersville)", artist: "Malcolm Lockyer", album: "The Sliding Mr. Bones (Next Stop, Pottersville)", albumArt: "https://i.scdn.co/image/ab67616d0000b273a1b2b1b2b1b2b1b2b1b2b1b2", owner: "Malcolm Lockyer" },
  { name: "The Sliding Mr. Bones (Next Stop, Pottersville)", artist: "Malcolm Lockyer", album: "The Sliding Mr. Bones (Next Stop, Pottersville)", albumArt: "https://i.scdn.co/image/ab67616d0000b273a1b2b1b2b1b2b1b2b1b2b1b2", owner: "Malcolm Lockyer" },
  { name: "The Sliding Mr. Bones (Next Stop, Pottersville)", artist: "Malcolm Lockyer", album: "The Sliding Mr. Bones (Next Stop, Pottersville)", albumArt: "https://i.scdn.co/image/ab67616d0000b273a1b2b1b2b1b2b1b2b1b2b1b2", owner: "Malcolm Lockyer" },
  { name: "The Sliding Mr. Bones (Next Stop, Pottersville)", artist: "Malcolm Lockyer", album: "The Sliding Mr. Bones (Next Stop, Pottersville)", albumArt: "https://i.scdn.co/image/ab67616d0000b273a1b2b1b2b1b2b1b2b1b2b1b2", owner: "Malcolm Lockyer" },
  { name: "The Sliding Mr. Bones (Next Stop, Pottersville)", artist: "Malcolm Lockyer", album: "The Sliding Mr. Bones (Next Stop, Pottersville)", albumArt: "https://i.scdn.co/image/ab67616d0000b273a1b2b1b2b1b2b1b2b1b2b1b2", owner: "Malcolm Lockyer" },
]

export default function PlaylistMusics() {

  const mapPlayList = (list: Music[]) => {
    if (!list) return [{}];

    return list.map( (music) => ({

      ...music,
      actions: <PlaylistActions item={music} />
    }))
  }
  
  return (
    <>
      <div className="flex justify-center mb-4">
        <div className="w-[940px]">
          <PlaylistHeader />

          <TableMusics 
            headers={headersPlayList} 
            rows={mapPlayList(rowsPlayList)}
          />
        </div>
      </div>
    </>
  )
}