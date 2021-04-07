<!-- 默认布局 -->
<template>
  <div class="layout-default">
    <div>
      <base-header></base-header>
    </div>
    <div class="main-wrapper">
      <div class="left-wrapper">
        <left-menu :menuList="menuList"></left-menu>
      </div>
      <div class="content-wrapper">
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
// import Auth from '../common/Auth';
import BaseHeader from "../BaseHeader";
import LeftMenu from "../LeftMenu";

export default {
  name: "DefaultLayout",
  components: {
    BaseHeader,
    LeftMenu,
  },
  data() {
    return {
      //   open: false, // 打开状态
      menuList: [
        {
          name: "网格化",
          routeName: "",
          id: "bj",
          openFlag: false,
          selectFlag: false,
          level: 1,
          children: [
            {
              name: "网格化1",
              routeName: "Work",
              id: "sfbj",
              openFlag: false,
              selectFlag: false,
              level: 2,
              children: [],
            },
          ],
        },
        {
          name: "综治",
          routeName: "",
          id: "zz",
          openFlag: false,
          selectFlag: false,
          level: 1,
          children: [
            {
              name: "综治1",
              routeName: "Module",
              id: "zz1",
              openFlag: false,
              selectFlag: false,
              level: 2,
              children: [],
            },
          ],
        },
        {
          name: "政务",
          routeName: "",
          id: "zw",
          openFlag: false,
          selectFlag: false,
          level: 1,
          children: [
            {
              name: "政务1",
              flag: false,
              routeName: "Study",
              id: "zw1",
              openFlag: false,
              selectFlag: false,
              level: 2,
              children: [],
            },
          ],
        },
        {
          name: "党建",
          routeName: "",
          id: "dj",
          openFlag: false,
          selectFlag: false,
          level: 1,
          children: [
          ],
        },
      ],
    };
  },
};
</script>
<style lang="less"
       scoped>
.layout-default {
  overflow-x: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  .header {
    height: 60px;
    background: rgba(11, 26, 56, 1);
  }

  .main-wrapper {
    overflow-x: hidden;
    width: 100%;
    height: calc(100% - 60px);
  }

  .left-wrapper {
    float: left;
    box-sizing: border-box;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    width: 10%;
    height: 100%;
    text-align: left;
    // background: rgba(255, 255, 255, 1);
  }

  .content-wrapper {
    overflow-x: hidden;
    height: 90vh;
    background: rgb(0 0 0 / 10%);
  }
}

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
 