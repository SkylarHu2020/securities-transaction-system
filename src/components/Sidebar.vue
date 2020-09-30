<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-corlor="#20a0ff"
      unique-opened
      router
      :collapse="collapse"
      :default-active="onRoutes"
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index"  :key="item.index">
            <!-- hint item -->
            <template slot="title">
              <i :class="item.icon" />
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-menu-item :index="subItem.index" :key="subItem.index">
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon" />
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      collapse: false,
      items: [
        {
          icon: 'el-icon-pie-chart',
          index: 'dashboard',
          title: 'Positions'
        },
        {
          icon: 'el-icon-s-order',
          index: 'buy',
          title: 'Buy'
        },
        {
          icon: 'el-icon-sell',
          index: 'sell',
          title: 'Sell'
        },
        {
          icon: 'el-icon-search',
          index: '3',
          title: 'Check Orders',
          subs: [
            {
              index: 'orderquery',
              title: 'Today\'s Order'
            },
            {
              index: 'tradequery',
              title: 'Today\'s Transaction'
            },
            {
              index: 'hisorderquery',
              title: 'History\'s Order'
            },
            {
              index: 'histradequery',
              title: 'History\'s Transaction'
            },
          ]
        },

        {
          icon: 'el-icon-bank-card',
          index: '4',
          title: 'Banking',
          subs: [
            {
              index: 'transfer',
              title: 'Make a Transfer'
            },
            {
              index: 'transferquery',
              title: 'History Transfer'
            },
          ]
        },
        {
          icon: 'el-icon-setting',
          index: 'pwdsetting',
          title: 'Change Password'
        },
    ]
    }
  },
  computed: {
    // http://localhost:8080/dashboard -> dashboard
    onRoutes () {
      return this.$route.path.replace('/','')
    }
  },
  created () {
    // 订阅collapse消息
    this.$bus.on("collapse", msg => {
      this.collapseChange(msg)
    })
  },
  beforeDestroy () {
    this.$bus.off("collapse", msg => {
      this.collapseChange(msg)
    })
  },
  methods: {
    collapseChange(msg) {
      this.collapse = msg
      this.$bus.emit("collapse-content", msg)
    }
  }
}
</script>

<style scoped>
  .sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
  }
    .el-menu-item {
      min-width: 170px;
    }
    li {
      text-align: left;
    }
      .el-tooltip {
          width: auto ! important;
      }
    .el-menu {
        border-right-width: 0;
    }
    .el-menu--collapse{
        width: auto ! important;
    }
  .sidebar::-webkit-scrollbar {
      width: 0;
  }
  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 170px;
  }
  .sidebar > ul {
    height: 100%;
  }
</style>