<!--左侧菜单栏-->
<template>
  <div>
    <!-- 子树 -->
     <left-menu :menuList='menuList'></left-menu>
  </div>
</template>
 
<script>
import leftMenu from "./LeftMenu";
export default {
  name: "menuItem",
  props: ["menuList"],
  components: {
    leftMenu
  },
  data() {
    return {
      open: false, // 打开状态
      //   menuList: [
      //     {
      //       name: "网格化",
      //       routeName: "Work",
      //       flag: false,
      //       showChild: true,
      //       children: [
      //         {
      //           name: "网格化",
      //           flag: false,
      //         },
      //       ],
      //     },
      //     {
      //       name: "综治",
      //       routeName: "Module",
      //       flag: false,
      //       showChild: true,
      //       children: [
      //         {
      //           name: "网格化1",
      //           flag: false,
      //         },
      //       ],
      //     },
      //     {
      //       name: "政务",
      //       routeName: "Study",
      //       flag: false,
      //       showChild: false,
      //       childe: [],
      //     },
      //   ],
    };
  },
  mounted() {
      console.log(this.menuList,'111111');
  },
  // created() {},
  methods: {
    handleRoute(routeName, index) {
      var data = this.menuList[index];
      if (data.childe.length > 0) {
        this.open = !this.open;
      } else {
        for (let i = 0; i < this.menuList.length; i++) {
          if (index == i) {
            this.menuList[i].flag = true;
          } else {
            this.menuList[i].flag = false;
          }
        }
        this.$router.push({ name: routeName }).catch(() => {
          console.log("不允许重复跳转");
        });
      }
    },
  },
};
</script>
 
<style lang="less"
       scoped>
.left-menu {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin-top: 12px;
  .menu-item {
    width: 90%;
    padding-left: 20px;
    height: 40px;
    line-height: 40px;
    color: rgba(0, 0, 0, 0.85);
    background: rgba(255, 255, 255, 1);
    transition: background-color 0.15s;
    cursor: pointer;
  }
  .active {
    color: #bd133a;
    background: #fce3e4;
    border-right: 3px solid;
  }
}
</style>