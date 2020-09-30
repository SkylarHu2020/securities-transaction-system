<template>
  <div>
    <!-- message hint -->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-s-order" /> Entrustment
        </el-breadcrumb-item>
        <el-breadcrumb-item>Buy</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-card shadow="hover" class="container">
      <el-row>
        <!-- entrustment -->
        <el-col :span="12">
          <order-widget :direction="0"></order-widget>
        </el-col>
        <!-- order list -->
        <el-col :span="12">
          <order-book></order-book>
        </el-col>
      </el-row>

      <!-- position list -->
      <posi-list></posi-list>
    </el-card>
  </div>
</template>

<script>
import PosiList from '@/components/PosiList.vue'
import OrderWidget from '@/components/OrderWidget.vue'
import OrderBook from '@/components/OrderBook.vue'

export default {
  name: 'Buy',
  components: {
    PosiList,
    OrderWidget,
    OrderBook
  }
}
</script>

<style lang="postcss">

</style>
