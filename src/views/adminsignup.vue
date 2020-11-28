<template>
  <div class="sign-up">
    <!-- <p>Let's create a new account !</p>
    <input type="text" v-model="email" placeholder="Email" /><br />
    <input type="password" v-model="password" placeholder="password" /><br />
    <button @click="signup">Sign up</button>
    <span
      >or gogback to <router-link to="/adminlogin"> login.</router-link>.</span
    > -->
    <div class="row">
      <div class="col mb-3">
        <h2>Let's create a new account !</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input
          type="email"
          v-model="email"
          class="textbox"
          placeholder="Username"
          required
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input
          type="password"
          v-model="password"
          class="textbox"
          placeholder="Password"
          required
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button
          @click="signup"
          class="btn-submit"
          type="submit"
          style="vertical-align: middle width:100%"
        >
          <span>Signup</span>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <span>or go back to<a href="/adminlogin"> login.</a></span>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "adminsignup",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  beforeCreate() {
    //  alert("no Logged in");
      firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      //  alert("no Logged in");
      window.location.href = "/adminLogin";
      // this.$router.replace("/adminLogin");
    } else {
      // alert("Logged in");
      
    }
  });
  },
    mounted() {
  $(function () {
  $("#example1").DataTable({
    responsive: true,
    autoWidth: false,
  });
});
},
  methods: {
    signup: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function (user) {
            alert("Your account has been created !");
          },
          function (err) {
            alert("Oops. " + err.message);
          }
        );
    },
  },
  
};


</script>
<style scope>
.sign-up {
  margin-top: 200px;
}
span {
  display: block;
  margin-top: 1px;
  font-size: 20px;
}
h2,a{
  font-family: "Times New Roman", Times, serif;
  color: white;
}
a:hover {
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
.logo-google{
  border-radius: 60%;
}
</style>