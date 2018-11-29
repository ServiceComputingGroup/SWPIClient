<template>
<body>
	<div class = "head" >
		<h2>Modify</h2>
	</div>
	<div id="login">
		<p id="title">Modify Information</p>
		<form action="" method="post" onsubmit="return check()">
			<div class="input">
				<p style="padding-left: 10px;">Phone : <input type="text" name="user" id="_user"></p><span id="_usererr">电话不符合格式</span>
				<p>Email : <input type="text" name="password" id="_id"></p><span id="_iderr">邮箱不符合格式</span><br>
				<input type="reset" value="Reset" id="_reset">
				<input type="submit" value="Submit">
			</div>
		</form>
	</div>
</body>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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
</style>
