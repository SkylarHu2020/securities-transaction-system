<template>
  <div class="header">
    <!-- fold button -->
    <div class="collapse-btn" @click="collapseChange">
      <i v-if="!collapse" class="el-icon-s-fold" />
      <i v-else class="el-icon-s-unfold" />
    </div>

    <!-- LOGO -->
    <div class="logo">skylar sts</div>

    <!-- menu -->
    <div class="header-right">
      <div class="header-user-con">
        <el-dropdown class="user-name" trigger="click" @command="signOut">
          <span class="el-dropdown-link">
            {{ username }}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="signOut"
            >Log out</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      collapse: false,
    }
  },
  computed: {
    username () {
      const account = sessionStorage.getItem('account')
      return account ? account : 'guest'
    }
  },
  methods: {
    collapseChange () {
      this.collapse = !this.collapse
      this.$bus.emit("collapse", this.collapse)
    },
    signOut () {
      this.$store.dispatch('signOut')
    }
  }
}
</script>

<style scoped>
  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
  }

  .collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
  }

  .header .logo {
    float: left;
    width: 250px;
    line-height: 70px;
  }

  .header-right {
    float: right;
    padding-right: 50px;
  }

  .header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
  }

  .btn-bell .el-icon-bell {
    color: #fff;
  }

  .user-name {
    margin-left: 10px;
  }

  .user-avator {
    margin-left: 20px;
  }

  .user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .el-dropdown-link {
    color: #fff;
    cursor: pointer;
  }

  .el-dropdown-menu__item {
    text-align: center;
  }
</style>
