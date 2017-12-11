import LoginPage from './login'

const renderLoginPage = (options = {}) => {
  return shallow(LoginPage, {
    ...options,
    ...createComponentMocks(
      {
        store: {
          actions: {
            logIn(_, { username, password }) {
              if (
                username === 'correctUsername' &&
                password === 'correctPassword'
              ) {
                return Promise.resolve('testToken')
              } else {
                return Promise.reject(new Error('testError'))
              }
            },
          },
        },
      },
      options
    ),
    stubs: {
      MainLayout: {
        functional: true,
        render(h, { slots }) {
          return <div>{slots().default}</div>
        },
      },
      ...options.stubs,
    },
  })
}

describe('@pages/login', () => {
  it('redirects to home after successful login', () => {
    const { vm } = renderLoginPage()

    vm.username = 'correctUsername'
    vm.password = 'correctPassword'

    const routerPush = jest.fn()
    vm.$router = { push: routerPush }

    return vm.tryToLogIn().then(() => {
      expect(vm.authError).toEqual(null)
      expect(routerPush).toHaveBeenCalledWith({ name: 'home' })
    })
  })

  it('displays an error after failed login', () => {
    const { vm } = renderLoginPage()

    const routerPush = jest.fn()
    vm.$router = { push: routerPush }

    return vm.tryToLogIn().then(() => {
      expect(vm.authError).toBeTruthy()
      expect(vm.$el.textContent).toContain('error')
    })
  })
})
