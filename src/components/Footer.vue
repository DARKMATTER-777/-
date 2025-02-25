<template>
  <footer>
    <p>&copy; 2023 公司名称. 保留所有权利.</p>
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于我们</router-link> |
      <router-link to="/services">产品服务</router-link> |
      <router-link to="/news">新闻动态</router-link> |
      <router-link to="/contact">联系我们</router-link>
    </nav>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
}
</style>
