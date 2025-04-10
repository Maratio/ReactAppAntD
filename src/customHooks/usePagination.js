import { useCallback, useState } from "react";

export default function usePagination(isSearching) {

    const [pageCurrent, setPageCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(6);

    function changePaginator(newPageCurrent, newPageSize) {
        if (pageCurrent !== newPageCurrent) setPageCurrent(newPageCurrent);
        if (pageSize !== newPageSize) setPageSize(newPageSize);
    }

    const handleChangePaginator = useCallback(changePaginator, [pageCurrent, pageSize])




    return [pageCurrent, pageSize, handleChangePaginator]
};
