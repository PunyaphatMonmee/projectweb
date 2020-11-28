<template>
  <div class="wrapper text-left">
    <Menu />
    <div class="content-wrapper">
      <div class="card-body">
        <div class="row mt-3 ml-3 mr-3 my-auto">
          <div class="col box">
            <div class="card bg-white mt-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-7" style="text-align: right">
                    <input type="file" id="files" name="files[]" multiple />
                  </div>
                  <div class="col-2" style="text-align: left">
                    <button
                      class="btn btn-primary d-inline"
                      @click="updateimg(datas[0].id)"
                    >
                      updateimage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/menu.vue";
import firebase from "firebase";
import swal from "sweetalert";
export default {
  data() {
    return {
      serial: "",
      datas: [],
      datass: [],
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

  components: {
    Menu,
  },
  mounted() {
    const axios = require("axios");
    var data = new FormData();
    data.append("id", localStorage.getItem("id"));
    axios
      .post("http://localhost:80/selectidhome.php", data)
      .then((response) => {
        response.data.forEach((element) => {
          this.datas.push(element);
        });
      });
    $(function () {
      $("#example1").DataTable({
        responsive: true,
        autoWidth: false,
      });
    });
  },
  methods: {
    async updateimg(idhome) {
      var data = new FormData();
      data.append("id", idhome);
      const axios = require("axios").default;
      var storageRef = firebase.storage().ref("img");
      // Get the file from DOM
      var file = document.getElementById("files").files[0];
      var file1 = document.getElementById("files").files[1];
      var file2 = document.getElementById("files").files[2];
      console.log(file.name);
      console.log(file1.name);
      console.log(file2.name);
      // console.log(file2.name);
      //dynamically s1et reference to the file name
      var thisRef = storageRef.child(file.name);
      //put request upload file to firebase storage
      await thisRef.put(file).then((snapshot) => {
        // swal("Good job!", "You clicked the button!", "success");
        console.log("Uploaded a blob or file!");
      });
      thisRef = storageRef.child(file1.name);
      //put request upload file to firebase storage
      await thisRef.put(file1).then((snapshot) => {
        // swal("Good job!", "You clicked the button!", "success");
        console.log("Uploaded a blob or file!");
      });
      thisRef = storageRef.child(file2.name);
      //put request upload file to firebase storage
      await thisRef.put(file2).then((snapshot) => {
        // swal("Good job!", "You clicked the button!", "success");
        console.log("Uploaded a blob or file!");
      });
      const storage = firebase.storage();
      // let linkimg = "";
      // Get metadata properties
      let linkimg;
      let self = this;
      await storage
        .ref("img")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          // console.log(typeof url);
          // console.log(url);
          self.linkimg = url;
          self.datass.push(url);

          storage
            .ref("img")
            .child(file1.name)
            .getDownloadURL()
            .then((url) => {
              // console.log(typeof url);
              // console.log(url);
              self.linkimg = url;
              self.datass.push(url);

              storage
                .ref("img")
                .child(file2.name)
                .getDownloadURL()
                .then((url) => {
                  // console.log(typeof url);
                  // console.log(url);
                  self.linkimg = url;
                  self.datass.push(url);
                  data.append("Pic1", self.datass[0]);
                  data.append("Pic2", self.datass[1]);
                  data.append("Pic3", self.datass[2]);
                  axios
                    .post("http://localhost:80/updateimg.php", data)
                    .then((response) => {
                      console.log(response.data);
                    });
                  swal(
                    "อัพเดทข้อมูลครบแล้ว",
                    "You clicked the button!",
                    "success"
                  ).then(() => {
                    setTimeout(function () {
                      window.location.href = "/adminedit";
                    }, 200);
                  });
                });
            });
        });
    },
  },
};
</script>

<style>
.form-control,
.custom-select {
  width: 70%;
}
.box {
  border: 10px solid orange;
  border-radius: 15px;
}
</style>