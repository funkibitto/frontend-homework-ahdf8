<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
import { Header, Gnb, GnbItem } from 'components';
import axios from 'axios';
import VueAxios from 'vue-axios';
import API  from 'common/api';
import { store } from "./store";

export default {
  name: 'App',
  created() {
    Vue.component('Header', Header);
    Vue.component('Gnb', Gnb);
    Vue.component('GnbItem', GnbItem);
    Vue.use(VueAxios, axios);
    Vue.prototype.API = new API();
  }
};
</script>
