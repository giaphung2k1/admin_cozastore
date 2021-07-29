<template>
  <div id="content" class="container-fluid">
    <div class="card">
      <div class="card-header font-weight-bold">{{title}}</div>
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label for="name">Tên danh mục</label>
                <input
                  v-model="category.name"
                  class="form-control"
                  type="text"
                  name="name"
                  id="name"
                />
                <p class="text-danger error" v-if="errors &&errors.name">{{ errors.name }}</p>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label for="intro">Mô tả danh mục</label>
                <textarea v-model="category.description" class="form-control" id="intro" cols="30" rows="5"></textarea>
                <p class="text-danger error" v-if="errors.description">{{ errors.description }}</p>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="file">Ảnh danh mục</label>
            <div class="uploadFile product d-flex justify-content-start mb-3">
              <input
                type="file"
                required
                id="img_product"
                class="btn rounded-0"
                accept="image/jpeg"
                @change="uploadImage"
              />
            </div>
            <div id="img-product">
              <span class="thumb-img position-relative">
                <img :src="category.thumbUrl" id="path_img" />
              </span>
            </div>
            <p class="text-danger error" v-if="errors.fileImage">{{ errors.fileImage }}</p>
          </div>
          <div class="form-group">
            <label for>Trạng thái</label>
            <div class="form-check"
                v-for="item in listStatus"
                :key='item.value'
            >
              <input
                v-model="category.status"
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                :id="'exampleRadios'+item.value"
                :value="item.value"
              />
              <label class="form-check-label" :for="'exampleRadios'+item.value">{{item.text}}</label>
            </div>

            <p class="text-danger error" v-if="errors.status">{{ errors.status }}</p>
          </div>

          <button type="submit" class="btn btn-primary">{{textSubmit}}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import {STATUS_CONFIG} from '../../../constants/const';
import { mapActions, mapGetters } from "vuex";
import { checkImageFile } from "../../../helpers";
export default {
  name: "action-detail",
  data() {
    return {
      errors: {},
      id: this.$route.params.id,
      fileImage: "",
      listStatus:STATUS_CONFIG,
      category: {
        thumbUrl: null,
        name: "",
        description: "",
        status: null
      },
    };
  },
  watch: {
    $route(to) {
      if (this.isEdit) {
        this.id = to.params.id;
        this.getCategoryById(this.id).then(res => {
          if (res.ok) {
              this.category = res.data;
          } else {
            this.router.push({ name: "cat-product" });
          }
        });
      }
    }
  },
  created() {
    if (this.isEdit) {
      this.getCategoryById(this.id).then(res => {
          if (res.ok) {
              this.category = res.data;
          } else {
            this.router.push({ name: "cat-product" });
          }
        });
    }
  },
  computed: {
    ...mapGetters(["currentUser"]),
    title() {
      if (this.isEdit) {
        return "Cập nhật danh mục";
      }
      return "Thêm danh mục";
    },
    textSubmit() {
      if (this.isEdit) {
        return "Cập nhật";
      }
      return "Thêm mới";
    }
  },

  methods: {
    ...mapActions(["createCatProduct", "getCategoryById",'update']),
    uploadImage(e) {
      const image = e.target.files[0];
      this.fileImage = image;
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.category.thumbUrl = e.target.result;
      };
    },
    handleSubmit() {
      if (
        this.category.name &&
        this.category.description &&
        checkImageFile(this.fileImage) &&
        this.category.status &&
        this.currentUser.id
      ) {
        var bodyFormData = new FormData();
        bodyFormData.append("name", this.category.name);
        bodyFormData.append("description", this.category.description);
        bodyFormData.append("status", this.category.status);
        bodyFormData.append("user_id", this.currentUser.id);
        bodyFormData.append("thumbUrl", this.category.thumbUrl);

        if (this.isEdit) {
         
            this.update({id:this.id,bodyFormData}).then(res => {
              if(res.ok){
                // res.data.forEach(item => {
                //     console.log(item)
                // });
                // console.log(res.id)
                // this.$router.push({ name: "cat-product" });
              }
              
            });
        } else {
          this.createCatProduct(bodyFormData).then(res => {
            if (res.ok) {
              this.$router.push({ name: "cat-product" });
            } else {
              console.log(res);
            }
          });
        }
      } else {
        let errors = {};
        if (!this.category.name) {
          errors.name = "Tên danh mục không được để trống";
        }
        if (!this.category.description) {
          errors.description = "Mô tả danh mục không được để trống";
        }

        if (!checkImageFile(this.fileImage)) {
          errors.fileImage = "File đưa lên phải là ảnh";
        }
        if (!this.category.status) {
          errors.status = "Trạng thái phải tồn tại";
        }
        this.errors = errors;
      }
    },
  },
  props: {
    isEdit: { type: Boolean, default: false }
  }
};
</script>

<style>
.uploadFile input[type="file"] {
  background-color: #f8f7f7;
  font-family: Arial, Helvetica, sans-serif;
  color: #333 !important;
  border-radius: 5px !important;
  box-shadow: 0 0 7px rgb(0 0 0 / 70%) !important;
  color: #fff;
  font-weight: bold;
  font-size: 15px !important;
  letter-spacing: 1px;
  position: relative;
}
#img-product span.thumb-img {
  width: 30%;
  max-height: 500px;
  box-shadow: 0 0 5px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
#img-product span.thumb-img img {
  width: 100%;
  height: auto;
}
.error {
  margin-top: 5px !important;
}
</style>