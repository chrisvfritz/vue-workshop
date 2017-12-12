const requireExercise = require.context('@content/exercises', false, /\.md$/)
const exercises = requireExercise.keys().map(fileName => {
  const exercise = requireExercise(fileName)
  exercise.attributes.slug = fileName
    // Strip the leading path
    .replace(/^\.\//, '')
    // Strip the file extension
    .replace(/\.[^.]+$/, '')
  return {
    ...exercise.attributes,
    markdown: exercise.body,
  }
})

export const state = {
  exercises,
}

export const getters = {
  orderedExercises({ exercises }) {
    // The optimal learning order, based on prereqs
  },
  currentExercise({ exercises }, getters, { route }) {
    return (
      route.name === 'exercise' &&
      exercises.find(exercise => exercise.slug === route.params.slug)
    )
  },
}

export const mutations = {}

export const actions = {}
