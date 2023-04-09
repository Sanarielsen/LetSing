import { Ticket } from "phosphor-react"

import { PartyMember } from "@/features/party/types/Party"
import PartyActions from "@/features/party/components/PartyActions"
import PartyMembersTable from "@/features/party/components/PartyMembersTable"

const headerPartyMembers = ["", "Nome do participante", "Status", "Última participação", "Ações"]

const rowsPartyMembers: PartyMember[] = [
  { uuid: "199c43327-dedc-43bd-ba05-9f64e09490d9", member: "Samuel de Oliveira", memberProfile: "https://avatars.githubusercontent.com/u/67290994?v=4", status: "Em espera", lastSingedIn: "00:10:00" },
  { uuid: "f9fd91a3-736e-4fbe-b677-0ebe8b904d49", member: "Samuel Silva", memberProfile: "https://avatars.githubusercontent.com/u/67290994?v=4", status: "Em espera", lastSingedIn: "00:05:00" },
  { uuid: "6339a189-5001-40d5-82c2-ba9fcc8dd6ab", member: "Samuel Marques", memberProfile: "https://avatars.githubusercontent.com/u/67290994?v=4", status: "Aguardando", lastSingedIn: null },
  { uuid: "adaf5a81-af44-40a5-a129-9de6f1c3adbe", member: "Samuel Junior", memberProfile: "https://avatars.githubusercontent.com/u/67290994?v=4", status: "Aguardando", lastSingedIn: null },
  { uuid: "868127cf-5c64-4c0c-bdf6-bba2aac28dc4", member: "Samuel de Paraia", memberProfile: "https://avatars.githubusercontent.com/u/67290994?v=4", status: "Aguardando", lastSingedIn: null },
  { uuid: "573deb43-ed94-468a-af8a-11ae463ededd", member: "Samuel Juliel", memberProfile: "https://avatars.githubusercontent.com/u/67290994?v=4", status: "Aguardando", lastSingedIn: null },
  { uuid: "944540e1-569e-4da0-b780-d781e3024b89", member: "Samuel Nylium", memberProfile: "https://avatars.githubusercontent.com/u/67290994?v=4", status: "Aguardando", lastSingedIn: null },
]

export default function PartyMembers() {

  const handleClickedAction = (action: string, item: Music) => {

    console.log('action', action)
    console.log('item', item)
  }

  const mapPlayList = (list: PartyMember[]) => {
    if (!list) return [{}];

    return list.map( (member) => ({

      ...member,
      actions: <PartyActions item={member} onClickedAction={handleClickedAction} />
    }))
  }

  return (
    <>
      <div className="flex justify-end pb-5 pt-2 pr-2">
        <button className="p-1 m-1 bg-neutral-700 rounded-md border hover:border-pachi-green first:hover:text-pachi-green"><Ticket size={32} /></button>
      </div>

      <PartyMembersTable
        headers={headerPartyMembers}
        rows={mapPlayList(rowsPartyMembers)}
      />
    </>
  )
}