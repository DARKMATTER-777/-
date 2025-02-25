<template>
  <div>
    <h2>项目列表</h2>
    <div v-if="items.length">
      <ul>
        <li v-for="item in items" :key="item.id">
          <h3>{{ item.title }}</h3>
          <p>{{ item.date }}</p>
          <p>{{ item.summary }}</p>
          <router-link :to="`/items/${item.id}`">查看详情</router-link>
        </li>
      </ul>
    </div>
    <p v-else>暂无项目</p>
  </div>
</template>

<script>
export default {
  name: 'Items',
  data() {
    return {
      items: []
    }
  },
  created() {
    this.fetchItems();
  },
  methods: {
    fetchItems() {
      // 预留接口
      this.$axios.get('/api/items')
        .then(response => {
          this.items = response.data;
        })
        .catch(error => {
          console.error('获取项目列表失败:', error);
        });
    }
  }
}
</script>

<style scoped>
/* 样式代码 */
</style>
