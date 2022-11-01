import React from "react";
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

function onChange(newValue) {
    console.log("change", newValue);
  }

export default function CodeEditor(props){
   
    return( 
        <div>
            <AceEditor
                mode="python"
                theme="monokai"
                value = {props.solution}
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true
                }}
            />
        </div>
    );
}