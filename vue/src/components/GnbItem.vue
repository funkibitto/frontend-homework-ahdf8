<template>
  <div
    class="gnb-item"
    :depth="depth"
  >
    <span v-if="pathname" class="link">
      <router-link :to="pathname">{{ name }}</router-link>
    </span>
    <span v-else>{{ name }}</span> 
    <template v-if="!isMaxDepth">
        <gnb-item v-for="(item) in children" 
          :key="item.pathname"
          :name="item.name"
          :pathname="item.pathname"
          :children="item.children"
          :depth="depth + 1"
        />
      </template>
  </div>
</template>

<script>
export default {
  name: 'GnbItem',
  props: {
    name:  {
      type: String,
      required: true
    },
    pathname:  {
      type: String,
    },
    children:  {
      type: Array,
    },
    depth: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {

    }
  },
  computed: {
    isMaxDepth: function() {
      return this.$props.depth > 2;
    }
  }
};
</script>
