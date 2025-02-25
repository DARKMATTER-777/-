<template>
  <div>
    <h2>联系我们</h2>
    <div v-if="contactInfo">
      <p>地址: {{ contactInfo.address }}</p>
      <p>电话: {{ contactInfo.phone }}</p>
      <p>邮箱: {{ contactInfo.email }}</p>
    </div>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
  name: 'Contact',
  components: {
    ContactForm
  },
  data() {
    return {
      contactInfo: null
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
    }
  }
}
</script>

<style scoped>
/* 样式代码 */
</style>
