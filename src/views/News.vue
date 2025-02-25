<template>
  <div>
    <h2>新闻动态</h2>
    <div v-if="newsList.length">
      <ul>
        <li v-for="news in newsList" :key="news.id">
          <h3>{{ news.title }}</h3>
          <p>{{ news.date }}</p>
          <p>{{ news.summary }}</p>
          <router-link :to="`/news/${news.id}`">查看详情</router-link>
        </li>
      </ul>
    </div>
    <p v-else>暂无新闻</p>
  </div>
</template>

<script>
export default {
  name: 'News',
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
