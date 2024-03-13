import { render } from '@redwoodjs/testing/web'

import LoggedInLayout from './LoggedInLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LoggedInLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoggedInLayout />)
    }).not.toThrow()
  })
})
