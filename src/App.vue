<template>
  <div id="app">
    <router-view />
    <notifications group="foo" position="bottom right" />
    <loading v-bind:class="{ show: isLoading }" />
  </div>
</template>
<script>
import Loading from "./components/Loading";

import { TOKEN_NAME } from "./constants/config";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["isLoading"])
  },
  methods: {
    ...mapActions(["setValueLogin"])
  },

  created() {
    let token = localStorage.getItem(TOKEN_NAME);
    if (token) {
      let data = {
        token: token
      };
      this.setValueLogin(data).then(res => {
        if (!res.ok) {
          localStorage.removeItem(TOKEN_NAME);
          this.$router.push({ name: "login" });
        }
      });
    }
  },
  components: {
    Loading
  }
};
</script>
<style>

</style>
