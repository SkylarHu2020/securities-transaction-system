<template>
  <div>
    <!-- message hint -->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-s-order" /> Search
        </el-breadcrumb-item>
        <el-breadcrumb-item>Today's Trade Orders</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-card shadow="hover" class="container">
      <trade-list></trade-list>
    </el-card>
  </div>
</template>

<script>
import TradeList from '@/components/TradeList.vue'
export default {
  name: "TradeQuery",
  components: {
    TradeList
  }
}
</script>

<style scoped>

</style>