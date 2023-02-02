import React from "react";
import { useState } from "react";
import './ImageSelector.css';

export function ImageSelector(props: {
    setSelectedImgURL: React.Dispatch<React.SetStateAction<string>>;
    selectedImageURL: string}) {
    const brokenImages = [1, 24, 32, 36, 44, 47];
    
    function getImageUrls() {
        const urls = [];
        for (let i = 0; i < 50; i++) {
            if (!brokenImages.includes(i)) {
                const imageNumberString = i.toString().padStart(2, '0');
                const imageUrl = `https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`;
                urls.push(<img id= "individual_image_container" src={imageUrl} className={imageUrl === props.selectedImageURL ? "highlight_true" : "highlight_false"} onClick={() => props.setSelectedImgURL(imageUrl)} />)
            }
        }

        return urls;
    }
    
    const images = getImageUrls()
    return (
        <div className="flex_image_container" >
            <p>{images}</p> 
            
    </div>)

}
