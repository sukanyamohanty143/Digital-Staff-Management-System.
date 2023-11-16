import { TextField, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ search, HandleOnchange, HandleSearch }){
    
    return (

        <>

            <TextField sx={{ background: "white", width: "65%",position:"relative",bottom:"12px",right:"10px"}} label="Search..." onChange={HandleOnchange} value={search} />
            <Button sx={{ height: "56px", width: "15%",position:"relative",bottom:"12px",right:"11px"}} variant="contained" onClick={HandleSearch}>
                <SearchIcon sx={{ fontSize: "40px" }} />
            </Button>

        </>

    )
}
export default SearchBar;