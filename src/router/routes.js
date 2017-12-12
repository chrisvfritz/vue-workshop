import HomePage from '@pages/home'
import ExercisesPage from '@pages/exercises'
import ExercisePage from '@pages/exercise'

export default [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/exercises',
    name: 'exercises',
    component: ExercisesPage,
  },
  {
    path: '/exercises/:slug',
    name: 'exercise',
    component: ExercisePage,
  },
  {
    path: '/exercise/:slug',
    redirect: to => ({
      name: 'exercise',
      slug: to.params.slug,
    }),
  },
]
