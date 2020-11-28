<template>
  <div class="wrapper text-left">
    <Menu />
    <div class="content-wrapper">
      <div class="card-body">
        <div class="row mt-3 ml-3 mr-3 my-auto">
          <div class="col">
            <div class="card bg-white">
              <div class="card-body">
                <!-- <form action=""> -->
                <div class="row">
                  <div class="col-6">
                    <div class="row">
                      <div class="col-6">
                        <input type="file" id="files" name="files[]" multiple />
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
                            name="customRadioInline0"
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
                            name="customRadioInline0"
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
                            name="customRadioInline5"
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
                            name="customRadioInline5"
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
                            name="customRadioInline1"
                            class="custom-control-input"
                            value="1"
                            @click="onefloot"
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
                            name="customRadioInline1"
                            class="custom-control-input"
                            @click="twofloot"
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
                            id="bedroom1"
                            name="customRadioInline2"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="bedroom1"
                            >1</label
                          >
                        </div>
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="bedroom2"
                            name="customRadioInline2"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="bedroom2"
                            >2</label
                          >
                        </div>
                        <div
                          class="custom-control custom-radio custom-control-inline"
                        >
                          <input
                            type="radio"
                            id="bedroom3"
                            name="customRadioInline2"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label" for="bedroom3"
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
                            name="customRadioInline3"
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
                            name="customRadioInline3"
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
                            name="customRadioInline3"
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
                            name="customRadioInline4"
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
                            name="customRadioInline4"
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
                            name="customRadioInline4"
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
                        <p>ราคา/เดือน</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col x">
                        <select class="custom-select" id="price" required>
                          <option value="" disabled selected>ราคา</option>
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
                          required
                          id="equipment"
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
                          class="form-control"
                          aria-describedby="emailHelp"
                          required
                          id="numberhome"
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
                          class="form-control"
                          aria-describedby="emailHelp"
                          required
                          id="phone"
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
                          aria-describedby="emailHelp"
                          required
                          id="line"
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
                          aria-describedby="emailHelp"
                          required
                          id="email"
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
                        <select class="custom-select" required id="contract">
                          <!-- <option selected>Choose...</option> -->
                          <option value="" disabled selected>กี่ปี</option>
                          <option value="1">1ปี</option>
                          <option value="2">2ปี</option>
                          <option value="3">3ปี</option>
                          <option value="4">ปี</option>
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
                          required
                          id="Advice"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="card-body">
                    <center>
                      <button
                        class="btn btn-primary d-inline"
                        @click="update(datas[0].id)"
                      >
                        update
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
  data() {
    return {
      datas: [],
      datass: [],
    };
  },
  mounted() {
    const axios = require("axios");
    var data = new FormData();
    data.append("id", localStorage.getItem("id"));
    axios
      .post("http://localhost:80/selectidhome.php", data)
      .then((response) => {
        console.log(response);
        response.data.forEach((element) => {
          this.datas.push(element);
          if (element.status == "ว่าง") {
            document.getElementById("statusvar").checked = true;
          }
          if (element.status == "ไม่ว่าง") {
            document.getElementById("statusmaivar").checked = true;
          }
          if (element.class == 1) {
            document.getElementById("class1").checked = true;
          }
          if (element.class == 2) {
            document.getElementById("class2").checked = true;
          }
          if (element.Bedroom == 1) {
            document.getElementById("bedroom1").checked = true;
          }
          if (element.Bedroom == 2) {
            document.getElementById("bedroom2").checked = true;
          }
          if (element.Bedroom == 3) {
            document.getElementById("bedroom3").checked = true;
          }
          if (element.toilet == 1) {
            document.getElementById("toilet1").checked = true;
          }
          if (element.toilet == 2) {
            document.getElementById("toilet2").checked = true;
          }
          if (element.toilet == 3) {
            document.getElementById("toilet3").checked = true;
          }
          if (element.car == 1) {
            document.getElementById("car1").checked = true;
          }
          if (element.car == 2) {
            document.getElementById("car2").checked = true;
          }
          if (element.car == 3) {
            document.getElementById("car3").checked = true;
          }
          if (element.land == "23ตร.วา") {
            document.getElementById("land1").checked = true;
          }
          if (element.land == "24ตร.วา") {
            document.getElementById("land2").checked = true;
          }
          if (element.price == 7500) {
            document.getElementById("price").value = "7500";
          }
          if (element.price == 8000) {
            document.getElementById("price").value = "8000";
          }
          if (element.price == 8500) {
            document.getElementById("price").value = "8500";
          }
          if (element.price == 9000) {
            document.getElementById("price").value = "9000";
          }
          if (element.price == 10000) {
            document.getElementById("price").value = "10000";
          }
          if (element.price == 11000) {
            document.getElementById("price").value = "11000";
          }
          if (element.price == 12000) {
            document.getElementById("price").value = "12000";
          }
          if (element.contract == 1) {
            document.getElementById("contract").value = "1";
          }
          if (element.contract == 2) {
            document.getElementById("contract").value = "2";
          }
          if (element.contract == 3) {
            document.getElementById("contract").value = "3";
          }
          document.getElementById("equipment").value = element.equipment;
          document.getElementById("numberhome").value = element.numberhome;
          document.getElementById("phone").value = element.phone;
          document.getElementById("line").value = element.line;
          document.getElementById("email").value = element.email;
          document.getElementById("Advice").value = element.Advice;
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    $(function () {
      $("#example1").DataTable({
        responsive: true,
        autoWidth: false,
      });
    });

    // this.datas.forEach((element) =>{
    //     console.log(element);
    // });
  },
  methods: {
    onefloot() {
      if (document.getElementById("class1").checked == true) {
        document.getElementById("land1").checked = true;
      }
    },
    flootone() {
      if (document.getElementById("land1").checked == true) {
        document.getElementById("class1").checked = true;
      }
    },
    twofloot() {
      if (document.getElementById("class2").checked == true) {
        document.getElementById("land2").checked = true;
      }
    },
    floottwo() {
      if (document.getElementById("land2").checked == true) {
        document.getElementById("class2").checked = true;
      }
    },
    async update(idhome) {
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
                    
      var data = new FormData();
      data.append("id", idhome);
       if (document.getElementById("statusvar").checked == true) {
        data.append("status", "ว่าง");
      }
      if (document.getElementById("statusmaivar").checked == true) {
        data.append("status", "ไม่ว่าง");
      }
      if (document.getElementById("class1").checked == true) {
        data.append("floor", 1);
      }
      if (document.getElementById("class2").checked == true) {
        data.append("floor", 2);
      }
      if (document.getElementById("bedroom1").checked == true) {
        data.append("Bedroom", 1);
      }
      if (document.getElementById("bedroom2").checked == true) {
        data.append("Bedroom", 2);
      }
      if (document.getElementById("bedroom3").checked == true) {
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
      data.append("price", document.getElementById("price").value);
      data.append(
        "equipment",
        document.querySelector("textarea[id=equipment]").value
      );
      data.append(
        "numberhome",
        document.querySelector("input[id=numberhome]").value
      );
      data.append("phone", document.querySelector("input[id=phone]").value);
      data.append("line", document.querySelector("input[id=line]").value);
      data.append("email", document.querySelector("input[id=email]").value);
      data.append("contract", document.getElementById("contract").value);
      data.append("Advice",document.querySelector("textarea[id=Advice]").value);
      data.append("Pic1", self.datass[0]);
      data.append("Pic2", self.datass[1]);
      data.append("Pic3", self.datass[2]);
        // console.log(1111111111111111111111111111111111111111);
        // console.log(self.datass[0]);
        // console.log(self.datass[1]);
        // console.log(self.datass[2]);
        // console.log(1111111111111111111111111111111111111111);
        // console.log(data);
      data.forEach((element) => {
        console.log(element);
      });
      axios
        .post("http://localhost:80/updatehome.php", data)
        .then((response) => {
          console.log(response.data);
        });
      swal("อัพเดทข้อมูลครบแล้ว", "You clicked the button!", "success").then(
        () => {
          setTimeout(function () {
            window.location.href = "/adminedit";
          }, 200);
        }
      );
                });
            });
        });
      
      // window.location.href = "/adminedit";
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

