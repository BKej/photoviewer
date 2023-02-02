import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { PhotoViewer } from "./PhotoViewer/PhotoViewer"
import { ImageSelector } from './ImageSelector/ImageSelector'

function App() {
  return (
    <div>
      <h1>React Photo Viewer</h1>
      <PhotoViewer src={"https://picsum.photos/id/600/1600/900.jpg"} />
      <ImageSelector/>
    </div>
  );
}

export default App