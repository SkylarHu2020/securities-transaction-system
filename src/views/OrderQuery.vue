<template>
  <div>
    <!-- message hint -->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-s-order" /> Search
        </el-breadcrumb-item>
        <el-breadcrumb-item>Today's Order Placement</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-card shadow="hover" class="container">
      <order-list></order-list>
    </el-card>
  </div>
</template>

<script>
import OrderList from '@/components/OrderList.vue'
export default {
  name: "OrderQuery",
  components: {
    OrderList
  }
}
</script>

<style scoped>

</style>