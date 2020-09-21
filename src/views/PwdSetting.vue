<template>
  <div class="crumbs">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <i class="el-icon-setting" /> Change Password
      </el-breadcrumb-item>
    </el-breadcrumb>

    <el-card shadow="hover" class="container">
      <el-row style="padding: 0 15%">
        <el-form :model="form">
          <el-form-item label="old password" label-width="140px">
            <el-input :type="'password'" v-model="form.oldPassword"></el-input>
          </el-form-item>
          <el-form-item label="new password" label-width="140px">
            <el-input :type="'password'" v-model="form.newPassword"></el-input>
          </el-form-item>
          <el-form-item label="confirm password" label-width="140px">
            <el-input :type="'password'" v-model="form.newPasswordCfm"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="float: right" size="small" type="primary">Confirm</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'PwdSetting',
  data () {
    return {
      form: {
        oldPassword: '',
        newPassword: '',
        newPasswordCfm: '',
      }
    }
  }
}
</script>

<style scoped>

</style>