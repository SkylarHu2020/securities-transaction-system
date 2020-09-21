<template>
  <!-- 
    state: the content user select
    fetch-suggestions: get hint content by querySearchAsync
    trigger-on-focus: not search when click the input box
    debounce: search when input pause time > 100ms
    select: user choose one of the item 
   -->
  <el-autocomplete
    style="width: 100%"
    size="small"
    placeholder="code/name"
    v-model="state"
    :fetch-suggestions="querySearchAsync"
    :trigger-on-focus="false"
    :debounce=100
    @select="updateInput"
  >

  </el-autocomplete>
</template>

<script>
export default {
  name: 'CodeInput',
  data () {
    return {
      state: '',
    }
  },
  methods: {
    // queryString: input value
    querySearchAsync (queryString, callback) {
      // get data from server
      let list = [
        {code: 1, name: 'stock name1', value: '000001-stock name1'},
        {code: 2, name: 'stock name2', value: '000001-stock name2'},
      ]

      callback(list)
    },
    updateInput (item) {
      // code[int]
      // this.state = item.code  => 1
      // 1 --> 000001 --> 000001
      this.state = ('000000' + item.code).slice(-6)
      this.$bus.emit('codeinput-selected', item)
    }
  }
}
</script>

<style lang="scss">
 .wide-dropdown {
   width: 600px !important
 }
</style>