import React from "react";
import axios from "axios";
import {useState, useEffect} from "react";
import {MDBCardText} from 'mdb-react-ui-kit';
import Paragraph from "./Paragraph";

export default function PageParagraph(props){
    const [paragraph , setParagraph] = useState([])
    
    async function getParagraph(name) {
        try{
            const parag = await axios.get(`pageparagraph/nameAndOrder/${name}`);
            setParagraph(parag.data)
        }catch (error) {
            console.error(error);
        }
    } useEffect(() => {getParagraph(props.pagename)}, [])

    return (
        <>
            { paragraph && paragraph.map(parag => <Paragraph
                id= {parag.id}
                order= {parag.order}
                pageName= {parag.pageName}
                nameAndOrder= {parag.nameAndOrder}
                paragraph= {parag.paragraph}
                />
            )}
        </>
  )
}