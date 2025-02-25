<template>
  <div>
    <h2>关于我们</h2>
    <div v-if="aboutInfo">
      <p>{{ aboutInfo.description }}</p>
      <h3>我们的团队</h3>
      <ul>
        <li v-for="member in aboutInfo.team" :key="member.id">
          {{ member.name }} - {{ member.position }}
        </li>
      </ul>
    </div>
    <p v-else>加载中...</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      aboutInfo: null
    }
  },
  created() {
    this.fetchAboutInfo();
  },
  methods: {
    fetchAboutInfo() {
      // 预留接口
      this.$axios.get('/api/about')
        .then(response => {
          this.aboutInfo = response.data;
        })
        .catch(error => {
          console.error('获取公司信息失败:', error);
        });
    }
  }
}
</script>

<style scoped>
/* 样式代码 */
</style>
