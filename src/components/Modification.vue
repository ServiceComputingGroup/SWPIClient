<template>
<body>
	<div class = "head" >
		<h2>Modify</h2>
	</div>
	<div id="login">
		<p id="title">Modify Information</p>
        <form action="">
            <div class="input">
                <p style="padding-left: 10px;">Username : <input v-model="username" disabled="disabled" type="text" name="user" id="_user"></p><label v-remind="username"></label>
                <p>Password : <input v-model="password" v-verify="password" type="password" name="password" id="_id"></p><label v-remind="password"></label>
                <p style="padding-left: 20px;">Phone : <input v-model="phone" v-verify="phone" type="text" name="phone" id="_phone"></p><label v-remind="phone"></label>
                <p style="padding-left: 25px;">Email : <input v-model="email" v-verify="email" type="text" name="email" id="_email"></p><label v-remind="email"></label><br>
                <input v-on:click="cancel" type="button" value="Cancel" id="_reset">
                <input v-on:click="submit" type="button" value="Submit">
            </div>
        </form>
	</div>
</body>
</template>

<script>
	
	import { JUDGESTATE_QUERY } from '../js/graphql.js';
	import { MODIFYUSER_MUTATION } from '../js/graphql.js';
	import { QUERYUSER_QUERY } from '../js/graphql.js';
	export default {
		data() {
			return {
				username:"",
				password:"",
				phone:"",
				email:""
			};
		},
		created: function () { 
			//console.log("调用钩子"); 
			this.getEventData();
		},
		verify: {
			phone:["required","mobile"],
			email:["required","email"],
			password: [
				"required",
				{
					minLength:6,
					message: "密码不得小于6位"
				}]
		},
		methods:{
			submit: function () {
						if(this.$verify.check())
						{
							this.$apollo.mutate({
								 mutation: MODIFYUSER_MUTATION,
								 variables: {
										username: this.$data.username,
										phone: this.$data.phone,
										email: this.$data.email,
										password: this.$data.password,
								 }
							 })
							 .then(response => {

									if(response.data.modifyuser)
									{
										alert("修改信息成功");
										this.$router.go(0);
										this.$router.push({
												path: '/', 
												name: 'SWPI',
												params: { 
														username: this.username
												},
										});
									}
									else
									{
										alert("修改信息失败");
									}
							 })
							 .catch(error => {
									console.log(error);
							 });
						}
					},
			cancel: function () {
				this.$router.push({
						path: '/', 
						name: 'SWPI',
						params: { 
								username: this.username
						},
				})
			},
			getEventData:function() {
				let routerParams = this.$route.params.username;
				//console.log("routerParams"+routerParams); 
				this.username = routerParams;
				if(window.localStorage.getItem('token') && window.localStorage.getItem('token') != ""){
					this.username = window.localStorage.getItem('name');
					this.$apollo.query({
						query: JUDGESTATE_QUERY,
						variables: {
								token: window.localStorage.getItem('token')
						}
					})
					.then(response => {
						if(response.data.judgestate == "Token Invalid.")
						{
							alert("离开页面已经超过时间,重新登录获取更多权限");
							this.$router.push({
									path: '/login', 
									name: 'login',
							})
						}
						else
						{
							this.username = window.localStorage.getItem('name');
							this.$apollo.query({
								query: QUERYUSER_QUERY,
								variables: {
										username: this.username
								}
							})
							.then(res => {
								var str = res.data.queryuser;
								//console.log(str);
								var strs = str.split(",");
								this.password = strs[0];
								this.phone = strs[1];
								this.email = strs[2];
							})
							.catch(error => {
								console.log(error);
							})
						}
					})
					.catch(error => {
							console.log(error);
					});
				}else{
					alert("未登录,请先登录");
					this.$router.push({
							path: '/login', 
							name: 'login',
					})
				}
			},
		}
		
	}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
h2{
    margin-top: 10%;
    margin-bottom: 20px;
}
body{
    text-align: center;
	color: #FFFFFF;
	background-color: #1C1E22;
}
#main{
    margin: 0 auto;
    width: 300px;
    height: 300px;
    border: 5px solid #3A3F44;
    border-radius: 10px;
    background-color:#383D42;
}
.head{
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 38px;
    line-height: 1.42857143;
    color:#FFE300;
}
#title{
    margin-top: 10px;
    margin-bottom: 20px;
}
#_user{
    margin-right: 15px;
}
form span{
    margin-bottom: 20px;
    opacity: 0;
    font-size: 10px;
}
#_reset{
    margin-top: 10px;
    margin-left: 160px;
}
div>input {
    width: 60px;
    height:35px;
    background-color: #757D82;
    outline:none;
    border-radius: 15%;
    color:  #FFFFFF;
}
#login{
    margin: 0 auto;
    width: 300px;
    height: 300px;
    border: 5px solid #3A3F44;
    border-radius: 10px;
    background-color:#383D42;
}
span{
    color: red;
}
p input {
    opacity: 0.8;
}
.input{
    color: #B5B5B6;
}
.input>p{
	padding-bottom: 10px;
}
</style>
