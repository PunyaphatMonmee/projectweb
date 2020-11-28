<template>
  <form action="">
    <div class="row-6">
      <img
        src="../image/logowin.png"
        class="mx-auto"
        width="390"
        height="250"
        alt=""
      />
    </div>
    <div class="container-fluid">
      <div class="row-6">
        <h2>Login</h2>
        <input
          type="email"
          v-model="email"
          class="textbox"
          placeholder="Username"
          required
        />
      </div>
      <div class="row-6">
        <input
          type="password"
          class="textbox"
          v-model="password"
          placeholder="Password"
          required
        />
      </div>
      <div class="row-6 mt-4">
        <button
          @click="login"
          class="btn-submit"
          type="submit"
          style="vertical-align: middle"
        >
          <span>Submit</span>
        </button>
        <button class="btn-submit" type="submit" style="vertical-align: middle">
          <span><a href="adminsignup" class="linelink">Signup</a></span>
        </button>
      </div>
      <div class="mt-2">
        <button @click="loginWithProvider" class="logo-google">
          <img
            src="https://www.pngkit.com/png/full/178-1783296_g-transparent-circle-google-logo.png"
            alt=""
            width="80px"
            height="80px"
          />
        </button>
      </div>
      <div class="row-6 mt-2">
        <!-- <a href="#" class="forgot">Forgot your password?</a> -->
        <a href="forgotpassword" class="forgot">Forgot your password?</a>
      </div>
    </div>
  </form>
</template>

<script>
import swal from "sweetalert";
import firebase from "firebase";
export default {
  name: "adminlogin",
  data: function () {
    return { email: "", password: "" };
  },
  methods: {
    login(e) {
      var lonin = 1;
      var logout = 0;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            swal("Welcome", "You clicked the button!", "success")
            .then(() => {
          setTimeout(function() {
          }, 1800);
            localStorage.setItem("adminstatuslogin", lonin);
            localStorage.setItem("adminstatuslogout", logout);
            window.location.href = "/adminedit";
        });
            // swal("Good job!", "You clicked the button!", "success");
            // window.location.href = "/adminedit";
            // this.$router.replace("/adminedit");
          },
          (err) => {
            // alert(err.message+"กรุณาใส่Email")
            // alert("กรุณาใส่EmailเเละPasswordใหม่");
            swal("NO Authorization! Please Check User and Password", "You clicked the button!", "error")
            .then(() => {
          setTimeout(function() {
          }, 1800);
            window.location.href = "/adminlogin";
        });
            // window.location.href = "/adminlogin";
          }
        );
      e.preventDefault();
    },
    loginWithProvider(e) {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(
          (user) => {
            this.$router.replace("/adminedit");
          },
          (err) => {
            // alert(err.message);
          }
        );
    },
  },
};
</script>
<style scope>
h2 {
  font-family: "Times New Roman", Times, serif;
  color: white;
}
.linelink {
  color: #ffffff;
}
.linelink:hover {
  text-decoration: none;
  color: #ffffff;
}
.box {
  width: 300px;
}
body {
  /* background-image: url("https://cdn.hipwallpaper.com/i/73/6/WOlIqp.jpg"); */
  background-image: url("https://www.wallpaperflare.com/static/166/139/793/low-poly-red-white-area-wallpaper.jpg");
}
.textbox {
  background: rgba(255, 255, 255, 0.2);
}
input[type="email"] {
  font-family: "Times New Roman", Times, serif;
  width: 20%;
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

input[type="password"] {
  font-family: "Times New Roman", Times, serif;
  width: 20%;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
}

input[type="password"]:focus {
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
  width: 110px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
.btn-submit span {
  font-family: "Times New Roman", Times, serif;
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
.forgot {
  color: #ffffff;
}
.forgot:hover {
  text-decoration: none;
  color: #ffffff;
}
.logo-google {
  border-radius: 60%;
}
.btn-submit1 {
  display: inline-block;
  border-radius: 4px;
  background-color: rgb(255, 156, 64);
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  padding: 2px;
  width: 110px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
.btn-submit span {
  font-family: "Times New Roman", Times, serif;
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

