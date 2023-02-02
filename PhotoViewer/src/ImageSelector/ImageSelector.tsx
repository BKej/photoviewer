import React from "react";
import { useState } from "react";
import './ImageSelector.css';

export function ImageSelector() {
    const brokenImages = [1, 24, 32, 36, 44, 47];
    const [imageURL, setImageURL] = useState("");
    const [highlightFlag, setHighlight] = useState(false);

    function getImageUrls() {
        const urls = [];
        
        const getImageURL = (e) => {
            setImageURL(e.target.src);
        }

        function handleClick() {
            alert("helloo")
            setHighlight(true)
        }

        for (let i = 0; i < 50; i++) {
            if (!brokenImages.includes(i)) {
                const imageNumberString = i.toString().padStart(2, '0');
                urls.push(<img src={`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`} className={{ highlightFlag } ? "highlight_true" : "highlight_flase"} onClick={handleClick} />)
            }
        }

        return urls;
    }
    
    const image = getImageUrls()
    return (
        <div className="flex_image_container" >
            <p>Clicked Image URL: {imageURL}</p>
            <p>{image}</p>       
    </div>)

}
