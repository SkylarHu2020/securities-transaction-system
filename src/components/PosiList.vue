<template>
  <div>
    <!-- position cash -->
    <el-row>
      <el-col :span="6">
        Balance: {{ balance }}
      </el-col>
    </el-row>
    <!-- paosition list -->
    <el-table
      :data="
        tableData.slice
        (
          (query.currentPage - 1) * query.pageSize,
          query.currentPage * query.pageSize
        )
      "
      border
      :cell-style="cellStyle"
      @sort-change="changeTableSort"
    >
      <el-table-column prop="code" label="code" align="center"
        sortable :sort-orders="['ascending', 'descending']" />
      <el-table-column prop="name" label="name" align="center"/>
      <el-table-column prop="volumn" label="volumn" align="center"/>
      <el-table-column prop="cost" label="cost" align="center"/>
      <el-table-column prop="price" label="price" align="center" />
    </el-table>
    <!-- pagination，refresh button -->
    <div class="pagination">
      <el-button
        round
        type="primary"
        size="mini"
        style="margin-top: 2px; float: right"
        icon="el-icon-refresh"
        @click="updateTableData"
      >
        Refresh
      </el-button>
      <el-pagination
        background
        layout="total, prev, pager, next"
        :current-page="query.currentPage"
        :page-size="query.pageSize"
        :total="dataTotalvolumn"
        @current-change="handlePageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import order from '@/api/order.js'
export default {
  name: "PosiList",
  computed: {
    posiDate() {
      return this.$store.state.posiData
    },
    balanceData() {
      return this.$store.state.balance
    }
  },
  watch: {
    posiData: function (val) {
      this.tableData = val
      this.dataTotalvolumn = val.length
    },
    balanceData: function (val) {
      this.balance = val
    }
  },
  data () {
    return {
      query: {
        currentPage: 1,
        pageSize: 2,
      }
    }
  },
  created () {
    order.queryBalance()
    order.queryPosi()
    this.tableData = this.posiDate
    this.dataTotalvolumn = this.tableData.length
    this.balance = this.balanceData
  },
  methods: {
    cellStyle ({row, column, rowIndex, columnIndex}) {
      return "padding:2px"
    },
    handlePageChange (val) {
      this.$set(this.query,'currentPage', val)
    },
    changeTableSort (column) {
      if (column.order == 'descending') {
        this.tableData = this.tableData.sort(
          (a,b) => b[column.prop] - a[column.prop]
        )
      } else {
        this.tableData = this.tableData.sort(
          (a,b) => a[column.prop] - b[column.prop]
        )
      }
    },
    updateTableData () {
      order.queryBalance()
      order.queryPosi()
      this.tableData = this.posiDate
      this.dataTotalvolumn = this.tableData.length
      this.balance = this.balanceData
    }
  }
}
</script>

<style scoped>

</style>