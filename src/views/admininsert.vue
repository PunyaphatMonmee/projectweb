<template>
  <div class="wrapper text-left">
    <Menu />
    <div class="content-wrapper">
      <div class="card-body">
        <div class="row mt-3 ml-3 mr-3 my-auto">
          <div class="col">
            <div class="card bg-white">
              <div class="card-body">
                <!-- <form action="#"> -->
                <div class="row">
                  <div class="col-6">
                    <div class="row">
                      <div class="col-6">
                        <input type="file" id="files" name="files[]" multiple @click="chooseimg(101010)"/>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-5 mt-3">
                        <p>สถานะ</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col x">
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="statusvar"
                            name="customRadioInline1"
                            class="custom-control-input"
                            value="ว่าง"
                          />
                          <label class="custom-control-label" for="statusvar"
                            >ว่าง</label
                          >
                        </div>
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="statusmaivar"
                            name="customRadioInline1"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="statusmaivar"
                            >ไม่ว่าง</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-5 mt-3">
                        <p>จำนวนชั้น</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col x">
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="class1"
                            name="class1"
                            class="custom-control-input"
                            value="1"
                            @click="onefloot()"
                          />
                          <label class="custom-control-label" for="class1"
                            >1</label
                          >
                        </div>
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="class2"
                            name="class1"
                            class="custom-control-input"
                            value="2"
                            @click="twofloot()"
                          />
                          <label class="custom-control-label" for="class2"
                            >2</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-5 mt-3">
                        <p>จำนวนห้องนอน</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col x">
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="Bedroom1"
                            name="customRadioInline7"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="Bedroom1"
                            >1</label
                          >
                        </div>
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="Bedroom2"
                            name="customRadioInline7"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="Bedroom2"
                            >2</label
                          >
                        </div>
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="Bedroom3"
                            name="customRadioInline7"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="Bedroom3"
                            >3</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-5 mt-3">
                        <p>จำนวนห้องน้ำ</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col x">
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="toilet1"
                            name="customRadioInline8"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="toilet1"
                            >1</label
                          >
                        </div>
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="toilet2"
                            name="customRadioInline8"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="toilet2"
                            >2</label
                          >
                        </div>
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="toilet3"
                            name="customRadioInline8"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="toilet3"
                            >3</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-5 mt-3">
                        <p>จำนวนที่จอดรถ</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col x">
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="car1"
                            name="customRadioInline9"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="car1"
                            >1</label
                          >
                        </div>
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="car2"
                            name="customRadioInline9"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="car2"
                            >2</label
                          >
                        </div>
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="car3"
                            name="customRadioInline9"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="car3"
                            >3</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-5 mt-3">
                        <p>ขนาดที่ดิน</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col x">
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="land1"
                            name="customRadioInline10"
                            class="custom-control-input"
                            @click="flootone"
                          />
                          <label class="custom-control-label" for="land1"
                            >23 ตร.วา</label
                          >
                        </div>

                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="land2"
                            name="customRadioInline10"
                            class="custom-control-input"
                            @click="floottwo"
                          />
                          <label class="custom-control-label" for="land2"
                            >24 ตร.วา</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-5 mt-3">
                        <p>ราคา/เดือน</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col x">
                        <select
                          class="custom-select"
                          name="price"
                          id="pricehome"
                        >
                          <option value="ราคา" disabled selected>ราคา</option>
                          <option value="7500">7500</option>
                          <option value="8000">8000</option>
                          <option value="8500">8500</option>
                          <option value="9000">9000</option>
                          <option value="10000">10000</option>
                          <option value="11000">11000</option>
                          <option value="12000">12000</option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-5 mt-3">
                        <p>เครื่องใช้ภายในบ้าน</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col x">
                        <textarea
                          class="form-control"
                          rows="3"
                          name="equipment"
                          id="equipmenthome"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-5">
                    <div class="row">
                      <div class="col-3 mt-5">
                        <p>บ้านเลขที่</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col x">
                        <input
                          type="text"
                          name="numberhome"
                          id="numberhome"
                          class="form-control"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-3 mt-3">
                        <p>เบอร์โทร</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col x">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          class="form-control"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-3 mt-3">
                        <p>LineID</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col x">
                        <input
                          type="text"
                          class="form-control"
                          name="line"
                          id="line"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-3 mt-3">
                        <p>Email</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          aria-describedby="emailHelp"
                          style="width: 70%"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-2 mt-4">
                        <p>สัญญา</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col x">
                        <select
                          class="custom-select"
                          name="contract"
                          id="contracthome"
                        >
                          <!-- <option selected>Choose...</option> -->
                          <option value="กี่ปี" disabled selected>กี่ปี</option>
                          <option value="1ปี">1ปี</option>
                          <option value="2ปี">2ปี</option>
                          <option value="3ปี">3ปี</option>
                          <option value="4ปี">4ปี</option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-3 mt-4">
                        <p>ข้อแนะนำ</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col x">
                        <textarea
                          class="form-control"
                          rows="3"
                          name="Advice"
                          id="Advice"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="card-body">
                    <center>
                      <button class="btn btn-primary d-inline" @click="addhome">
                        summit
                      </button>
                      <button
                        @click="resetdata(5)"
                        class="btn btn-primary d-inline ml-5"
                      >
                        reset
                      </button>
                    </center>
                  </div>
                </div>
                <!-- </form> -->
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
    $(function () {
      $("#example1").DataTable({
        responsive: true,
        autoWidth: false,
      });
    });
  },
  methods: {
    chooseimg(x){
      var dataimg = new FormData();
      
    },
    onefloot(){
      if(document.getElementById("class1").checked == true){
        document.getElementById("land1").checked = true;
      }
      
    },
    flootone(){
      if(document.getElementById("land1").checked == true){
        document.getElementById("class1").checked = true;
      }
      
    },
    twofloot(){
      if(document.getElementById("class2").checked == true){
        document.getElementById("land2").checked = true;
      }

    },floottwo(){
      if(document.getElementById("land2").checked == true){
        document.getElementById("class2").checked = true;
      }
      
    },
    resetdata(a) {
      const axios = require("axios").default;
      var data = new FormData();
      console.log(a);
      //
      document.getElementById("class1").checked = false;
      document.getElementById("class2").checked = false;
      document.getElementById("Bedroom1").checked = false;
      document.getElementById("Bedroom2").checked = false;
      document.getElementById("Bedroom3").checked = false;
      document.getElementById("toilet1").checked = false;
      document.getElementById("toilet2").checked = false;
      document.getElementById("toilet3").checked = false;
      document.getElementById("car1").checked = false;
      document.getElementById("car2").checked = false;
      document.getElementById("car3").checked = false;
      document.getElementById("land1").checked = false;
      document.getElementById("land2").checked = false;
      document.getElementById("pricehome").value = "ราคา";
      document.getElementById("equipmenthome").value = "";
      document.getElementById("numberhome").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("line").value = "";
      document.getElementById("email").value = "";
      document.getElementById("contracthome").value = "กี่ปี";
      document.getElementById("Advice").value = "";
    },
    async addhome() {
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
          self.datas.push(url);

          storage
            .ref("img")
            .child(file1.name)
            .getDownloadURL()
            .then((url) => {
              // console.log(typeof url);
              // console.log(url);
              self.linkimg = url;
              self.datas.push(url);

              storage
                .ref("img")
                .child(file2.name)
                .getDownloadURL()
                .then((url) => {
                  // console.log(typeof url);
                  // console.log(url);
                  self.linkimg = url;
                  self.datas.push(url);
                });
            });
        });
      const axios = require("axios").default;
      var data = new FormData();
      if (

        document.getElementsByName("class1").checked == false ||
        //  document.getElementById("class2").checked == false ||
        document.getElementsByName("customRadioInline7").checked == false ||
        //  document.getElementById("Bedroom2").checked == false ||
        //  document.getElementById("Bedroom3").checked == false ||
        document.getElementsByName("customRadioInline8").checked == false ||
        //  document.getElementById("toilet2").checked == false ||
        //  document.getElementById("toilet3").checked == false ||
        document.getElementsByName("customRadioInline9").checked == false ||
        //  document.getElementById("car2").checked == false ||
        //  document.getElementById("car3").checked == false ||
        document.getElementsByName("customRadioInline10").checked == false ||
        //  document.getElementById("land2").checked == false ||
        document.getElementById("pricehome").value == "ราคา" ||
        document.getElementById("equipmenthome").value == "" ||
        document.getElementById("numberhome").value == "" ||
        document.getElementById("phone").value == "" ||
        document.getElementById("line").value == "" ||
        document.getElementById("email").value == "" ||
        document.getElementById("contracthome").value == "กี่ปี" ||
        document.getElementById("Advice").value == ""
      ) {
        swal("กรุณาใส่ข้อมูลให้ครบ", "You clicked the button!", "warning");
      } else {
        if (document.getElementById("class1").checked == true) {
          data.append("floor", 1);
        }
        if (document.getElementById("class2").checked == true) {
          data.append("floor", 2);
        }
        // if (document.getElementById("Bedroom1").checked == true) {
        //   data.append("Bedroom", 1);
        // }
        if (document.getElementById("Bedroom2").checked == true) {
          data.append("Bedroom", 2);
        }
        if (document.getElementById("Bedroom3").checked == true) {
          data.append("Bedroom", 3);
        }
        if (document.getElementById("toilet1").checked == true) {
          data.append("toilet", 1);
        }
        if (document.getElementById("toilet2").checked == true) {
          data.append("toilet", 2);
        }
        if (document.getElementById("toilet3").checked == true) {
          data.append("toilet", 3);
        }
        if (document.getElementById("car1").checked == true) {
          data.append("car", 1);
        }
        if (document.getElementById("car2").checked == true) {
          data.append("car", 2);
        }
        if (document.getElementById("car3").checked == true) {
          data.append("car", 3);
        }
        if (document.getElementById("land1").checked == true) {
          data.append("land", "23ตร.วา");
        }
        if (document.getElementById("land2").checked == true) {
          data.append("land", "24ตร.วา");
        }
        data.append("price", document.getElementById("pricehome").value);

        data.append(
          "equipment",
          document.querySelector("textarea[id=equipmenthome]").value
        );

        data.append(
          "numberhome",
          document.querySelector("input[name=numberhome]").value
        );

        data.append("phone", document.querySelector("input[name=phone]").value);

        data.append("line", document.querySelector("input[name=line]").value);

        data.append("email", document.querySelector("input[name=email]").value);

        data.append("contract", document.getElementById("contracthome").value);

        data.append(
          "Advice",
          document.querySelector("textarea[name=Advice]").value
        );

        data.append("Pic1", self.datas[0]);
        data.append("Pic2", self.datas[1]);
        data.append("Pic3", self.datas[2]);

        data.forEach((element) => {
          console.log(element);
        });
        axios
          .post("http://localhost:80/inserthome.php", data)
          .then((response) => {
            console.log(response);
          });
        swal("ใส่ข้อมูลครบแล้ว", "You clicked the button!", "success").then(
          () => {
            setTimeout(function () {
              window.location.href = "/adminedit";
            }, 200);
          }
        );
      }
    },
  },
};
</script>

<style>
.form-control,
.custom-select {
  width: 70%;
}
</style>