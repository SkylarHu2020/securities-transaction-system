<template>
  <div>
    <!-- message hint -->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-pie-chart" /> Capital Shares
        </el-breadcrumb-item>
      </el-breadcrumb>

      <!-- capital share position -->
      <el-card class="container">
        <posi-list></posi-list>
      </el-card>
    </div>
  </div>
</template>

<script>
import PosiList from '@/components/PosiList.vue'

export default {
  name: 'Dashboard',
  components: {
    PosiList
  }
}
</script>
