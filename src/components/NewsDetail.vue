<template>
  <div>
    <h2>{{ newsDetail.title }}</h2>
    <p>{{ newsDetail.date }}</p>
    <p>{{ newsDetail.content }}</p>
    <router-link to="/news">返回新闻列表</router-link>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  data() {
    return {
      newsDetail: {}
    }
  },
  created() {
    this.fetchNewsDetail();
  },
  methods: {
    fetchNewsDetail() {
      const newsId = this.$route.params.id;
      this.$axios.get(`/api/news/${newsId}`)
        .then(response => {
          this.newsDetail = response.data;
        })
        .catch(error => {
          console.error('获取新闻详情失败:', error);
        });
    }
  }
}
</script>

<style scoped>
/* 样式代码 */
</style>
