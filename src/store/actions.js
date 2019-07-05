import { ADD_TODOS } from './mutation-types'

export default {
    addtodo ({commit}, payload) {
        commit(ADD_TODOS, {payload})
    }
}