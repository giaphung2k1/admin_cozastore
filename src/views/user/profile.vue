<template>
  <div class="content-wrapper">
    <page-header title='Profile'/>
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            
            <profile-image/>

            <profile-info/>
           
          </div>
  
          <div class="col-md-9">

            <profile-setting/>
           
          </div>
          
        </div>
     
      </div>
      
    </section>
 
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PageHeader from '../../components/PageHeader';
import ProfileImage from './components/ProfileImage'
import ProfileInfo from './components/ProfileInfo'
import ProfileSetting from './components/ProfileSetting'
export default {
  data: () => ({

  }),
  components:{
     PageHeader,ProfileImage,ProfileInfo,ProfileSetting
  },comments:{}
};
</script>

<style>
</style>