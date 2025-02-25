<template>
  <div>
    <h2>联系我们</h2>
    <div v-if="contactInfo">
      <p>地址: {{ contactInfo.address }}</p>
      <p>电话: {{ contactInfo.phone }}</p>
      <p>邮箱: {{ contactInfo.email }}</p>
    </div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">姓名:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div>
        <label for="email">邮箱:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div>
        <label for="message">留言:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
      </div>
      <button type="submit">提交</button>
    </form>
    <p v-if="formSubmitted">感谢您的留言！</p>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      contactInfo: null,
      formData: {
        name: '',
        email: '',
        message: ''
      },
      formSubmitted: false
    }
  },
  created() {
    this.fetchContactInfo();
  },
  methods: {
    fetchContactInfo() {
      // 预留接口
      this.$axios.get('/api/contact')
        .then(response => {
          this.contactInfo = response.data;
        })
        .catch(error => {
          console.error('获取联系信息失败:', error);
        });
    },
    submitForm() {
      // 预留接口
      this.$axios.post('/api/contact', this.formData)
        .then(response => {
          this.formSubmitted = true;
        })
        .catch(error => {
          console.error('提交表单失败:', error);
        });
    }
  }
}
</script>

<style scoped>
/* 样式代码 */
</style>
