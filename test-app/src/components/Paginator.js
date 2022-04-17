import React from "react";

const Paginator = ({currentPage, setCurrentPage, builPictures, query, total}) => {
    const pageLimit = Math.floor(total/20)+1;
    const handleNextPage = () => {
        if (currentPage <= pageLimit -1) {
            builPictures(query, currentPage+1);
            setCurrentPage(currentPage + 1);
        }
    }
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            builPictures(query, currentPage-1);
            setCurrentPage(currentPage - 1);
        }
    }

    return (
        <div className="w-full inline-flex pt-8 pb-4 justify-center items-center">
        
            <button onClick={handlePreviousPage} className='bg-transparent hover:bg-cyan-700 text-cyan-700 hover:text-white border-cyan-700 border-2 font-bold py-2 px-4 rounded-full mx-5'>
                Prev
            </button>
            
            <span>Page {currentPage} of {pageLimit}</span>
            <button onClick={handleNextPage} className='bg-transparent hover:bg-cyan-700 text-cyan-700 hover:text-white border-cyan-700 border-2 font-bold py-2 px-4 rounded-full mx-5 duration-150 transition-all ease-out'>
                Next
            </button>
            <span>Number of result {total}</span>
        </div>
      );
}
export default Paginator;