import React from "react";
import CardCode from "./CardCode";
import axios from "axios";
import {useState, useEffect} from "react";
import {MDBCardText} from 'mdb-react-ui-kit';

export default function PageCode(props){
    const [codeEditor , setcodeEditor] = useState([])
    
    async function getCode(name) {
        try{
            const editorCode = await axios.get(`pagecode/nameAndOrder/${name}`);
            setcodeEditor(editorCode.data)
        }catch (error) {
            console.error(error);
        }
    } useEffect(() => {getCode(props.pagename)}, [])

    return (
        <p>
            { codeEditor && codeEditor.map(editor => <CardCode
                id= {editor.id}
                order= {editor.order}
                pageName= {editor.pageName}
                nameAndOrder= {editor.nameAndOrder}
                code= {editor.code}
                />
            )}
        </p>
  )
}
/*
const [codeEditor , setcodeEditor] = useState([])
    

    async function getCode(name) {
        try{
            const editorCode = await axios.get(`pagecode/pageName/${name}`);
            setcodeEditor(editorCode.data)
        }catch (error) {
            console.error(error);
        }
    } useEffect(() => {getCode(props.pagename)}, [])


            { codeEditor && codeEditor.map(editor => <List
                id= {editor.id}
                order= {editor.order}
                pageName= {editor.pageName}
                nameAndOrder= {editor.nameAndOrder}
                code= {editor.code}
                />
            )}
*/
