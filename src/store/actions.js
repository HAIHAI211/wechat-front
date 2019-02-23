import * as types from './mutation-types'

const actions = {
  async LOGIN ({commit, state}) {
    commit(types.SET_IS_LOGIN, true)
  }
}
export default actions
