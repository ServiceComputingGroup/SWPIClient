<template>
<body>
    <div class = "head" >
        <h2>Register</h2>
    </div>
    <div id="main">
        <p id="title">User Register</p>
        <form action="">
            <div class="input">
                <p style="padding-left: 10px;">Username : <input v-model="username" v-verify="username" type="text" name="user" id="_user"></p><label v-remind="username"></label>
                <p>Password : <input v-model="password" v-verify="password" type="password" name="password" id="_id"></p><label v-remind="password"></label>
                <p style="padding-left: 20px;">Phone : <input v-model="phone" v-verify="phone" type="text" name="phone" id="_phone"></p><label v-remind="phone"></label>
                <p style="padding-left: 25px;">Email : <input v-model="email" v-verify="email" type="text" name="email" id="_email"></p><label v-remind="email"></label><br>
                <input v-on:click="reset" type="button" value="Reset" id="_reset">
                <input v-on:click="submit" type="button" value="Submit">
            </div>
        </form>
    </div>
</body>
</template>

<script>
	import Vue from "vue";
    import verify from "vue-verify-plugin";
    Vue.use(verify,{
        blur:true
    });
	export default {
		data() {
			return {
				username:"",
				phone: "",
				email: "",
				password:""
			};
		},
		verify: {
				username:[
				"required",
				{
					minLength:4,
					message: "用户名不得小于4位"
				},
				{
					maxLength:10,
					message: "用户名不得大于10位"
				}
			],
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
							//访问后端看用户名是否注册
							//如果注册了则提醒已注册
							//没有就跳转
							//传参username到Login
							 //eventBus.$emit('fromRegister',this.$data.username);
							 
							this.$router.push({
									path: '/login', 
									name: 'login',
									params: { 
											username: this.username
									},
							})
						}
					},
			reset: function () {
				this.$data.username = "";
				this.$data.phone = "";
				this.$data.email = "";
				this.$data.password = "";
			}
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
    height: 200px;
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
