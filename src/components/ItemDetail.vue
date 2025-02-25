<template>
  <div>
    <h2>{{ itemDetail.title }}</h2>
    <p>{{ itemDetail.date }}</p>
    <p>{{ itemDetail.content }}</p>
    <router-link to="/items">返回列表</router-link>
  </div>
</template>

<script>
export default {
  name: 'ItemDetail',
  data() {
    return {
      itemDetail: {}
    }
  },
  created() {
    this.fetchItemDetail();
  },
  methods: {
    fetchItemDetail() {
      const itemId = this.$route.params.id;
      this.$axios.get(`/api/items/${itemId}`)
        .then(response => {
          this.itemDetail = response.data;
        })
        .catch(error => {
          console.error('获取项目详情失败:', error);
        });
    }
  }
}
</script>

<style scoped>
/* 样式代码 */
</style>
