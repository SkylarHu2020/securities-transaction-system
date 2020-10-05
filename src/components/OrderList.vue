<template>
  <div>
    <!-- table -->
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
      :default-sort="{prop: 'time', order: 'descending'}"
    >
      <el-table-column prop="time" label="order time" align="center"
        sortable :sort-orders="['ascending', 'descending']"/>
      <el-table-column prop="code" label="code" align="center"/>
      <el-table-column prop="name" label="stock name" align="center"/>
      <el-table-column prop="price" label="stock price" align="center"/>
      <el-table-column prop="count" label="amount" align="center"/>
      <el-table-column prop="direction" label="direction" align="center"/>
      <el-table-column prop="status" label="status" align="center"/>
      <!-- recall button -->
    </el-table>


    <!-- pagination, refresh button -->
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
        :total="dataTotalCount"
        @current-change="handlePageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import order from '@/api/order.js'
export default {
  name: 'OrderList',
  computed: {
    orderData() {
      return this.$store.state.orderData
    }
  },
  watch: {
    orderData: function (val) {
      this.tableData = val
      this.dataTotalCount = val.length
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
    order.queryOrder()
    this.tableData = this.orderData
    this.dataTotalCount = this.tableData.length
  },
  methods: {
    cellStyle ({row, column, rowIndex, columnIndex}) {
      return "padding:2px"
    },
    changeTableSort (column) {
      let fieldName = column.prop
      let sortType = column.order
      if (fieldName === 'time') {
        if (sortType == 'descending') {
          this.tableData = this.tableData.sort(
            (a,b) => {
              if (b[fieldName] > a[fieldName]) {
                return 1
              } else if (b[fieldName] === a[fieldName]) {
                return 0
              } else {
                return -1
              }
            }
          )
        } else {
          this.tableData = this.tableData.sort(
            (a,b) => {
              if (b[fieldName] > a[fieldName]) {
                return -1
              } else if (b[fieldName] === a[fieldName]) {
                return 0
              } else {
                return 1
              }
            }
          )
        }
      }
    },
    handlePageChange (val) {
      this.$set(this.query,'currentPage', val)
    },
    updateTableData () {
      order.queryOrder()
      this.tableData = this.orderData
      this.dataTotalCount = this.tableData.length
    }
  }
}
</script>

<style scoped>

</style>