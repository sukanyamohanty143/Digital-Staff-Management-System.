import { Select, MenuItem, Box, FormControl, InputLabel } from "@mui/material";
function DateMenu({ handleDropdownChange, selectedRange }) {
    return (
        <>
            <Box sx={{ m: "20px" }}>
                <FormControl sx={{minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Date"
                        value={selectedRange}

                        onChange={handleDropdownChange}
                    >
                        <MenuItem value="1">1-7 days</MenuItem>
                        <MenuItem value="2">8-14 days</MenuItem>
                        <MenuItem value="3">15-21 days</MenuItem>
                        <MenuItem value="4">22-30 days</MenuItem>
                    </Select>
                
            </FormControl>
        </Box >

        </>
    )
}
export default DateMenu;