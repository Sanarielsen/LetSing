import { MicrophoneStage } from "phosphor-react";

import { PartyMember } from "@/features/party/types/Party";

interface PartyActionsProps {

  item: PartyMember;
  onClickedAction: (action: string, item: Music) => void;
}

export default function PartyActions( {item}: PartyActionsProps ) {

  const canSingNow = Boolean(item.status === "Aguardando")  

  return (
    <div className="flex justify-center">
      <button 
        className="p-1 m-1 bg-neutral-700 rounded-md border hover:border-pachi-green first:hover:text-pachi-green  disabled:first:border-gray-500 disabled:first:text-gray-500 disabled:border-gray-500 disabled:cursor-not-allowed"
        disabled={!canSingNow}
      >
        <MicrophoneStage size={24}/>
      </button>
    </div>
  )
}