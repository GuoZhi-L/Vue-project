<!--左侧菜单栏-->
<template>
  <div class="index">
    <div class="head">
      <div v-for="(item,index) in headList" :key="index" class="card">
        <div>{{ item.name }}</div>
        <div>{{ item.num }}</div>
      </div>
    </div>
    <div class="content">
      <div class="top">
        <span
          v-for="(item,index) in topTab"
          :key="index"
          @click="cliTop"
          :style="{ color: item.flag ? '#C52530' : '#000' }"
          >{{ item.text }}</span
        >
      </div>
      <div>
        <table class="pure-table pure-table-horizontal">
          <thead>
            <tr >
              <th v-for="(item,index) in tabHeadList" :key="index">{{item}}</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              
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
            '事件编号',
            '所属网格',
            '事件来源',
            '事件名称',
            '事件类别',
            '事件规模',
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
    .card {
      background: #fff;
      border-radius: 20px;
      width: 10%;
      margin: 10px 10px;
      height: 110px;
      padding-left: 15px;
      text-align: left;
      div:first-child {
        height: 50%;
        padding-top: 10px;
      }
      div:last-child {
        font-size: 28px;
        font-weight: 700;
      }
    }
  }
  .content {
    background: #fff;
    border-radius: 20px;
    margin: 10px;
    .top {
      text-align: left;
      padding: 20px;
      span {
        margin: 0 10px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
 
td,th {
    padding: 0;
}
 
.pure-table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #cbcbcb;
    width: 100%;
    height: 300px;
}
 
.pure-table caption {
    color: #000;
    font: italic 85%/1 arial,sans-serif;
    padding: 1em 0;
    text-align: center;
}
 
.pure-table td,.pure-table th {
    border-left: 1px solid #cbcbcb;
    border-width: 0 0 0 1px;
    font-size: inherit;
    margin: 0;
    overflow: visible;
    padding: .5em 1em;
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
.pure-table-horizontal td,.pure-table-horizontal th {
    border-width: 0 0 1px 0;
    border-bottom: 1px solid #cbcbcb;
}
 
.pure-table-horizontal tbody>tr:last-child>td {
    border-bottom-width: 0;
}
</style>