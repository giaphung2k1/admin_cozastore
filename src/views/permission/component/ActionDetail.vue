<template>
	<div class="content-wrapper">
		<page-header :title="title" />

		<!-- Main content -->
		<section class="content">
			<div class="container-fluid">
				<div class="row">
					<div class="col-12">
						<div class="card card-primary">
							<div class="card-header">
								<h3 class="card-title">{{title}}</h3>
							</div>
							<form>
								<div class="card-body">
									<div class="form-group">
										<label>Name</label>
										<input v-model="name" @input='handleClearError' type="text" class="form-control" placeholder="Name" />
										<p v-if="errors" class="text-danger">{{errors.name}}</p>
									</div>
								</div>
								<div class="card-footer">
									<button
										type="submit"
										@click.prevent="handleSubmit"
										class="btn btn-primary text-light"
									>Add</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import PageHeader from "../../../components/PageHeader";
import { NOTI_SUCCESS_PERMISSION } from "../../../constants/config";
import { mapActions } from "vuex";
export default {
	name: "action-detail",
	data() {
		return {
			name: null,
			id: this.$route.params.id,
			errors: {}
		};
	},
	watch: {},
	
	methods: {
		...mapActions(["addPermission"]),
		handleSubmit() {
			if (this.id) {
				//Edit
			} else {
				let errors = {};
				if (!this.name) {
					errors.name = "Không được để trống permission";
				}

				if (Object.keys(errors).length > 0) {
					this.errors = errors;
				} else {
					let data = {
						name: this.name
					};
					this.addPermission(data).then(res => {
						if (res.ok) {
							this.name = null;
							this.$notify(NOTI_SUCCESS_PERMISSION);
						}else{
							this.$router.push({name:'permission'});
						}
					});
				}
			}
		},
		handleClearError(){
			this.errors = {}
		}
	},
	components: {
		PageHeader
	},
	props: {
		title: { type: String, default: "Title" }
	}
};
</script>

<style>
</style>