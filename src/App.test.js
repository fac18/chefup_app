import React from 'react';
import App from './App';
import { Router, withRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('full app rendering/navigating', () => {
  const history = createMemoryHistory()
  const { container, getByText } = render(
    <Router history={withRouter(history)}>
      <App />
    </Router>
  )
  expect(container.textContent).toMatch('About')

  fireEvent.click(getByText(/about/i))

  // check that the content changed to the new page
  expect(container.innerHTML).toMatch('You are on the about page')
})
