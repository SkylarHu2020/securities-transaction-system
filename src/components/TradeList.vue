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
      <el-table-column prop="volumn" label="volumn" align="center"/>
      <el-table-column prop="amounts" label="amounts" align="center"/>
      <el-table-column prop="direction" label="direction" align="center"/>
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
        @click=""
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
export default {
  name: 'OrderList',
  data () {
    return {
      balance: 10,
      tableData: [
        {time: '09:40:00', code: '000001', name: 'stock name1', price: 100, volumn: 10, amounts: 130, direction: 'buy'},
        {time: '10:30:00', code: '000002', name: 'stock name2', price: 35, volumn: 5, amounts: 150, direction: 'sell'},
        {time: '22:10:00', code: '000003', name: 'stock name3', price: 70, volumn: 100, amounts: 200, direction: 'buy'},
      ],
      dataTotalCount: 3,
      query: {
        currentPage: 1,
        pageSize: 2,
      }
    }
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
  }
}
</script>

<style scoped>

</style>