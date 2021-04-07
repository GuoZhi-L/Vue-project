<!--左侧菜单栏-->
<template>
  <div class="index">
    <div class="head">
      <div>
        建筑类别：
        <input type="text" name="" id="" placeholder="请输入" />
      </div>
      <div>
        <button class="wigth">重置</button>
        <button class="cols">查询</button>
      </div>
    </div>
    <div class="content">
      <div class="top">
        <button class="cols">新增</button>
      </div>
      <div style="padding: 20px">
        <table class="pure-table pure-table-horizontal">
          <thead>
            <tr>
              <th v-for="(item,index) in tabHeadList" :key="index">{{ item }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in tablist" :key="index">
              <td>{{item.index}}</td>
              <td>{{item.type}}</td>
              <td>{{item.lx}}</td>
              <td>{{item.img}}</td>
              <td style="padding:0;">
                  <button class="texts">编辑</button>  |  <button class="texts">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "LeftMenu",
  data() {
    return {
      tabHeadList: [
        "序号",
        "建筑类别",
        "建筑类型",
        "建筑图标",
        "操作",
      ],
      tablist: [
          {
              index: '1',
              type: '大厦',
              lx: '住宅',
              img: ''
          },
          {
              index: '2',
              type: '大厦',
              lx: '住宅',
              img: ''
          },
          {
              index: '3',
              type: '大厦',
              lx: '住宅',
              img: ''
          },
          {
              index: '4',
              type: '大厦',
              lx: '住宅',
              img: ''
          },
          {
              index: '5',
              type: '大厦',
              lx: '住宅',
              img: ''
          },

      ],
      headList: [
        {
          name: "测试",
          num: "1",
        },
        {
          name: "测试",
          num: "2",
        },
        {
          name: "测试",
          num: "3",
        },
        {
          name: "测试",
          num: "4",
        },
        {
          name: "测试",
          num: "5",
        },
        {
          name: "测试",
          num: "6",
        },
      ],
      topTab: [
        {
          text: "待指派",
          flag: true,
        },
        {
          text: "待处理",
          flag: false,
        },
        {
          text: "已解决",
          flag: false,
        },
        {
          text: "未解决",
          flag: false,
        },
        {
          text: "已取消",
          flag: false,
        },
      ],
    };
  },
  // mounted() {},
  // created() {},
  methods: {
    cliTop(index) {
      for (let i = 0; i < this.topTab.length; i++) {
        if (index == i) {
          this.topTab[i].flag = true;
        } else {
          this.topTab[i].flag = false;
        }
      }
    },
  },
};
</script>
 
<style lang="less"
       scoped>
.index {
  .head {
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    background: #fff;
    height: 50px;
    margin-top: 1px;
    text-align: left;
    line-height: 50px;
    padding-left: 20px;
  }
  .content {
    background: #fff;
    border-radius: 20px;
    margin: 10px;
    .top {
      text-align: right;
      padding: 20px;
    }
  }
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

.pure-table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #cbcbcb;
  width: 100%;
}

.pure-table caption {
  color: #000;
  font: italic 85%/1 arial, sans-serif;
  padding: 1em 0;
  text-align: center;
}

.pure-table td,
.pure-table th {
  border-left: 1px solid #cbcbcb;
  border-width: 0 0 0 1px;
  font-size: inherit;
  margin: 0;
  overflow: visible;
  padding: 0.5em 1em;
}

.pure-table thead {
  background-color: #e0e0e0;
  color: #000;
  text-align: left;
  vertical-align: bottom;
}

.pure-table td {
  background-color: transparent;
}
.pure-table-horizontal td,
.pure-table-horizontal th {
  border-width: 0 0 1px 0;
  text-align: left;
  border-bottom: 1px solid #cbcbcb;
}

.pure-table-horizontal tbody > tr:last-child > td {
  border-bottom-width: 0;
}
input {
  outline-style: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px 14px;
  width: 200px;
  font-size: 14px;
  font-weight: 700;
  font-family: "Microsoft soft";
}
button {
  width: 70px; /* 宽度 */
  height: 40px; /* 高度 */
  border-width: 0px; /* 边框宽度 */
  border-radius: 3px; /* 边框半径 */
  cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
  outline: none; /* 不显示轮廓线 */
  font-family: Microsoft YaHei; /* 设置字体 */
  color: white; /* 字体颜色 */
  font-size: 17px; /* 字体大小 */
}
.wigth {
  border: 1px solid #ccc;
  color: #000; /* 字体颜色 */
  background: #fff; /* 背景颜色 */
}
.cols {
  background: #b60023; /* 背景颜色 */
}
.texts {
    color: #C93D61;
    background: #fff; /* 背景颜色 */
}
</style>