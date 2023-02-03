import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { getImageUrls } from "./ImageSelector/ImageSelector"

// test('renders Hello world text', () => {
//     const { getByText } = render(<App />);
//     const textElement = getByText(/Hello world/i);
//     expect(textElement).toBeInTheDocument();
// });

// test('renders Hello world text', () => {
//     const { getByText } = render(<App />);
//     const textElement = getByText(/React Photo Viewer/i);
//     expect(textElement).toBeInTheDocument();
// });

test('renders Image URL', () => {
    const imageURL = getImageUrls();
    expect(imageURL[0]).toEqual("https://picsum.photos/id/600/1600/900.jpg/");
});