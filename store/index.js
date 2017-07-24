import Vuex from 'vuex'
import initialState from '~static/images'

const store = new Vuex.Store({
  state: {
    pictures: initialState.pictures
  },
  getters: {
    galleries: state => {
      return [...Object.keys(state.pictures).map(key => (
        {...state.pictures[key][0], name: key}
      ))]
    }
  }
})

export default store
