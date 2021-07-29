<template>
	<table class="table table-striped table-checkall">
		<thead>
			<tr>
				<th scope="col">
					<input name="checkall" type="checkbox" />
				</th>
				<th scope="col">#</th>
				<th scope="col">Ảnh</th>
				<th scope="col">Tên danh mục</th>
				<th scope="col">Người tạo</th>
				<th scope="col">Ngày tạo</th>
				<th scope="col">Trạng thái</th>
				<th scope="col">Tác vụ</th>
			</tr>
		</thead>
		<tbody>
			<template v-if="categories.length > 0">
				<category-item
					:index="index"
					:item="item"
					v-for="(item, index) in categories"
					:key="item.id"
				/>
			</template>
		</tbody>
	</table>
</template>

<script>
import CategoryItem from "./CategoryItem";
import { mapActions, mapGetters } from "vuex";
export default {
	name: "category-list",
	components: {
		CategoryItem
	},
	data() {
		return {
			status: this.$route.query.status,
		};
	},
	watch: {
		$route(to) {
			this.status = to.query.status;
			this.setCategories(this.status).then(res => {
			if(!res.ok){
				this.$router.push({name:'cat-product'});
			}
			
			});
		}
	},
	computed: {
		...mapGetters([
			'categories'
		])
	},
	methods: {
		

		...mapActions(['setCategories'])
	},
	created() {
		this.setCategories(this.status).then(res => {
			if(!res.ok){
				this.$router.push({name:'cat-product'});
			}
			
		});

	}
};
</script>

<style>
</style>