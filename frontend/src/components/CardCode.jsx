import React from "react";
import Editor from "./Editor";

export default function CardCode(props){
    return (
        <p>
            <Editor solution = {props.code}/>
        </p>
  )
}