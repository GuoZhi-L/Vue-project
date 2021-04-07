import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        changeMenuFlag: false,//标记菜单切换进行菜单切换监听
        selectFlag: null,//当前活动菜单id
    },
    mutations: {
        // 菜单切换事件
        changeMenuEvent: function(state,item) {
            state.changeMenuFlag = !state.changeMenuFlag;//菜单切换标记
            state.selectFlag = item;//当前活动菜单id
        }
    }
})
export default store