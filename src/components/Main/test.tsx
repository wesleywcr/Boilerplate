import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchInlineSnapshot(`
      <main>
        <h1>
          React Avançado
        </h1>
      </main>
    `)
  })
})
