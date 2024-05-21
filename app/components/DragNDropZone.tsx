'use client';
import {useState} from "react";
import styles from './DragNDropZone.module.css'

function DisplayFile({file}){
    if (file !== undefined){
        return <div>{file.name}</div>;
    }
    return null;
}

export default function DragNDropZone() {
    const [inDropZone, setInDropZone] = useState(false);
    const [droppedFile, setDroppedFile] = useState<File[]>([]);

    function handleDragEnter(e){
        e.preventDefault();
        e.stopPropagation();
        setInDropZone(true);
    }
    function handleDragOver(e){
        e.preventDefault();
        e.stopPropagation();
        setInDropZone(true);
    }
    function handleDrop(e){
        e.preventDefault();
        e.stopPropagation();
        let file = e.dataTransfer.files[0];
        console.log(file)
        if (file.type === "text/csv" || file.type === "text/plain"){
            //TODO: check if already have a file
            console.log("DragNDrop File");
            setDroppedFile(file);
            setInDropZone(false);
        }

    }
    function handleDragLeave(e){
        e.preventDefault();
        e.stopPropagation();
        setInDropZone(false);
    }

    return <div
        className={styles.background}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
    >
        <h2>Drag and drop your file here!</h2>
        <input id="fileSelect" type="file"/>
        <DisplayFile file={droppedFile}/>

    </div>;
}