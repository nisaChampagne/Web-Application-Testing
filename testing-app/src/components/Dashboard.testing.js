// balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// balls and strikes reset to 0 when a hit is recorded.
// a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike.
// With 1 strike, a foul makes it 2 strikes.
// With two strikes a foul has no effect, count stays at 2 strikes.
import React from 'react'
import { render, fireEvent, getByText, toHaveTextContent} from '@testing-library/react'
import Dashboard from './Dashboard'
import '@testing-library/react/cleanup-after-each'


describe("the display component", () => {
    it("renders without crashing", () => {
      const render = render(<Dashboard />);
    })
  
    it("displays strikes", () => {
      const { getByText } = render(<Dashboard />);
      const strikes = getByText(/strikes/i);
  
      fireEvent.click(strikes);
  
      expect(strikes).toHaveTextContent(1);
    })
  
    it("displays balls", () => {
      const { getByText } = render(<Dashboard />);
      const balls = getByText(/balls/i);
  
      fireEvent.click(balls);
  
      expect(balls).toHaveTextContent(1);
    })
  });
  