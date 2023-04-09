export default function PartyHeader() {

  return (

    <div className="flex justify-between py-5">
      <div className="flex items-center">
        <h1 className="text-xl font-bold"> Karaokê </h1>
      </div>        

      <div>
        <p className="font-bold">Início:</p> 
        <span>14/04/2023 19:00</span>
      </div>

      <div>
        <p className="font-bold">Fim:</p>
        <span>14/04/2023 23:00</span>
      </div>
    </div>
  )
}