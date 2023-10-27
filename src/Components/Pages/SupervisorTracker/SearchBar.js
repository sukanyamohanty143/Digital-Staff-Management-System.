import { useEffect } from "react";
import { useState } from "react";
import { json } from "react-router-dom";

function SearchBar() {

    const [data, setData] = useState(null)

    // const [search,setSearch]=useState('')

    const fetchData = () => {
        fetch("http://localhost:3000/employees").then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res)
        }).catch((erro) => {
            console.log(erro)
        })

    }
    useEffect(() => {
        fetchData()
    })
    console.log(data, "data")

    return (
        <>
            <>
                <TextField onChange={handleChange} value={sreach}></TextField>
                <Button variant="contained" onClick={handleAddButton}>add</Button>
                
            </>
        </>
    )
}
export default SearchBar;