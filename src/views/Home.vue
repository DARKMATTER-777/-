<template>
    <div>
      <h2>欢迎来到公司主页</h2>
      <div>
        <h3>最新新闻</h3>
        <ul v-if="newsList.length">
          <li v-for="news in newsList" :key="news.id">
            {{ news.title }} - {{ news.date }}
          </li>
        </ul>
        <p v-else>暂无新闻</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    data() {
      return {
        newsList: []
      }
    },
    created() {
      this.fetchNews();
    },
    methods: {
      fetchNews() {
        // 预留接口
        this.$axios.get('/api/news')
          .then(response => {
            this.newsList = response.data;
          })
          .catch(error => {
            console.error('获取新闻列表失败:', error);
          });
      }
    }
  }
  </script>
  
  <style scoped>
  /* 样式代码 */
  </style>
  