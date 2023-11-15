import { TextField, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
function SearchBar({ search, HandleOnchange, HandleSearch }) {
    return (

        <>

            <TextField sx={{ background: "white", position: "relative", bottom: "15px", left: "10px", width: "50%"}} label="Search..." onChange={HandleOnchange} value={search} />
            <Button sx={{ height: "56px", width: "20%", bottom: "15px", left: "10px" }} variant="contained" onClick={HandleSearch}>
                <SearchIcon sx={{ fontSize: "40px" }} />
            </Button>

        </>

    )
}
export default SearchBar;