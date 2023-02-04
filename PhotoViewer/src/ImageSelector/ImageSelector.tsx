import React from "react";
import { useState } from "react";
import './ImageSelector.css';

export function ImageSelector(props: {
    setSelectedImgURL: React.Dispatch<React.SetStateAction<string>>;
    selectedImageURL: string
}) {
    
    const imagesURL = getImageUrls();
    const images = [];

    for (let i = 0; i < imagesURL.length; i++) {
        images.push(<img id="individual_image_container" src={imagesURL[i].imageUrl} className={imagesURL[i].imageUrl === props.selectedImageURL ? "highlight_true" : "highlight_false"} onClick={() => props.setSelectedImgURL(imagesURL[i].imageUrl)} />)
    
    }
   
    return (
        <div className="flex_image_container" >
            <p>{images}</p> 
            
</div>)

}

export function getImageUrls() {
    const brokenImages = [1, 24, 32, 36, 44, 47];
    const urls = [];
    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            const imageUrl = `https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`;
            // push only the URL to this list so we have a list of strings
            urls.push({imageUrl})
        }
    }

    return urls;
}
