import { ReactNode, useState } from "react";
import Image from "next/image";

import albumImg from "@/assets/album.jpg";
import TablePagination from "@/features/playlist/components/TablePagination"

interface TableMusicsProps {
  headers: string[];
  rows: Record<string, ReactNode>[];
}

export default function TableMusics( {headers, rows}: TableMusicsProps ) {
  
  const [elementsPerPage, setElementsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [elements, setElements] = useState(rows.slice((currentPage - 1), elementsPerPage));

  const handleClickChangePage = ( current: number ) => {
        
    setCurrentPage(current);
    reloadTableElements(current, elementsPerPage);
  }

  const handleClickChangeMaxElements = ( maxCurrent: number ) => {
    
    //ele ta pegando o valor atrasado;
    console.log("handleClickChangeMaxElements(" + maxCurrent + ")")
    //setElementsPerPage(...maxCurrent);
    //console.log("Elementos por página externo: ", elementsPerPage)
    // console.log("Maximo de elementos: ", maxCurrent, " Elementos por página: " ,elementsPerPage)
    reloadTableElements(currentPage, maxCurrent);    
  }

  const reloadTableElements = ( currentPage: number, maxCurrent: number ) => {

    console.log("reloadTableElements(" + currentPage + ", " + maxCurrent + ")")
    console.log("Total de musicas: ", rows.length)
    console.log("Número total de elementos: ", maxCurrent)
    console.log("Página atual: ", currentPage)
    // const start = elementsPerPage - (elementsPerPage * currentPage)
    // const end = (elementsPerPage * currentPage);
    // console.log(start, end)
    // const newElements = rows.slice(start, end);
    // setElements(newElements);
  }

  return (
    <table className="table-auto">
      <thead className=" bg-neutral-950">
        <tr>
          { headers.map( (header, index) => {
            const canHaveBorderSide =  index === 0 ? "rounded-tl-lg" : header === headers[headers.length - 1] ? "rounded-tr-lg" : "";
            return <th key={index} className={`py-3 ${canHaveBorderSide}`}>{header}</th> 
          })}
        </tr>
      </thead>
      <tbody>
        { elements.map( (element, index) => (          
          <tr key={index} className="border-b border-b-zinc-800">
            <td className="p-3">
              <Image
                className="rounded-md w-10 h-10"           
                src={albumImg}
                placeholder="blur"
                alt="Foto do album"
              />
            </td>
            <td className="p-3">
              <div className="text-sm font-medium">
                {element.name}
              </div>
              <div className="text-sm text-gray-500">
                {element.artist}
              </div>              
            </td>            
            <td className="p-3">{element.album}</td>            
            <td className="p-3">{element.owner}</td>
            <td className="p-3">{element.actions}</td>
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