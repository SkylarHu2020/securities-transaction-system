<template>
  <div class="orderForm">
    <el-form label-width="120px">
      <!-- auto stock info textfield -->
      <el-form-item>
        <h3 :style="direction === 0 ? 'color: #F56C6C' : 'color: #67C23A'">
          {{ direction === 0 ? 'Buy' : 'Sell' }} Stock
        </h3>
      </el-form-item>
      <!-- stock code -->
      <el-form-item label="Stock code">
        <code-input></code-input>
      </el-form-item>
       <!-- stock name -->
      <el-form-item label="Stock name">
        <el-input readonly v-model="name" />
      </el-form-item>
      <!-- volumn -->
      <el-form-item :label="'Available to ' + (direction === 0 ? 'Buy' : 'Sell')">
        <el-input readonly v-model="affordCount" />
      </el-form-item>
      <!-- price -->
      <el-form-item label="Price">
        <el-input-number
          v-model="price"
          controls-position="right"
          :step="0.01"
          :min="0.01">
        </el-input-number>
      </el-form-item>
      <el-form-item label="Volumn">
        <el-input-number
          :label="(direction === 0 ? 'Buy' : 'Sell')"
          v-model="volumn"
          controls-position="right"
          :max="affordCount"
          :min="0">
        </el-input-number>
      </el-form-item>
      <!-- button -->
      <el-form-item>
        <el-button
          :type="direction === 0 ? 'danger' : 'success'"
          style="float: right"
        >
          {{ direction === 0 ? 'Buy' : 'Sell'}}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import CodeInput from '@/components/CodeInput.vue'

export default {
  name: 'OrderWidget',
  components: {
    CodeInput
  },
  props: {
    direction: { type: Number, required: true}
  },
  data () {
    return {
      name: '',
      affordCount: undefined,
      code: '',
      price: undefined,
      volumn: undefined
    }
  },
  methods: {
    updateSelectedCode (item) {
      this.code = item.code
      this.name = item.name
      this.price = undefined
      this.volumn = undefined
    }
  },
  created () {
    this.$bus.on("codeinput-selected", this.updateSelectedCode)
  },
  beforeDestroy () {
    this.$bus.off("codeinput-selected", this.updateSelectedCode)
  }

}
</script>

<style scoped lang="scss">
  .orderForm {
    input {
      text-align: center;
    }

    .el-input-number {
      width: 100%;
    }
  }
</style>