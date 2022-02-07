import Vue from 'vue';

export default function API() {
  return {
    async getGnb() {
      try {
        const response = await Vue.axios.get('http://haezoom-frontend-homework.s3.ap-northeast-2.amazonaws.com/response.json');
        return response.data;
      } catch (e) {
        console.error(e);
        return null;
      }
    }
  };
}
