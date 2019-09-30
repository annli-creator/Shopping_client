<template>
  <div>
    <div>
      <input v-model="formData.name" />
      <input v-model="formData.age" />
      <input v-model="formData.sex" />
      <input v-model="formData.remarks" />
    </div>
    <button @click="addTestData">保存</button>
    <ul v-for="item in items" :key="item._id">
      <li>{{ item.name }}</li>
      <li>{{ item.age }}</li>
      <li>{{ item.sex }}</li>
      <li>{{ item.remarks }}</li>
    </ul>
  </div>
</template>

<script>
import { getTestDataApi, postTestDataApi } from '@/http/api/test.api'
export default {
  data () {
    return {
      items: [],
      formData: {
        name: '',
        age: '',
        sex: '',
        remarks: ''
      }
    }
  },
  created () {
    this.getTestData()
  },
  methods: {
    getTestData () {
      getTestDataApi().then(result => {
        this.items = result
      }, err => {
        console.log(err)
      })
    },
    addTestData () {
      postTestDataApi(this.formData).then(result => {
        this.getTestData()
        // this.items = result
      }, err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="">
  ul {
    border-bottom: 1px solid #999;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  ul,li {
    list-style: none;
  }
  li {
    float: left;
    height: 30px;
    border-right: 1px solid red;
  }
</style>
