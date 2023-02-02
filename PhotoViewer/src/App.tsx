import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PhotoViewer } from "./PhotoViewer/PhotoViewer"
import { ImageSelector } from './ImageSelector/ImageSelector'

function App() {
  
  const [selectedImageURL, setSelectedImageURL] = useState("");

  return (
    <div>
      <h1>React Photo Viewer</h1>
      <PhotoViewer src={selectedImageURL}  />
      <ImageSelector selectedImageURL={selectedImageURL} setSelectedImgURL={setSelectedImageURL} />
    </div>
  );
}

export default App