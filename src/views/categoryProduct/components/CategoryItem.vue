<template>
	<tr>
		<td>
			<input type="checkbox" />
		</td>
		<td>{{ index + 1 }}</td>
		<td class="tbody-thumb">
			<img :src="item.thumbUrl" alt />
		</td>
		<td>{{ item.name }}</td>
		<td>{{ item.creator }}</td>
		<td>{{ item.created_at }}</td>
		<td>
			<span class="badge badge-success">{{ formatStatus(item.status) }}</span>
		</td>
		<td>
			<button
				v-if="isTrash"
				@click='handleRestoreCat'
				:data-id="item.id"
				:status="item.status"
				class="btn btn-success btn-sm rounded-0 text-white"
				type="button"
				data-toggle="tooltip"
				data-placement="top"
				title="Undo"
			>
				<i class="fas fa-undo"></i>
			</button>
			<router-link
				v-else
				:to="{ name: 'edit-cat-product', params: { id: item.id } }"
				class="btn btn-success btn-sm rounded-0 text-white"
				type="button"
				data-toggle="tooltip"
				data-placement="top"
				title="Edit"
			>
				<i class="fa fa-edit"></i>
			</router-link>
			<button
				@click="handleDeleteCat"
				:data-id="item.id"
				:status="item.status"
				class="btn btn-danger btn-sm rounded-0 text-white"
				type="button"
				data-toggle="tooltip"
				data-placement="top"
				title="Delete"
			>
				<i class="fa fa-trash"></i>
			</button>
		</td>
	</tr>
</template>

<script>
import { mapActions } from "vuex";
export default {
	name: "category-item",
	data() {
		return {
			status: this.$route.query.status
		};
	},

	watch: {
		$route(to) {
			this.status = to.query.status;
		}
	},

	computed: {
		isTrash() {
			if (this.status == "trash") {
				return true;
			}
			return false;
		}
	},

	methods: {
		formatStatus(status) {
			return status == "publish" ? "Hoạt động" : "Chờ xét duyệt";
		},
		...mapActions(["goToTrash", "destroy",'restore']),
		handleDeleteCat(e) {
			if (this.isTrash) {
				if (confirm("Bạn có chắc chắn muốn xóa vĩnh viễn?")) {
					let id = e.currentTarget.getAttribute("data-id");
					this.destroy(id);
				}
			} else {
				if (confirm("Bạn có chắc chắn muốn xóa?")) {
					let id = e.currentTarget.getAttribute("data-id");
					let status = e.currentTarget.getAttribute("status");
					this.goToTrash({ id, status });
				}
			}
		},
		handleRestoreCat(e){
			let id = e.currentTarget.getAttribute("data-id");
			let status = e.currentTarget.getAttribute("status");
			this.restore({ id, status });
		}
	},
	props: {
		index: Number,
		item: Object
	}
};
</script>

<style>
</style>