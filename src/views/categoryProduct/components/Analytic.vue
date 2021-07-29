<template>
  <div class="analytic">
    <router-link
      :to="{ name: 'cat-product', query: { status: 'all' } }"
      class="text-primary"
      >Tất cả<span class="text-muted">({{categoriesPublish.length + categoriesPending.length + categoriesTrash.length}})</span></router-link
    >
    <router-link
      :to="{ name: 'cat-product', query: { status: 'publish' } }"
      class="text-primary"
      >Đã đăng<span class="text-muted">({{categoriesPublish.length}})</span></router-link
    >
    <router-link
      :to="{ name: 'cat-product', query: { status: 'pending' } }"
      class="text-primary"
      >Chờ xét duyệt<span class="text-muted">({{categoriesPending.length}})</span></router-link
    >
    <router-link
      :to="{ name: 'cat-product', query: { status: 'trash' } }"
      class="text-primary"
      >Thùng rác<span class="text-muted">({{categoriesTrash.length}})</span></router-link
    >
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "analytic",
  computed: {
    ...mapGetters([
      "categoriesAll",
      "categoriesPublish",
      "categoriesPending",
      "categoriesTrash"
    ])
  }
};
</script>

<style>
</style>