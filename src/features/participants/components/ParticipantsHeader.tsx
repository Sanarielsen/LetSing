import { Plus } from "phosphor-react";

export default function ParticipantsHeader() {

  const handleAddParticipant = () => {

    console.log("handleAddParticipant()");
  }

  return (
    <div className="flex flex-row">
      <div className="flex items-center basis-1/2"> 
        <h1 className="text-xl font-bold"> Listagem de Participantes </h1>
      </div>
      <div className="flex justify-end basis-1/2">
        <div>
          <button className="p-3 m-3 bg-neutral-700 rounded-md border hover:border-pachi-green first:hover:text-pachi-green" onClick={handleAddParticipant}><Plus size={24} /></button>
        </div>
      </div>
    </div>
  )
}