import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// describe('App', () => {
//   it('should render a <div />', () => {
//     const {getByText} = render(<App />);
//     const linkElement = getByText(/hello world/i)
//     expect(linkElement).toBeInTheDocunment();
//   });
// });

test('render learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/hello/i);
  expect(linkElement);
});

test('find world in the document', () => {
  const { getByText } = render(<App />);
  const worldElement = getByText(/world/i);
  expect(worldElement);
});

test('find input placeholder', () => {
  const renderResponse = render(<App />);
  const inputBox = renderResponse.getByPlaceholderText(/enter your name/i);
  expect(inputBox);
});
