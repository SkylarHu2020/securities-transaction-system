<template>
  <div>
    <!-- message hint -->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-s-order" /> Search
        </el-breadcrumb-item>
        <el-breadcrumb-item>History Order Placement</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-card shadow="hover" class="container">
      <his-order-list></his-order-list>
    </el-card>
  </div>
</template>

<script>
import HisOrderList from '@/components/HisOrderList.vue'

export default {
  name: 'HisOrderQuery',
  components: {
    HisOrderList
  }
}
</script>

<style scoped>

</style>