<template>
  <div
    class="hold-transition sidebar-mini layout-fixed"
  >
    <div class="wrapper">
      <navbar />
      <sidebar />

      <router-view />

      <control-sidebar />

      <comp-footer />
    </div>
  </div>
</template>

<script>
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ControlSidebar from "./components/ControlSidebar";
import CompFooter from "./components/CompFooter";

export default {
  name: "layout",
  data() {
    return {};
  },
  components: {
    Preloader,
    Navbar,
    Sidebar,
    ControlSidebar,
    CompFooter
  },
  mounted(){
    
  }
 
};
</script>

<style>
</style>