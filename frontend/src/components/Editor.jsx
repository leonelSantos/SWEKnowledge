import React from "react";
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-idle_fingers";

function onChange(newValue) {
    console.log("change", newValue);
  }

export default function Editor(props){
    return(
        <div>
            <AceEditor
                mode="python"
                theme="idle_fingers"
                fontSize={15}
                value = {props.solution}
                width = "75%"
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                maxLines: 30,
                showLineNumbers : false
                }}
            />
        </div>
    );
}