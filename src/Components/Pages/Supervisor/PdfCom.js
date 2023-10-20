import React from 'react';
import { Button } from '@mui/material';
import jsPDF from 'jspdf';

function PdfCom({ filterArr }) {


    const HandlerPDF = () => {
        const dic = new jsPDF();

        filterArr.forEach((item, index) => {
            const text = `${item.FirstName} LastName : ${item.LastName} Mobile Number ${item.Mobile} designation: ${item.designation} Gender: ${item.Gender} attendance: ${item.attendance} Date: ${item.date}`;
            dic.text(text, 3, 10 + index * 10);
        });

        dic.save("khushboo.pdf");
    }

    return (
        <>
            <Button variant="contained" onClick={HandlerPDF}>Convert into PDF</Button>
        </>
    )
}

export default PdfCom;