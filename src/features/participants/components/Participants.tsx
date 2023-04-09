import ParticipantsHeader from "./ParticipantsHeader";
import ParticipantsTable from "./ParticipantsTable";

const headersParticipants = ["", "Nome do Participante"];
const rowsParticipants = [
  {
    uuid: "199c43327-dedc-43bd-ba05-9f64e09490d9",
    display_name: "Samuel de Oliveira",
    image: "https://avatars.githubusercontent.com/u/67290994?v=4",
  },
  {
    uuid: "f9fd91a3-736e-4fbe-b677-0ebe8b904d49",
    display_name: "Samuel Silva",
    image: "https://avatars.githubusercontent.com/u/67290994?v=4",
  },
  {
    uuid: "6339a189-5001-40d5-82c2-ba9fcc8dd6ab",
    display_name: "Samuel Marques",
    image: "https://avatars.githubusercontent.com/u/67290994?v=4",
  },
  {
    uuid: "adaf5a81-af44-40a5-a129-9de6f1c3adbe",
    display_name: "Samuel Junior",
    image: "https://avatars.githubusercontent.com/u/67290994?v=4",
  },
  {
    uuid: "868127cf-5c64-4c0c-bdf6-bba2aac28dc4",
    display_name: "Samuel de Paraia",
    image: "https://avatars.githubusercontent.com/u/67290994?v=4",
  },
  {
    uuid: "573deb43-ed94-468a-af8a-11ae463ededd",
    display_name: "Samuel Juliel",
    image: "https://avatars.githubusercontent.com/u/67290994?v=4",
  },
  {
    uuid: "944540e1-569e-4da0-b780-d781e3024b89",
    display_name: "Samuel Nylium",
    image: "https://avatars.githubusercontent.com/u/67290994?v=4",
  },
];

export default function Participants() {

  return (
    <div className="flex justify-center mb-4">
      <div className="w-[940px]">
        <ParticipantsHeader />

        <ParticipantsTable 
          headers={headersParticipants}
          rows={rowsParticipants}        
        />
      </div>
    </div>    
  )
}