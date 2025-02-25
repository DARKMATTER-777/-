<template>
  <div>
    <h2>数据展示</h2>
    <div v-if="dataList.length">
      <ul>
        <li v-for="item in dataList" :key="item.id">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </li>
      </ul>
    </div>
    <p v-else>暂无数据</p>
  </div>
</template>

<script>
export default {
  name: 'DataDisplay',
  props: {
    dataList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
/* 样式代码 */
</style>
