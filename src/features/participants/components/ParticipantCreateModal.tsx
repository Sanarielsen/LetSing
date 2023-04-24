import { Modal } from "@/components/Modal";
import { Plus } from "phosphor-react";
import { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface ParticipantCreateModalProps {
  open: boolean;
  title: string;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitModal: () => void;
}

export default function ParticipantCreateModal({
  open,
  title,
  onOpenChange,
  onSubmitModal,
}: ParticipantCreateModalProps) {
  const { handleSubmit, register } = useForm<Participant>();

  const [modal, setModal] = useState(false);
  const refButtonActivate = useRef<HTMLButtonElement>(null);

  const handleActiveModal = () => {
    console.log("handleActiveModal()");
    setModal(!modal);
  };

  const handleFormSubmit: SubmitHandler<Participant> = (data) => {
    onSubmitModal();
    onOpenChange(false);
  };

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
        onClick={handleActiveModal}
      >
        <Plus size={24} />
      </button>

      <div className="dialogBody p-4">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div id="modalBodyParticipants" className="py-4">
            <fieldset>
              <div className="grid grid-cols-4">
                <div className="col-span-1 flex justify-center items-center">
                  <label
                    className="block align-middle font-semibold"
                    htmlFor="display_name"
                  >
                    Nome:
                  </label>
                </div>
                <div className="col-span-3">
                  <input
                    className="w-full p-2 bg-zinc-950 text-white border border-gray-400 rounded-md"
                    type="text"
                    id="display_name"
                    {...register("display_name")}
                  />
                </div>
              </div>
            </fieldset>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="p-3 m-3 w-[100%] bg-neutral-700 rounded-md border hover:border-pachi-green hover:text-pachi-green"
              type="submit"
            >
              Cadastrar participante
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
