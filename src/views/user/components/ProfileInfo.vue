<template>
   <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">About Me</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <strong>
                  <i class="fas fa-map-marker-alt mr-1"></i> Address
                </strong>

                <p class="text-muted">{{currentUser.address}}</p>
              </div>
              <!-- /.card-body -->
            </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name:'profile-info',
    data(){
      return {
        
      }
    },
    computed:{
      ...mapGetters(["currentUser"])
    }
}
</script>

<style>

</style>