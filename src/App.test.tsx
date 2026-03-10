import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Smoke Test', () => {
  it('renders without crashing', () => {
    render(<App />);
    // Just checking if the app is alive
    expect(true).toBe(true); 
  });
});