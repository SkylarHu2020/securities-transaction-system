<template>
  <div>
    <!-- message hint -->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-s-order" /> Search
        </el-breadcrumb-item>
        <el-breadcrumb-item>History Trade Placement</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-card shadow="hover" class="container">
      <his-trade-list></his-trade-list>
    </el-card>
  </div>
</template>

<script>
import HisTradeList from '@/components/HisTradeList.vue'

export default {
  name: 'HisTradeQuery',
  components: {
    HisTradeList
  }
}
</script>

<style scoped>

</style>