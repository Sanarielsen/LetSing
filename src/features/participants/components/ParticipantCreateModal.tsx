import { Modal } from "@/components/Modal"
import { Plus } from "phosphor-react";
import { useRef, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form";

interface ParticipantCreateModalProps {

  open: boolean;
  title: string;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitModal: () => void;
}

export default function ParticipantCreateModal({ open, title, onOpenChange }: ParticipantCreateModalProps) {

  const { handleSubmit, register } = useForm<Participant>();

  const [modal, setModal] = useState(false);
  const refButtonActivate = useRef<HTMLButtonElement>(null)
  const refPanel = useRef<HTMLDivElement>(null)

  const handleActiveModal = () => {
  
    console.log("handleActiveModal()");
    setModal(!modal);
  }

  const handleFormSubmit: SubmitHandler<Participant> = (data) => {

    console.log("handleFormSubmit(" + data + ")");
  }

  return (
    <Modal
      open={open}
      title={title}
      handleOpenChange={onOpenChange}
      ref={refButtonActivate}
    >
      <button
        type="button"
        className="p-3 m-3 bg-neutral-700 rounded-md border hover:border-pachi-green first:hover:text-pachi-green" 
        onClick={handleActiveModal}><Plus size={24} />
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