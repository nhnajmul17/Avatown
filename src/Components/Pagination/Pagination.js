import React from 'react';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';

const Pagination = ({ avatarPerPage, totalavatar, currentpage, setCurrentPage }) => {
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalavatar / avatarPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <div className="btn-group flex justify-center my-2">
            <button className="mx-2" onClick={() => setCurrentPage(currentpage - 1)}> <FaLessThan /></button>
            {
                pageNumber.map(num => <button onClick={() => setCurrentPage(num)} key={num} className={`btn btn-outline ${currentpage === num ? 'btn-active' : ''}`} >{num}</button>)
            }
            <button className="mx-2" onClick={() => setCurrentPage(currentpage + 1)} > <FaGreaterThan /></button>
        </div>
    );
};

export default Pagination;