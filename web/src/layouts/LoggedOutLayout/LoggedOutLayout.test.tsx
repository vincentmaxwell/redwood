import { render } from '@redwoodjs/testing/web'

import LoggedOutLayout from './LoggedOutLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LoggedOutLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoggedOutLayout />)
    }).not.toThrow()
  })
})
