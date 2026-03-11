import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'; // Now screen is actually used!
import App from './App';

describe('App Smoke Test', () => {
  it('renders the main dashboard without crashing', () => {
    render(<App />);
    
    // Using screen to verify the app is functional:
    // This looks for an element with the text "Finance"
    const heading = screen.getByText(/Finance/i); 
    
    // This confirms the heading exists in the virtual browser
    expect(heading).toBeInTheDocument();
  });
});