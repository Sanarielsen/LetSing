import { useState } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";

const selectOptions = [5, 10, 15, 20, 25];

interface TablePaginationProps {

  quantData: number;
  onClickPage: (current: number) => void;
  onClickMaxElements: (max: number) => void;
}

export default function TablePagination( { quantData, onClickPage, onClickMaxElements }: TablePaginationProps ) {
  
  const [elementsPerPage, setElementsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(quantData / elementsPerPage);

  const handleRefreshMaxPages = (maxElements: number) => {
    
    setElementsPerPage(maxElements);
    setCurrentPage(1);
    setPages(quantData / maxElements);
    onClickMaxElements(maxElements);
    onClickPage(1)
  }

  const handlePrevPage = () => {
    if ( currentPage > 1 ) {
      setCurrentPage( currentPage - 1 );
      onClickPage( currentPage - 1 );
    }
  }

  const handleNextPage = () => {
    if ( currentPage < pages ) {
      setCurrentPage( currentPage + 1 );
      onClickPage( currentPage + 1 );
    }
  }

  return (
    <div className="flex justify-end items-center">

      <div className="flex items-center px-4">
        <p className="text-lg font-medium px-3"> Músicas por página:</p>
        <select 
          className="text-zinc-500 border border-neutral-700 rounded-md p-1 m-3"    
          onChange={(e) => handleRefreshMaxPages(Number(e.target.value))}
          defaultValue={elementsPerPage}
        >
          { selectOptions.map( (option, index) => {                    
            return <option key={index} value={option} className="text-zinc-500">{option}</option>          
          })}        
        </select>
      </div>

      <CaretLeft size={32} onClick={handlePrevPage} />
      <p className="text-lg font-medium px-3"> {currentPage} </p>
      <CaretRight size={32} onClick={handleNextPage} />              
    </div>
  )
}