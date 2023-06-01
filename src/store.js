
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            visibleSidebar: false,
            nickname: '',
            role: '',
            profileHref: ''
        }
    },
    mutations: {
        updateSidebarData(state, data) {
            state.visibleSidebar = data.visibleSidebar
            state.nickname = data.nickname
            state.role = data.role
            state.profileHref = data.profileHref
        }
    }
})

export default store
