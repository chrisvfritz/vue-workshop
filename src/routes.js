import Home from 'src/pages/home'
import Exercise from 'src/pages/exercise'

export default router => {
  router.map({

    '/': {
      name: 'home',
      component: Home
    },

    '/exercises/:exercise': {
      name: 'exercise',
      component: Exercise
    },

    '*': {
      component: Home
    }

  })
}
