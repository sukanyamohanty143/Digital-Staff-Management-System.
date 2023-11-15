import { Button } from "@mui/material";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

function GeneratePdf({ GenretePdfSave }) {

    return (
        <>
            <Button onClick={GenretePdfSave} style={{ background: "#e25734", boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px", color: "white", borderRadius: "30px", fontSize: "10px" }}>
                Free download Pdf
                <DownloadForOfflineIcon />
            </Button>
        </>
    )

}
export default GeneratePdf;