import { Pagination } from "@mui/material";
function PaginationCom({ page, attendanceData, itemsPerPage, HandleChange }) {
    return (
        <>
            <Pagination variant="outlined" color="primary" count={Math.ceil(attendanceData.length / itemsPerPage)}
                page={page}
                onChange={HandleChange} />
        </>
    )
}
export default PaginationCom;