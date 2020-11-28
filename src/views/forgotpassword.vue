<template>
  <div class="container">
    <div class="row mt-5">
      <div class="row mt-5 layout">
        <div class="col-6 mt-5 mx-auto ">
              <h1 class="poom">Forgot your password</h1>
            <div class="card-body">
              <h5 class="poom">Email address</h5>
              <input
                type="email"
                v-model="email"
                class="textbox" style="width:70%"
                placeholder="Username"
                required
              />
            </div>
            <div class="row mb-3">
              <div class="col">
                <button
                  class="btn-submit"
                  type="submit"
                  style="vertical-align: middle"
                >
                  <span>Reset password</span>
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col mb-5">
                <span><a href="adminLogin">Signin</a></span>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scope>
.poom{
  color: #ffffff;
}
a{
  font-family: "Times New Roman", Times, serif;
  color: white;
}
a:hover {
  text-decoration: none;
  color: #ffffff;
}
span {
  display: block;
  margin-top: 1px;
  font-size: 20px;
}
body {
  /* background-image: url("https://cdn.hipwallpaper.com/i/73/6/WOlIqp.jpg"); */
  background-image: url("https://www.wallpaperflare.com/static/166/139/793/low-poly-red-white-area-wallpaper.jpg");
}
.box {
  width: 300px;
}
.layout {
  margin: 100px;
  padding: 10px;
  height: 100px;
  width: 1200px;
}

.font {
  font-family: Georgia, "Times New Roman", Times, serif;
  color: white;
}

.textbox {
  background: rgba(255, 255, 255, 0.2);
}
input[type="email"] {
  font-family: "Times New Roman", Times, serif;
  width: 100%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
}

input[type="email"]:focus {
  border-color: dodgerBlue;
  box-shadow: 0 0 8px 0 dodgerBlue;
}
.btn-submit {
  display: inline-block;
  border-radius: 4px;
  background-color: rgb(255, 156, 64);
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  padding: 2px;
  width: 210px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
.btn-submit span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.btn-submit span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.btn-submit:hover span {
  padding-right: 25px;
}

.btn-submit:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
