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

  router.beforeEach(transition => {
    window.scrollTo(0, 0)
    transition.next()
  })

  router.afterEach(transition => {
    const githubButtonsSource = 'https://buttons.github.io/buttons.js'
    if (transition.from !== transition.to) {
      const oldScript = document.querySelector(`script[src="${githubButtonsSource}"]`)
      if (oldScript) oldScript.parentNode.removeChild(oldScript)
      const githubButtonsScript = document.createElement('script')
      githubButtonsScript.async = true
      githubButtonsScript.defer = true
      githubButtonsScript.src = githubButtonsSource
      document.head.appendChild(githubButtonsScript)
    }
  })
}
