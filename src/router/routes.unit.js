jest.mock('@state/store', () => ({}))

describe('routes', () => {
  const routes = require('./routes').default

  it('export an array of objects', () => {
    expect(routes).toBeInstanceOf(Array)
    for (const route of routes) {
      expect(route).toBeInstanceOf(Object)
    }
  })
})
