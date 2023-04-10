import { Modal } from "@/components/Modal"
import { useRef, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form";

interface ParticipantCreateModalProps {

  open: boolean;
  title: string;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitModal: () => void;
}

export default function ParticipantCreateModal({ open, title, onOpenChange }: ParticipantCreateModalProps) {

  const { handleSubmit, register } = useForm();

  const [modal, setModal] = useState(false);
  const refModalFile = useRef<HTMLButtonElement>(null)

  const handleFormSubmit: SubmitHandler<Participant> = (data) => {

    console.log("handleFormSubmit(" + data + ")");
  }

  return (
    <Modal
      open={open}
      title={title}
      handleOpenChange={onOpenChange}
      ref={refModalFile}           
    >
      <button
        type="button"
        onClick={() => setModal(true)}               
      >
        Adicionar participante
      </button>

      <div className="dialogBody">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input 
            type="text"            
            {...register("display_name")}
          />
        </form>
      </div>
    </Modal>
  )
}