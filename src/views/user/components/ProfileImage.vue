<template>
	<div class="card card-primary card-outline">
		<div class="card-body box-profile">
			<div class="text-center">
				<img
					class="profile-user-img img-fluid img-circle"
					:src="urlAvatar"
					alt="User profile picture"
					
				/>
			</div>

			<h3 class="profile-username text-center">{{currentUser.name}}</h3>
			<v-file-input
				@change="handleChangeAvatar"
				accept="image/png, image/jpeg, image/bmp"
				placeholder="Pick an avatar"
				label="Avatar"
				
				
			>
				
				
			
			</v-file-input>
			<!-- <input type="file" @change='handleUploadAvatar'> -->
			<v-btn @click="handleUploadAvatar" color="blue-grey d-block m-auto" class="ma-2 white--text">
				Upload
				<v-icon right dark>mdi-cloud-upload</v-icon>
			</v-btn>
		</div>
		<!-- /.card-body -->
	</div>
</template>

<script>
import {checkImageFile} from '../../../helpers'
import { TOKEN_NAME } from "../../../constants/config";
import { mapActions,mapGetters } from "vuex";
import {NOTI_SUCCESS_AVATAR,NOTI_WARN_AVATAR,NOTI_ERROR_AVATAR} from '../../../constants/config';

export default {
	name: "profile-image",
	data() {
		return {
			avatarDemo:null,
			avatarFile:null
		};
	},
	computed:{
		...mapGetters(['currentUser']),
		urlAvatar(){
			if(!this.avatarDemo){
				return this.currentUser.avatar
			}
			return this.avatarDemo;
		}
	},
	

	methods: {
		...mapActions(["getCurrentUser",'updateProfile']),
		handleChangeAvatar(e) {
			const fileAvatar = e;
			this.avatarFile = e;
			const reader = new FileReader();
			reader.addEventListener(
				"load",
				() => {
					// convert image file to base64 string
					this.avatarDemo = reader.result;
				},
				false
			);
			if (fileAvatar) {
				reader.readAsDataURL(fileAvatar);
			}
		},
		handleUploadAvatar() {
			//upload image
			if(this.avatarDemo){
				if(checkImageFile(this.avatarFile)){
					let data = {
					id:this.currentUser.id,
					avatar: this.avatarDemo
					};
					this.updateProfile(data).then(res => {
						if(res.ok){
							this.$notify(NOTI_SUCCESS_AVATAR);
						}
					});
				}	
				else{
					this.$notify(NOTI_ERROR_AVATAR);
				}
				
			}
			else{
				this.$notify(NOTI_WARN_AVATAR);
			}

			
		},
		
	}
};
</script>

<style>
.v-input__prepend-outer{
	display: none;
}
</style>