import { ADD_TODOS } from './mutation-types'

export default {
    [ADD_TODOS] (state, {payload}) {
        state.todos.push(payload)
    }
}