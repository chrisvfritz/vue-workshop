import HomePage from './home'

describe('@pages/home', () => {
  it('renders an element', () => {
    const { element } = shallow(HomePage, {
      stubs: {
        MainLayout: {
          functional: true,
          render(h, { slots }) {
            return <div>{slots().default}</div>
          },
        },
      },
    })
    expect(element.textContent).toContain('Home Page')
  })
})
