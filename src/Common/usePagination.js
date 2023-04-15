import React, { useEffect, useState } from "react";
import { PerPageResult } from "./Pagination";

function usePagination(data = [], itemsPerPage = PerPageResult, value) {
    const [currentPage, setCurrentPage] = useState(1)
    const maxPage = Math.ceil(data?.length / itemsPerPage);

    useEffect(() => {
        if (value.length === 1) setCurrentPage(1)
    }, [value])

    const currentData = () => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.length && data?.slice(begin, end);
    }

    const next = () => {
        setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
    }

    const prev = () => {
        setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
    }

    const jump = (page) => {
        const pageNumber = Math.max(1, page);
        setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
    }

    return { next, prev, jump, currentData, currentPage, maxPage };
}

export default usePagination