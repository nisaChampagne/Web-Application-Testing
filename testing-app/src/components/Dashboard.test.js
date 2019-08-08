// balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
// balls and strikes reset to 0 when a hit is recorded.
// a foul increases strikes up to 2. With no strikes, a foul makes it 1 strike.
// With 1 strike, a foul makes it 2 strikes.
// With two strikes a foul has no effect, count stays at 2 strikes.
import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import Dashboard from './Dashboard';
import '@testing-library/react/cleanup-after-each';


describe('<Dashboard />', () => {
    it("displays strikes", () => {
      const { getByText }  = render(<Dashboard />);
      const strikes = getByText(/strike/i);
  
      fireEvent.click(strikes);
  
      expect(strikes);
    })
  
    it("displays balls", () => {
      const { getByText } = render(<Dashboard />);
      const balls = getByText(/ball/i);
  
      fireEvent.click(balls);
  
      expect(balls);
    })
  });
  