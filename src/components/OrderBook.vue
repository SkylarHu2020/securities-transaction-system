<template>
  <!-- Order Book window -->
  <el-form label-width="120px">
    <!-- time -->
    <el-form-item>
      <h4 style="color:#909399">
        time: {{ hqtime }}
      </h4>
    </el-form-item>
    <!-- table -->
    <el-form-item>
      <!-- Sell -->
      <div class="orderBook">
        <el-row v-for="item in sell" :key="item.name">
          <!-- name, price, width, volumn -->
          <el-col :span="6">{{ item.name }}</el-col>
          <el-col :span="6">{{ item.price | filterempty }}</el-col>
          <el-col :span="6">
            <div class="volumeratio">
              <div class="sell" v-bind:style="{width: item.width + '%'}" />
            </div>
          </el-col>
          <el-col :span="6">{{ item.volumn | filterempty }}</el-col>
        </el-row>
      </div>
      <!-- Buy -->
      <div class="orderBook">
        <el-row v-for="item in buy" :key="item.name">
          <!-- name, price, width, volumn -->
          <el-col :span="6">{{ item.name }}</el-col>
          <el-col :span="6">{{ item.price | filterempty }}</el-col>
          <el-col :span="6">
            <div class="volumeratio">
              <div class="buy" v-bind:style="{width: item.width + '%'}" />
            </div>
          </el-col>
          <el-col :span="6">{{ item.volumn | filterempty }}</el-col>
        </el-row>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'OrderBook',
  filters: {
    filterempty (value) {
      if (value === -1) {
        return '-'
      } else {
        return  value
      }
    }
  },
  data () {
    return {
      hqtime: '--:--:--',
      sell: [
        {name: 'sell 5', price: -1, volumn: 9, width: 1},
        {name: 'sell 4', price: 1, volumn: 23, width: 1},
        {name: 'sell 3', price: 5, volumn: 45, width: 1},
        {name: 'sell 2', price: 6, volumn: 12, width: 1},
        {name: 'sell 1', price: 34, volumn: 35, width: 1},
      ],
      buy: [
        {name: 'Buy 1', price: -1, volumn: 9, width: 1},
        {name: 'Buy 2', price: 1, volumn: 23, width: 1},
        {name: 'Buy 3', price: 5, volumn: 45, width: 1},
        {name: 'Buy 4', price: 6, volumn: 12, width: 1},
        {name: 'Buy 5', price: 34, volumn: 35, width: 1},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .orderBook {
    border: 1px solid #909399;;
    margin-left: 5%;
    margin-right: 5%;

    .el-row {
      .el-col {
        height: 35px;
        line-height: 35px;
      }
    }

    .volumeratio {
      margin: 10px auto;
      border: none;

      .sell {
        height: 10px;
        background: #67C23A;
      }

      .buy {
        height: 10px;
        background: #F56C6C;
      }
    }
  }
</style>