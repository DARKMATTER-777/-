<template>
    <div>
      <h2>产品服务</h2>
      <div v-if="services.length">
        <ul>
          <li v-for="service in services" :key="service.id">
            <h3>{{ service.name }}</h3>
            <p>{{ service.description }}</p>
          </li>
        </ul>
      </div>
      <p v-else>暂无产品服务</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Services',
    data() {
      return {
        services: []
      }
    },
    created() {
      this.fetchServices();
    },
    methods: {
      fetchServices() {
        // 预留接口
        this.$axios.get('/api/services')
          .then(response => {
            this.services = response.data;
          })
          .catch(error => {
            console.error('获取产品服务失败:', error);
          });
      }
    }
  }
  </script>
  
  <style scoped>
  /* 样式代码 */
  </style>
  