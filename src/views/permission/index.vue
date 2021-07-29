<template>
  <div class="content-wrapper">
    <page-header title="Permission" />

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Responsive Hover Table</h3>

                <div class="card-tools">
                  <v-btn
                    tag="a"
                    :to="{name:'add-permission'}"
                    depressed
                    color="#2196F3"
                    dark
                  >Create new permission</v-btn>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Action</th>
                      <th>Created at</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-if='permissions.length > 0'>
                      <tr v-for='(permission,index) in permissions' :key='index'>
                        <td>{{index + 1}}</td>
                        <td>{{permission.name}}</td>
                        <td></td>
                        <td>
                          {{permission.created_at}}
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>

            <!-- /.card -->
            <div class="card card-default collapsed-card">
              <div class="card-header">
                
                <h3 class="card-title text-uppercase"><i class="fas fa-trash-alt"></i> Trash</h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-plus"></i>
                  </button>
                  <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body" style="display: none;">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Minimal</label>
                      <select
                        class="form-control select2 select2-hidden-accessible"
                        style="width: 100%;"
                        data-select2-id="1"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option selected="selected" data-select2-id="3">Alabama</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="2"
                        style="width: 100%;"
                      >
                        <span class="selection">
                          <span
                            class="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2-36vf-container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2-36vf-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Alabama"
                            >Alabama</span>
                            <span class="select2-selection__arrow" role="presentation">
                              <b role="presentation"></b>
                            </span>
                          </span>
                        </span>
                        <span class="dropdown-wrapper" aria-hidden="true"></span>
                      </span>
                    </div>
                    <!-- /.form-group -->
                    <div class="form-group">
                      <label>Disabled</label>
                      <select
                        class="form-control select2 select2-hidden-accessible"
                        disabled
                        style="width: 100%;"
                        data-select2-id="4"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option selected="selected" data-select2-id="6">Alabama</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default select2-container--disabled"
                        dir="ltr"
                        data-select2-id="5"
                        style="width: 100%;"
                      >
                        <span class="selection">
                          <span
                            class="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="-1"
                            aria-disabled="true"
                            aria-labelledby="select2-oiqw-container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2-oiqw-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Alabama"
                            >Alabama</span>
                            <span class="select2-selection__arrow" role="presentation">
                              <b role="presentation"></b>
                            </span>
                          </span>
                        </span>
                        <span class="dropdown-wrapper" aria-hidden="true"></span>
                      </span>
                    </div>
                    <!-- /.form-group -->
                  </div>
                  <!-- /.col -->
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Multiple</label>
                      <select
                        class="select2 select2-hidden-accessible"
                        multiple
                        data-placeholder="Select a State"
                        style="width: 100%;"
                        data-select2-id="7"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option>Alabama</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="8"
                        style="width: 100%;"
                      >
                        <span class="selection">
                          <span
                            class="select2-selection select2-selection--multiple"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="-1"
                            aria-disabled="false"
                          >
                            <ul class="select2-selection__rendered">
                              <li class="select2-search select2-search--inline">
                                <input
                                  class="select2-search__field"
                                  type="search"
                                  tabindex="0"
                                  autocomplete="off"
                                  autocorrect="off"
                                  autocapitalize="none"
                                  spellcheck="false"
                                  role="searchbox"
                                  aria-autocomplete="list"
                                  placeholder="Select a State"
                                  style="width: 482.609px;"
                                />
                              </li>
                            </ul>
                          </span>
                        </span>
                        <span class="dropdown-wrapper" aria-hidden="true"></span>
                      </span>
                    </div>
                    <!-- /.form-group -->
                    <div class="form-group">
                      <label>Disabled Result</label>
                      <select
                        class="form-control select2 select2-hidden-accessible"
                        style="width: 100%;"
                        data-select2-id="9"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option selected="selected" data-select2-id="11">Alabama</option>
                        <option>Alaska</option>
                        <option disabled="disabled">California (disabled)</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="10"
                        style="width: 100%;"
                      >
                        <span class="selection">
                          <span
                            class="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2-x1lg-container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2-x1lg-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Alabama"
                            >Alabama</span>
                            <span class="select2-selection__arrow" role="presentation">
                              <b role="presentation"></b>
                            </span>
                          </span>
                        </span>
                        <span class="dropdown-wrapper" aria-hidden="true"></span>
                      </span>
                    </div>
                    <!-- /.form-group -->
                  </div>
                  <!-- /.col -->
                </div>
                <!-- /.row -->

                <h5>Custom Color Variants</h5>
                <div class="row">
                  <div class="col-12 col-sm-6">
                    <div class="form-group">
                      <label>Minimal (.select2-danger)</label>
                      <select
                        class="form-control select2 select2-danger select2-hidden-accessible"
                        data-dropdown-css-class="select2-danger"
                        style="width: 100%;"
                        data-select2-id="12"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option selected="selected" data-select2-id="14">Alabama</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="13"
                        style="width: 100%;"
                      >
                        <span class="selection">
                          <span
                            class="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2-y7r5-container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2-y7r5-container"
                              role="textbox"
                              aria-readonly="true"
                              title="Alabama"
                            >Alabama</span>
                            <span class="select2-selection__arrow" role="presentation">
                              <b role="presentation"></b>
                            </span>
                          </span>
                        </span>
                        <span class="dropdown-wrapper" aria-hidden="true"></span>
                      </span>
                    </div>
                    <!-- /.form-group -->
                  </div>
                  <!-- /.col -->
                  <div class="col-12 col-sm-6">
                    <div class="form-group">
                      <label>Multiple (.select2-purple)</label>
                      <div class="select2-purple">
                        <select
                          class="select2 select2-hidden-accessible"
                          multiple
                          data-placeholder="Select a State"
                          data-dropdown-css-class="select2-purple"
                          style="width: 100%;"
                          data-select2-id="15"
                          tabindex="-1"
                          aria-hidden="true"
                        >
                          <option>Alabama</option>
                          <option>Alaska</option>
                          <option>California</option>
                          <option>Delaware</option>
                          <option>Tennessee</option>
                          <option>Texas</option>
                          <option>Washington</option>
                        </select>
                        <span
                          class="select2 select2-container select2-container--default"
                          dir="ltr"
                          data-select2-id="16"
                          style="width: 100%;"
                        >
                          <span class="selection">
                            <span
                              class="select2-selection select2-selection--multiple"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabindex="-1"
                              aria-disabled="false"
                            >
                              <ul class="select2-selection__rendered">
                                <li class="select2-search select2-search--inline">
                                  <input
                                    class="select2-search__field"
                                    type="search"
                                    tabindex="0"
                                    autocomplete="off"
                                    autocorrect="off"
                                    autocapitalize="none"
                                    spellcheck="false"
                                    role="searchbox"
                                    aria-autocomplete="list"
                                    placeholder="Select a State"
                                    style="width: 482.609px;"
                                  />
                                </li>
                              </ul>
                            </span>
                          </span>
                          <span class="dropdown-wrapper" aria-hidden="true"></span>
                        </span>
                      </div>
                    </div>
                    <!-- /.form-group -->
                  </div>
                  <!-- /.col -->
                </div>
                <!-- /.row -->
              </div>
              <!-- /.card-body -->
              <div class="card-footer" style="display: none;">
                Visit
                <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about
                the plugin.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHeader from "../../components/PageHeader";
import { mapActions,mapGetters } from 'vuex';
export default {

  
  computed:{
		...mapGetters(['permissions'])
	},
  methods:{
    ...mapActions(['getListPermission'])
  },
  created(){
    this.getListPermission();
  },
  components: {
    PageHeader
  },
};
</script>

<style>
</style>