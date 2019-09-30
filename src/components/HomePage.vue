<template>
  <div class="home_page">
    <header>
      <span>
        <Icon type="help" class="iview_project_icon"></Icon>
        {{ homePageTitle }}
      </span>
      <ul class="header_items">
        <li>{{ currentTime }}</li>
      </ul>
    </header>
  </div>
</template>

<script>
// import { getTestDataApi, postTestDataApi } from '@/http/api/test.api'
export default {
  data () {
    return {
      homePageTitle: this.$i18n.homePage_title,
      currentTime: this.$moment(new Date()).format('YYYY-MM-DD-HH:MM'),
      help: this.$i18n.Help
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="">
  .home_page {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  header {
    width: 100%;
    height: 72px;
    overflow: hidden;
    padding: 0 30px;
    background: rgb(20, 52, 89);
    color: #fff;
  }
  header span {
    float: left;
    line-height: 72px;
    font-size: 24px;
  }
  .header_items {
    float: right;
    line-height: 72px;
  }
</style>
