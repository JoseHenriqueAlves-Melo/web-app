import React from 'react';
import './index.css'

const MAX_ITENS = 9;
const MAX_LEFT = (MAX_ITENS - 1) / 2;

const Pagination = ({ limit, total, offset, setOffset }) => {
    const currentPage = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const firstPage = Math.max(currentPage - MAX_LEFT, 1);

    function onPageChange(page) {
        setOffset((page -1) * limit)
    }

    return (
        <ul className="pagination">
            <li>
                <button 
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1} 
                >
                    Anterior
                </button>
            </li>
            {Array.from({ length: Math.min(MAX_ITENS, pages) })
            .map((_, index) => index + firstPage)
            .map((page) => (
                <li key={page}>
                    <button 
                        onClick={() => onPageChange(page)}
                        className={page === currentPage ? 'pagination__item--active' : ''}
                    >
                        {page}
                    </button>
                </li>
            ))}
            <li>
                <button 
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === pages} 
                >
                    Próxima
                </button>
            </li>
        </ul>
    )
}

export default Pagination;