<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {API_HOST, GET_USER} from '../config'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created () {
    this.getUser()
  },
  methods: {
    // 获取用户信息，开发者可以参考这个例子来编写获取天气信息的接口
    async getUser () {
      try {
        let res = await axios.get(`${API_HOST}${GET_USER}`)
        console.log(res.data)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
