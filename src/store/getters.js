export default  {
  powerCounter(state) {
      return state.contuned * state.contuned
  },
  fliter(state) {
      return (age) => {
          state.students.filter(s => s.age >= age)
      }
  },

}