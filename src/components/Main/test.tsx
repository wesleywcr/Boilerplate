import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main/>', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchInlineSnapshot(`
      <main
        class="styles__Wrapper-sc-135gxlq-0 ZcNPM"
      >
        <img
          alt="Imagem de um átomo e React Avançado escrito ao lado"
          class="styles__Logo-sc-135gxlq-1 desROP"
          src="img/logo.svg"
        />
        <h1
          class="styles__Title-sc-135gxlq-2 ixBWrJ"
        >
          React Avançado
        </h1>
        <h2
          class="styles__Description-sc-135gxlq-3 kLatoy"
        >
          Typescript, ReactJS,NextJS e Styled Components
        </h2>
        <img
          alt="Um desenvolvedor de frente para uma tela de código"
          class="styles__Illustratration-sc-135gxlq-4 ivTGhk"
          src="/img/hero-illustration.svg"
        />
      </main>
    `)
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    })
  })
})
