import { Pagination } from "@mui/material";
function PaginationCom({pageCount,currentPage,handleChangePage}) {
    return (
        <>
            <Pagination
                count={pageCount}
                page={currentPage}
                onChange={handleChangePage}
                color="primary"
            />
        </>
    )
}
export default PaginationCom;