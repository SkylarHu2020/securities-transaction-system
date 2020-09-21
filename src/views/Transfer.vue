<template>
  <div>
    <!-- message hint -->
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-baseball" /> Transfer
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-card shadow="hover" class="container">
      <el-row style="padding: 0 15%">
        <el-form label-width="140px">
          <!-- transfer type -->
          <el-form-item label="transfer type">
            <el-select v-model="selectType" style="width: 100%">
              <el-option
                v-for="item in form.type"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <!-- bank -->
          <el-form-item label="select bank">
            <el-select v-model="selectBank" style="width: 100%">
              <el-option
                v-for="item in form.bank"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <!-- bank password -->
          <el-form-item label="bank password" >
            <el-input :type="'password'" v-model="form.password" />
          </el-form-item>
          <!-- bank account type -->
          <el-form-item label="select currency">
            <el-select v-model="selectCurrency" style="width: 100%">
              <el-option
                v-for="item in form.currency"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <!-- amount -->
          <el-form-item label="amount" >
            <el-input v-model="form.amount" />
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="primary" style="float: right">Transfer</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Transfer',
  data () {
    return {
      form: {
        type: [
          {id: 0, name: 'transfer in'},
          {id: 1, name: 'transfer out'}
        ],
        bank: [
          {id: 0, name: "first bank"},
          {id: 1, name: 'second bank'}
        ],
        password: '',
        currency: [
          {id: 0, name: 'RMB'},
          {id: 1, name: 'HKD'}
        ],
        amount: 0
      },
      selectType: 0,
      selectBank: "first bank",
      selectCurrency: 0
    }
  }
}
</script>

<style scoped>

</style>