// import { useState } from "react";
import { useEffect, useState } from "react";
import SreachBar from "./SreachBar";

import TableData from "./TableData"
// import { useState,useEffect} from "react"//;

import employeesData from './dataserver.json';

function SupervisorPage() {

    const employees = employeesData.employees;

    const [data, setData] = useState([])

    useEffect(() => {
        setData(employees)
    },[employees])

    // console.log(employees,"data")
    console.log(data, "data")

    // console.log(employees,"data")

    // const [data,setData]=useState([])

    // setData(employees)
    // console.log(data,"kkkkk")

    return (
        <>
           

            <SreachBar/>
            <TableData employees={data} />


        </>
    )
}
export default SupervisorPage;