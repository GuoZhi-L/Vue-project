

<template>
  <div class="menuAside">
    <ul>
      <li v-for="(item, index) in menuList" :key="item.id">
        <div
          :class="['currentMenu', { childrenMenuSelect: item.selectFlag }]"
          @click="currentMenu(item, index)"
        >
          <span class="leftIcon"></span>
          <!-- item.level*20 通过层级进行层级缩进 -->
          <span class="centerMenu" :style="{ 'padding-left': item.level * 20 + 'px' }">{{
            item.name
          }}</span>
          <span v-if="item.children && item.children.length != 0"
            >[{{ !item.openFlag ? "+" : "-" }}]</span
          >
        </div>
        <!-- item.children&&item.children.length!=0&&item.openFlag  通过菜单数据children进行结束递归渲染 -->
        <div
          class="childrenMenu"
          v-if="item.children && item.children.length != 0 && item.openFlag"
        >
          <left-menu :menuList="item.children"></left-menu>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "leftMenu",
  data() {
    return {};
  },
  props: {
    // 菜单数据
    menuList: {
      type: Array,
      default: [],
    },
  },
  created() {},
  methods: {
    // 点击当前菜单事件
    currentMenu: function (item, index) {
      item.openFlag = !item.openFlag; //菜单层级展开收起
      this.$store.commit("changeMenuEvent", item.id); //通过Vuex进行全局记录当前菜单切换并相应(选中样式渲染)进行操作
      this.$router.push(item.routeName); //页面路由跳转
    },
     //循环重置菜单数据选中状态selectFlag
    cyclemenuList: function (lists) {
      for (let item of lists) {
        item.selectFlag = false; //清除当前菜单选中样式
        if (this.$store.state.selectFlag == item.id) {
          //匹配当前选中菜单并渲染选中样式
          item.selectFlag = true;
        }
        if (item.children && item.children.length) {
          //结束循环条件
          this.cyclemenuList(item.children);
        }
      }
    },
  },
  watch: {
      
    // 通过VUex进行存储，监听左侧菜单切换-进行左侧菜单样式还原，当前活动菜单样式渲染及相关操作
     
    "$store.state.changeMenuFlag"(val) {
      this.cyclemenuList(this.menuList);
    },
  },
};
</script>
<style lang="less"
       scoped>
.menuAside {
    ul {
        padding: 0;
    }
  ul li {
    list-style: none;
  }
  .currentMenu {
      width: 100%;
    line-height: 40px;
    color: rgba(0, 0, 0, 0.85);
    background: rgba(255, 255, 255, 1);
    transition: background-color 0.15s;
    cursor: pointer;
  }
  .childrenMenuSelect {
      color: #bd133a;
    background: #fce3e4;
    border-right: 3px solid;
  }
}
</style>