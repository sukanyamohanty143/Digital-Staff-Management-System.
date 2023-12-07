import {  Pagination } from "@mui/material";
import { useEffect } from "react";
const AddPagination = ({pageCount,currentPage,handleChangePage}) => {
    useEffect(() => {

    }, [])
    return (
        <>
            <Pagination
                count={pageCount}
                page={currentPage}
                onChange={handleChangePage}
                color="primary"
            />
        </>
    );
};

export default AddPagination;
