<!--左侧菜单栏-->
<template>
  <div class="index">
    <div class="head">
      <div
        v-for="(item, index) in headList"
        :key="index"
        style="text-align: left"
      >
        <p>{{ item.name }}</p>
        <p>{{ item.value }}</p>
      </div>
    </div>
    <div class="content">
      <select name="bbxb" id="selecte" class="shortselect">
        <option value="">---请选择--</option>
        <option value="0" selected="selected">男</option>
        <option value="1">女</option>
      </select>
      <div class="left">
        <div id="container"></div>
      </div>
      <div class="right">
        <div class="div_k">
          <p class="title">快捷操作</p>
          <div class="conts">
            <div v-for="(item,index) in operation" :key="index">
              <div>
                <img :src="item.path" alt="" />
              </div>
              <div>
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
        <div class="div_k">
          <p class="title">待办事项</p>
          <div class="cpnts">
            <div>
              <img
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                alt=""
              />
            </div>
            <div>
              <p>人口审核</p>
              <p style="line-height: 30px">待审核 -23</p>
            </div>
          </div>
        </div>
        <div class="div_k">
          <p class="title">人口类型数据</p>
          <div id="peoChart" style="width: 100%; height: 380px"></div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "LeftMenu",
  data() {
    return {
      headList: [
        {
          name: "建筑数量",
          value: "6",
        },
        {
          name: "房屋户数",
          value: "32",
        },
        {
          name: "人口数量",
          value: "24",
        },
        {
          name: "车辆数量",
          value: "24",
        },
        {
          name: "单位数量",
          value: "24",
        },
      ],
      menuList: [
        {
          name: "工作",
          routeName: "Work",
        },
        {
          name: "模块",
          routeName: "Module",
        },
        {
          name: "学习",
          routeName: "Study",
        },
      ],
      operation: [
        {
          name: "新增建筑",
          path:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          name: "新增车辆",
          path:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          name: "新增公共建筑",
          path:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          name: "新增建筑",
          path:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
      ],
    };
  },
  mounted() {
    this.drawLine();
    this.map();
  },
  // created() {},
  methods: {
    map() {
      // 构造地图对象的方法一：使用地图容器ID创建
      var map = new AMap.Map("container", {
        layers: [new AMap.TileLayer.Satellite()],
        zoom: 14,
      });
      //   // 构造地图对象的方法二：使用地图容器对象创建
      //   var map = new AMap.Map(document.getElementById("container"));
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("peoChart"));
      var option = {
        title: [
          {
            text: "总人口",
            top: "40%",
            textAlign: "center",
            left: "49%",
            textStyle: {
              color: "#000",
              fontSize: 18,
              fontWeight: "400",
            },
          },
          {
            text: "5.6万人",
            top: "50%",
            textAlign: "center",
            left: "49%",
            textStyle: {
              color: "#000",
              fontSize: 22,
              fontWeight: "400",
            },
          },
        ],
        color: [
          "#37a2da",
          "#32c5e9",
          "#9fe6b8",
          "#ffdb5c",
          "#ff9f7f",
          "#fb7293",
          "#e7bcf3",
          "#8378ea",
        ],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        toolbox: {
          show: true,
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "业务警种",
            type: "pie",
            radius: ["40%", "70%"],
            label: {
              formatter: "{b}: {@20} ({d}%)",
            },

            data: [
              { value: 20, name: "国宝" },
              { value: 30, name: "治安" },
              { value: 25, name: "rose3" },
              { value: 25, name: "rose4" },
              { value: 20, name: "rose5" },
            ],
          },
        ],
      };
      // 绘制图表
      myChart.setOption(option);
    },
  },
};
</script>
 
<style lang="less"
       scoped>
.index {
  margin: 20px;
}
.head {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  border-radius: 20px;
  p:last-child {
    font-weight: 700;
    font-size: 30px;
    margin: 0 0 10px 0;
  }
}
.content {
  display: flex;
  position: relative;
  margin: 20px 0;
  .left {
    width: 70%;
    background: #fff;
    border-radius: 20px;
    padding: 20px;
  }
  .right {
    width: 30%;
    margin-left: 20px;
    .div_k {
      background: #fff;
      border-radius: 20px;
      .title {
        text-align: left;
        font-size: 18px;
        line-height: 50px;
        margin-left: 10px;
      }
      .conts {
        display: flex;
        justify-content: space-around;
        align-items: center;
        line-height: 45px;
        img {
          width: 70px;
          height: 70px;
          border-radius: 20px;
        }
      }
      .cpnts {
        text-align: left;
        display: flex;
        justify-content: start;
        align-items: center;
        margin-left: 10px;
        margin-bottom: 0;
        p {
          margin-left: 10px;
        }
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }
    }
  }
  #container {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
}
.shortselect {
  background: #fafdfe;
  height: 35px;
  position: absolute;
  z-index: 9999;
  top: 35px;
  left: 30px;
  width: 180px;
  line-height: 35px;
  border: 1px solid #9bc0dd;
  border-radius: 8px;
}
</style>