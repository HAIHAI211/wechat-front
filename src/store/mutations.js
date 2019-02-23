import * as types from './mutation-types'

const mutations = {
  /*
  * state: 当前状态树
  * v: 提交matations时传的参数
  * */
  [types.SET_IS_LOGIN] (state, v) {
    state.isLogin = v
  },
  [types.SET_LOADING] (state, v) {
    state.loading = v
  }
}

export default mutations
