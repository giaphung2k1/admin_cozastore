<template>
  <div id="content" class="container-fluid">
    <div class="card">
        <div class="card-header font-weight-bold d-flex justify-content-between align-items-center">
            <h5 class="m-0 ">Danh sách danh mục sản phẩm</h5>

            <form-search/>

        </div>
        <div class="card-body">

            <analytic/>

            <form-action/>

            <category-list/>

            <pagination/>

            
            
        </div>
    </div>
</div>
</template>

<script>
import FormSearch from './components/FormSearch';
import Analytic from './components/Analytic';
import FormAction from './components/FormAction';
import CategoryList from './components/CategoryList';
import Pagination from './components/Pagination';
export default {
    components:{
        FormSearch,
        Analytic,
        FormAction,
        CategoryList,
        Pagination
    }
}
</script>

<style>
.tbody-thumb img {
    width: 80px;
    height: 80px;
    overflow: hidden;
    border: 1px solid #ddd;
}
</style>