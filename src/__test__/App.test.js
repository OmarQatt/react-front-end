import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('Load and displays starter data', async () => {
  render(<App />);
  const Name = await waitFor(() => screen.findByTestId('Name'));
  expect(Name).toBeInTheDocument();
});

test('Can change the name', async () => {
  render(<App />);
  const input = screen.getByTestId('name-input');
  const name = screen.getByTestId('Name');
  fireEvent.change(input, {target: {value: `Name: ${name}`}});
  expect(name).toHaveTextContent(`Name: ${name}`)
})
test('Have new age', async () => {
    render(<App />);
    const newAge = await waitFor(() => screen.findByTestId('NewAge'));
    expect(newAge).toBeInTheDocument();
  });

