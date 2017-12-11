import App from './app'

describe('app', () => {
  it('renders an #app root', () => {
    const { element } = shallow(App)
    expect(element.id).toEqual('app')
  })
})
