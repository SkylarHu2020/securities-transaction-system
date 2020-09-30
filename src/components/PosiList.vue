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
      <el-table-column label="成本" align="center"/>
    </el-table>
    <!-- pagination，refresh button -->
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
        :total="dataTotalvolumn"
        @current-change="handlePageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "PosiList",
  data () {
    return {
      balance: 10,
      tableData: [
        {code: '000001', name: 'stock name1', volumn: 10, cost: 40},
        {code: '000002', name: 'stock name2', volumn: 20, cost: 24},
        {code: '000003', name: 'stock name3', volumn: 30, cost: 56},
        {code: '000004', name: 'stock name4', volumn: 40, cost: 30},
      ],
      dataTotalvolumn: 4,
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
    }
  }
}
</script>

<style scoped>

</style>