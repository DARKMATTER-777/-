<template>
  <header>
    <h1>公司名称</h1>
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于我们</router-link> |
      <router-link to="/services">产品服务</router-link> |
      <router-link to="/news">新闻动态</router-link> |
      <router-link to="/contact">联系我们</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}
</style>
