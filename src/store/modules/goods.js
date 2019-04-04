const goods = {
  namespaced: true,
  state: {
    name: 'I am goods'
  },
  mutations: {
    changeName (state) {
      state.name = 'goodsChangeName'
    }
  },
  actions: {}
}
export default goods
