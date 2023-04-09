import { useState } from "react";
import { Play } from "phosphor-react";

import PartyHeader from "@/features/party/components/PartyHeader"
import PartyMembers from "@/features/party/components/PartyMembers"

export default function PartyOverview() {

  const [statusParty, setStatusParty] = useState("stopped")

  const handleStartParty = () => {    
    setStatusParty("started")
  }

  return (
    <div className="flex justify-center mb-4">
      <div className="w-[940px]">

        <PartyHeader />

        { statusParty === "stopped" ? (

          <div className="flex justify-center py-5">
            <button
              className="p-3 m-3 bg-neutral-700 rounded-md border hover:border-pachi-green first:hover:text-pachi-green"
              onClick={handleStartParty}            
            >
              <Play size={32}/>
            </button>
          </div> 
        ) : statusParty === "started" ? (
          
          <PartyMembers />
        ) : null}
       
      </div>
    </div>
  )
}