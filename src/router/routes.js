import store from '@state/store'
import HomePage from '@pages/home'
import LoginPage from '@pages/login'
import ProfilePage from '@pages/profile'

export default [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    beforeEnter(routeTo, routeFrom, next) {
      // If the user is already logged in
      if (store.getters.loggedIn) {
        // Redirect to the home page instead
        next({ name: 'home' })
      } else {
        // Continue to the login page
        next()
      }
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/logout',
    name: 'logout',
    meta: {
      authRequired: true,
    },
    beforeEnter(routeTo, routeFrom, next) {
      store.dispatch('logOut')
      // Navigate back to previous page
      const authRequiredOnPreviousRoute = routeFrom.matched.some(
        route => route.meta.authRequired
      )
      next(authRequiredOnPreviousRoute ? next({ name: 'home' }) : routeFrom)
    },
  },
]
