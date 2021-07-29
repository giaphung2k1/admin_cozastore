<template>
  <div class="card">
    <div class="card-header p-2">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" href="#settings" data-toggle="tab">Settings</a>
        </li>
      </ul>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <div class="tab-content">
        <div class="tab-pane" id="settings">
          <form class="form-horizontal">
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Name</label>
              <div class="col-sm-10">
                <input v-model="user.name" @input='handleClearError' type="text" class="form-control" placeholder="Name" />
              </div>
              <p v-if="errors" class="text-danger">{{errors.name}}</p>
            </div>
            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input v-model="user.email" @input='handleClearError' type="email" class="form-control" placeholder="Email" />
              </div>
              <p v-if="errors" class="text-danger">{{errors.email}}</p>
            </div>

            <div class="form-group row">
              <label class="col-sm-2 col-form-label">Address</label>
              <div class="col-sm-10">
                <input 
                  @input='handleClearError'
                  v-model="user.address"
                  type="text"
                  class="form-control"
                  placeholder="Address"
                />
              </div>
              <p v-if="errors" class="text-danger">{{errors.address}}</p>
            </div>

            <div class="form-group row">
              <div class="offset-sm-2 col-sm-10">
                <button
                  type="submit"
                  @click.prevent="handleUpdateProfile"
                  class="btn btn-danger text-white"
                >Submit</button>
              </div>
            </div>
          </form>
        </div>
        <!-- /.tab-pane -->
      </div>
      <!-- /.tab-content -->
    </div>
    <!-- /.card-body -->
  </div>
</template>

<script>
import { TOKEN_NAME } from "../../../constants/config";
import { mapActions } from "vuex";
import { NOTI_SUCCESS_PROFILE } from "../../../constants/config";
import { validEmail } from "../../../helpers";
export default {
  name: "profile-setting",
  data() {
    return {
      errors: {},
      user: {
        name: null,
        email: null,
        address: null
      }
    };
  },
  created() {
    let token = localStorage.getItem(TOKEN_NAME);
    this.getCurrentUser(token).then(res => {
      this.user = res.data;
    });
  },
  methods: {
    ...mapActions(["getCurrentUser", "updateProfile"]),
    handleUpdateProfile() {
      let errors = {};
      if (!this.user.name) {
        errors.name = "Không được để trống tên";
      }

      if (!this.user.email) {
        errors.email = "Không được để trống email";
      } else {
        if (!validEmail(this.user.email)) {
          errors.email = "Email không đúng định dạng";
        }
      }

      if (!this.user.address) {
        errors.address = "Không được để trống địa chỉ";
      }

      if (Object.keys(errors).length > 0) {
        this.errors = errors;
      } else {
        let data = {
          id: this.user.id,
          name: this.user.name,
          email: this.user.email,
          address: this.user.address
        };
        this.updateProfile(data).then(res => {
          if (res.ok) {
            this.$notify(NOTI_SUCCESS_PROFILE);
          }
        });
      }
    },
    handleClearError(){
      this.errors = {}
    }
  }
};
</script>

<style>
</style>