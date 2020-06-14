import { INCREMENT } from './mutations-types'

export default  {
  [INCREMENT](state) {
      state.contuned++
  },
  decrement(state) {
      state.contuned--
  },
  incrementCour(state, count) {
      state.contuned += count
  },
  uplateInfo(state) {
      state.info.name = '老王'
  }
}