import { Button } from "@mui/material";
function GeneratePdf({GenretePdfSave}) {
    return (
        <>
            <Button variant="contained" onClick={GenretePdfSave}>Generate Pdf Save</Button>
        </>
    )
}
export default GeneratePdf;