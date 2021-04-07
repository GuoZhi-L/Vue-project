<!--左侧菜单栏-->
<template>
  <div class="left-menu">
    <div class="title">
      <span>智慧社区政务平台</span>
    </div>
    <div class="left">
      <div
        v-for="(item, index) in menuList"
        :key="item.routeName"
        :class="item.flag ? 'menu-item active' : 'menu-item'"
        @click="handleRoute(item.routeName, index)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "LeftMenu",
  data() {
    return {
      menuList: [
        {
          id: 'sfbj',
          name: "网格化",
          routeName: "Work",
          flag: false,
        },
        {
          id: 'zz1',
          name: "综治",
          routeName: "Module",
          flag: false,
        },
        {
          id: 'zw1',
          name: "政务",
          routeName: "Study",
          flag: false,
        },
      ],
    };
  },
  methods: {
    handleRoute(routeName, index) {
      for (let i = 0; i < this.menuList.length; i++) {
        if (index == i) {
          this.menuList[i].flag = true;
        } else {
          this.menuList[i].flag = false;
        }
      }
      this.$store.commit("changeMenuEvent", this.menuList[index].id);
      this.$router.push({ name: routeName }).catch(() => {
        console.log("不允许重复跳转");
      });
    },
  },
};
</script>
 
<style lang="less"
       scoped>
.left-menu {
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    font-weight: 700;
    font-size: 26px;
    color: #c0183d;
  }
  .menu-item {
    width: 20%;
    height: 40px;
    line-height: 40px;
    color: rgba(0, 0, 0, 0.85);
    background: rgba(255, 255, 255, 1);
    transition: background-color 0.15s;
    cursor: pointer;

    // &:hover {
    //   color: rgba(34, 91, 246, 1);
    //   background: rgba(240, 246, 255, 1);
    // }
  }
  .left {
    width: 25%;
    display: flex;
  }
  .active {
    color: #c0183d;
    // background: rgba(240, 246, 255, 1);
    // border-style: solid;
    border-top: 2px solid #c0183d;
  }
}
</style>