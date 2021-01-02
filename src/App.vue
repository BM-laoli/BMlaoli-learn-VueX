<template>
  <div id="app">
    <p>{{ $store.state.contuned }}</p>
    <button @click="additon">+</button>
    <button @click="subraction">-</button>
    <h1>------我是有个bm老李的的界面--------</h1>
    <bmlao></bmlao>

    <p>{{ $store.state.info }}</p>
    <button @click="uplateInfo">修改信息</button>
    <h1>-------我是测试响应式的数据-------</h1>
    <div>
      <p>{{ $store.state.info }}</p>
    </div>

    <h1>------module的界面--------</h1>
    <p>{{ $store.state.a.name }}</p>
  </div>
</template>

<script>

import bmlao from '@/components/Bmlaoli';
import { INCREMENT } from './store/mutations-types'

export default {
  name: 'App',
  components: {
    bmlao,
  },
  data () {
    return {
      // contuned: 100
    }
  },
  methods: {
    additon () {
      this.$store.commit(INCREMENT)
    },
    subraction () {
      this.$store.commit('decrement')

    },
    uplateInfo () {
      // this.$store.commit('uplateInfo') 这个是触发的同步的方法
      // 现在我们去触发我们vuex里面定义的异步方法
      this.$store.dispatch('aupdataeInfo', '我是携带的讯息')
    }
  },

}
</script>

<style>
</style>
