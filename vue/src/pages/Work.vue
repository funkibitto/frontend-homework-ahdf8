<template>
  <div class="area-work">
    <div class="page-top">
      <h3 class="pathname">{{ pagePathName }}</h3>
      <div class="button-wrap">
        <button v-for="index in 3" 
          :key="index" 
          :class="{ 'is--selected': numOfColumns === index }"
          @click="onChangeNumOfColumns(index)"
          >
          {{ index }}
         </button>
      </div>
    </div>
    
    <div :class="['box-wrap', `is--${numOfColumns}-column`]">
      <div
        v-for="(item, idx) in box.items"
        :key="'box' + idx"
        class="box"
      >
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import 'scss/pages/work.scss';

export default {
  name: 'Work',
  props: {
    box: {
      type: Object,
      default() {
        return this.$store.state.ui.box;
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    onChangeNumOfColumns(value) {
      this.$store.commit('ui/setNumOfColumns', value)
    },
  },
  computed: {
    pagePathName() {
      return 'page path: ' + this.$route.path;
    },
    numOfColumns () {
      return this.$store.getters['ui/numOfColumns'];
    }
  }
};
</script>
