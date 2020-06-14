import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutation'
import actions from './actions'
import getters from './getters'

// 模块
import moduleA from './modules/modules'

// 安装
Vue.use(Vuex)


// 使用
const store = new Vuex.Store({
    state: {
    contuned: 1000,
    students: [
        { id: 110, name: 'why', age: 18 },
        { id: 111, name: 'haha', age: 25 },
        { id: 112, name: 'laoli', age: 45 }
    ],
    info: {
        name: 'laoli',
        age: 18,
        number: 666
    }
    },
    mutations,
    actions,
    getters,
    modules: {
        a : moduleA,
    }
})

// 倒出
export default store