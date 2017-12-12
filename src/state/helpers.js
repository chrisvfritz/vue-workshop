import { mapState, mapGetters } from 'vuex'

export const contentGetters = {
  ...mapState('content', {
    exercises: state => state.exercises,
  }),
  ...mapGetters('content', ['orderedExercises', 'currentExercise']),
}
