<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4" style="position:fixed">
    <!-- Brand Logo -->
    <router-link :to="{name:'dashboard'}" class="brand-link">
      <img :src='logo' alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8" />
      <span class="brand-text font-weight-light">{{marketplaceName}}</span>
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img :src="currentUser.avatar" class="img-circle elevation-2" alt="User Image" />
        </div>
        <div class="info">
          <router-link :to="{name:'profile'}" class="d-block">{{currentUser.name}}</router-link>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input
            class="form-control form-control-sidebar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
          with font-awesome or any other icon font library-->
          <li class="nav-item menu-open">
            <router-link :to="{name:'dashboard'}" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
                Management
                <i class="fas fa-angle-left right"></i>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{name:'role'}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Roles</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name:'permission'}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Permissions</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name:'user'}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Users</p>
                </router-link>
              </li>
            </ul>
          </li>


          <li class="nav-item">
            <router-link to="" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
                Settings
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">6</span>
              </p>
            </router-link>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{name:'setting'}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>System settings</p>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import { mapActions,mapGetters } from 'vuex';
export default {
  name: "sidebar",
  data() {
    return {
      logo:null,
      marketplaceName:null
    };
  },
  computed:{
    ...mapGetters(['currentUser'])
  },


  created(){
    this.getInfoSystemGenaral().then(res => {
      if(res.ok){
        this.marketplaceName = res.data.marketplace_name,
        this.logo = res.data.logo
      }
    });
    
  },
  methods:{
    ...mapActions(['getInfoSystemGenaral'])
  },

  mounted() {
    $(document).ready(function() {
      $('.nav-item .nav-link').click(function(){
        $(this).parent().toggleClass('menu-open');  
      })

    });
  }
};
</script>

<style>

</style>