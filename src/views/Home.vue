<template>
  <div>
    <!-- header -->
    <v-header></v-header>
    <v-sidebar></v-sidebar>
    <!-- <router-view></router-view> -->
    <div class="content-box" :class="{'content-collapse': collapse}">
      <div class="content">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import VHeader from '@/components/Header.vue'
import VSidebar from '@/components/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    VHeader,
    VSidebar
  },
  data () {
    return {
      collapse: false
    }
  },
  created () {
    this.$bus.on("collapse-content", msg => {
      this.collapse = msg
    })
  },
  beforeDestroy () {
    this.$bus.off("collapse-content", msg => {
      this.collapse = msg
    })
  }
}
</script>

<style scoped>
</style>
