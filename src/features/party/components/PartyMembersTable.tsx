import Image from "next/image";
import { ReactNode } from "react";

import participantImage from "@/assets/participant.jpg";
import TablePagination from "@/features/playlist/components/TablePagination";

interface PartyMembersTableProps {
  headers: string[];
  rows: Record<string, ReactNode>[];
}

export default function PartyMembersTable( { headers, rows }: PartyMembersTableProps ) {

  const handleClickChangePage = () => {

    console.log("handleClickChangePage();");
  }

  const handleClickChangeMaxElements = () => {

    console.log("handleClickChangeMaxElements();");
  }

  return (
    <table className="table-auto w-[100%]">
      <thead className="bg-neutral-950">
        <tr>
          { headers.map( (header, index) => {
            const canHaveBorderSide =  index === 0 ? "rounded-tl-lg" : header === headers[headers.length - 1] ? "rounded-tr-lg" : "";
            return <th key={index} className={`py-3 ${canHaveBorderSide}`}>{header}</th> 
          })}
        </tr>
      </thead>
      <tbody>
        { rows.map( (element, index) => (          
          <tr key={index} className="border-b border-b-zinc-800">
            <td className="p-3 flex justify-center">
              <Image
                className="rounded-md w-10 h-10"           
                src={participantImage}
                placeholder="blur"
                alt="Foto do album"
              />
            </td>
            <td className="p-3">
              <div className="text-sm font-medium">
                {element.member}
              </div>
            </td>
            <td className="p-3">
              <div className="text-sm font-medium text-center">
                {element.status}
              </div>
            </td>
            <td className="p-3">
              <div className="text-sm font-medium text-center">
                {element.lastSingedIn}
              </div>
            </td>
            <td className="p-3">
              <div className="text-sm font-medium">
                {element.actions}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={5} className="p-3">
            <TablePagination quantData={rows.length} onClickPage={handleClickChangePage} onClickMaxElements={handleClickChangeMaxElements} />
          </td>
        </tr>
      </tfoot>
    </table>
  )
}
