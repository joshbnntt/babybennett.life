import Vuex from 'vuex'
import initialState from '../api'

const createStore = () => new Vuex.Store({
  state: {
    albums: initialState.albums
  },
  getters: {
    galleries: state => {
      return [
        ...state.albums.map(a => {
          return {name: a.name, slug: a.slug, id: a.id, url: a.pictures[0].url}
        })
      ]
    },
    getGalleryImagesBySlug: state => slug => {
      return state.albums.filter(a => a.slug === slug)[0].pictures
    }
  }
})

export default createStore
