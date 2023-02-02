import React from "react";  // import React (to provide access to TSX)
import './PhotoViewer.css';

export function PhotoViewer(props:{src:string}) {    // declare and export new function called 'PhotoViewer'
    return (
        <div className = "my_class">
            <img src={props.src}></img>
        </div>
    );
}