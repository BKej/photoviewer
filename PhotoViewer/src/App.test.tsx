import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { getImageUrls } from "./ImageSelector/ImageSelector"
import { ImageSelector } from './ImageSelector/ImageSelector';
import * as renderer from 'react-test-renderer';

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
    expect(imageURL[0].imageUrl).toEqual("https://picsum.photos/id/600/1600/900.jpg");
});

test('renders Image URL', () => {
    const imageURL = getImageUrls();
    expect(imageURL[1].imageUrl).not.toEqual("https://picsum.photos/id/601/1600/900.jpg");
});

describe("ImageSelector", () =>
{
    it("Should match snapshot without name prop", async () =>
    {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
