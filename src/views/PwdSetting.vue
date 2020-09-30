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
            <el-button style="float: right" size="small" type="primary" @click="confirm">Confirm</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import user from '@/api/user.js'
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
  },
  methods: {
    confirm () {
      if (this.form.newPassword != this.form.newPasswordCfm) {
        this.$message.warning("The confirm password is not same as your new password, please confirm.")
        return
      }

      if (this.form.newPassword.length < 4) {
        this.$message.warning("The password is less than 4, please enter again")
        return
      }

      user.passwordUpdate({
        account: sessionStorage.account,
        oldPassword: this.form.oldPassword,
        newPassword: this.form.newPassword
      })

      this.$router.replace({path: '/'})
    }
  }
}
</script>

<style scoped>

</style>