import { Plus } from "phosphor-react";
import ParticipantCreateModal from "./ParticipantCreateModal";
import { useState } from "react";

export default function ParticipantsHeader() {

  const [modalCreate, setModalCreate] = useState(false);

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
          <ParticipantCreateModal 
            open={modalCreate}
            title="Adicionar Participante"
            onOpenChange={() => {setModalCreate(!modalCreate)}}
            onSubmitModal={() => {handleAddParticipant}}
          />
        </div>
      </div>
    </div>
  )
}