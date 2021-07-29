<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <!-- /.login-logo -->
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <div class="h1">
            <b>Admin</b>LTE
          </div>
        </div>
        <div class="card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <form @submit.prevent="handleSubmit">
            <div class="input-group mb-3">
              <input
                v-model="email"
                @input="handleNoneError"
                type="email"
                class="form-control"
                placeholder="Email"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
              <br />
            </div>
            <p v-if="errors" class="text-danger">{{errors.email}}</p>

            <div class="input-group mb-3">
              <input
                v-model="password"
                @input="handleNoneError"
                type="password"
                class="form-control"
                placeholder="Password"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <p v-if="errors" class="text-danger">{{errors.password}}</p>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label for="remember">Remember Me</label>
                </div>
              </div>
              <!-- /.col -->
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
              </div>
              <!-- /.col -->
            </div>
          </form>

          <div class="social-auth-links text-center mt-2 mb-3">
            <a href="#" class="btn btn-block btn-primary">
              <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
            </a>
            <a href="#" class="btn btn-block btn-danger">
              <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
            </a>
          </div>
          <!-- /.social-auth-links -->

          <p class="mb-1">
            <a href="forgot-password.html">I forgot my password</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TOKEN_NAME } from "../../constants/config";
import { validEmail, validPassword } from "../../helpers";
import { mapActions } from "vuex";
import { NOTI_ERROR_LOGIN, NOTI_SUCCESS_LOGIN } from "../../constants/config";
export default {
  data() {
    return {
      email: null,
      password: null,
      errors: {}
    };
  },
  methods: {
    ...mapActions(["login", "setValueLogin"]),
    handleSubmit() {
      let errors = {};
      if (this.email) {
        if (!validEmail(this.email)) {
          errors.email = "Email không đúng định dạng";
        }
      } else {
        errors.email = "Email không được để trống";
      }

      if (this.password) {
        if (!validPassword(this.password)) {
          errors.password = "Mật khẩu phải lớn hơn 5 kí tự";
        }
      } else {
        errors.password = "Mật khẩu không được để trống";
      }

      if (Object.keys(errors).length > 0) {
        this.errors = errors;
      } else {
        let data = {
          email: this.email,
          password: this.password
        };
        this.login(data).then(res => {
          if (res.ok) {
            let token = res.data.access_token;
            let user = res.data.user;
            let data = {
              token: token,
              currentUser: user
            };
            localStorage.setItem(TOKEN_NAME, token);
            this.setValueLogin(data);
            this.$notify(NOTI_SUCCESS_LOGIN);

            this.$router.push({ name: "dashboard" });
          } else {
            this.$notify(NOTI_ERROR_LOGIN);
          }
        });
      }
    },
    handleNoneError() {
      this.errors = {};
    }
  }
};
</script>

<style >
/* Made with love by Mutiullah Samim*/
</style>