<template>
  <div class="wrapper text-left">
    <!-- Navbar -->
    <Menu />
    <!-- <Petch /> -->
    <div class="content-wrapper bg">
      <div class="row">
        <div class="col-11 mx-auto mt-3">
          <div class="card color">
            <div class="card-body">
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="3"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src="../image/home1-1.jpg"
                      alt="Third slide"
                      width="350px"
                      height="400px"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="../image/home1-2.jpg"
                      alt="Second slide"
                      width="350px"
                      height="400px"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="../image/home1-3.jpg"
                      alt="First slide"
                      width="350px"
                      height="400px"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="../image/home1-4.jpg"
                      alt="Four slide"
                      width="350px"
                      height="400px"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col ml-5">
                <div
                  class="card mt-3 mx-auto bg-white box"
                  style="width: 30rem"
                >
                  <div class="card-body box1">
                    <div class="row">
                      <div class="col-6 mx-auto">
                        <h3 class="card-title">รายละเอียด (Description)</h3>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <p>ห้องนอน</p>
                        <input
                          type="text"
                          class="form-control"
                          aria-describedby="emailHelp"
                          required
                          id="bedroom"
                          readonly
                        />
                      </div>
                      <div class="col-6">
                        <p>ห้องน้ำ</p>
                        <input
                          type="text"
                          class="form-control"
                          aria-describedby="emailHelp"
                          id="toilet"
                          readonly
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6 mt-2">
                        <p>ที่จอดรถ</p>
                        <input
                          type="text"
                          class="form-control"
                          aria-describedby="emailHelp"
                          id="car"
                          readonly
                        />
                      </div>
                      <div class="col-6 mt-2">
                        <p>ขนาดที่ดิน</p>
                        <input
                          type="text"
                          class="form-control"
                          aria-describedby="emailHelp"
                          readonly
                          id="land"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6 mt-2">
                        <p>ราคาต่อดือน</p>
                        <input
                          type="text"
                          class="form-control"
                          aria-describedby="emailHelp"
                          readonly
                          id="price"
                        />
                      </div>
                      <div class="col-6 mt-2">
                        <p>สัญญา</p>
                        <input
                          type="text"
                          class="form-control"
                          aria-describedby="emailHelp"
                          readonly
                          id="contract"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col mt-2">
                        <p>เครื่องใช้ภายในบ้าน</p>
                        <textarea
                          class="form-control"
                          rows="3"
                          readonly
                          id="equipment"
                        ></textarea>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col mt-2">
                        <p>ข้อแนะนำ</p>
                        <textarea
                          class="form-control"
                          rows="3"
                          readonly
                          id="Advice"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col mr-5">
                <div
                  class="card mt-3 mx-auto bg-white box"
                  style="width: 25rem"
                >
                  <div class="card-body box1">
                    <div class="row">
                      <div class="col-6 mx-auto">
                        <h3 class="card-title">ติดต่อผู้ประกาศให้เช่า</h3>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col mt-2" id="tel">
                        <p>เบอร์โทร</p>
                        <input
                          type="text"
                          class="form-control"
                          style="width: 70%"
                          aria-describedby="emailHelp"
                          readonly
                          id="phone"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col mt-2">
                        <p>LineID</p>
                        <input
                          type="text"
                          class="form-control"
                          style="width: 70%"
                          aria-describedby="emailHelp"
                          readonly
                          id="line"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col mt-2">
                        <p>Email</p>
                        <input
                          type="text"
                          class="form-control"
                          style="width: 70%"
                          aria-describedby="emailHelp"
                          readonly
                          id="email"
                        />
                      </div>
                    </div>
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
export default {
  data() {
    return {
      // datas: [],
    };
  },
  mounted() {
    const axios = require("axios");
    var data = new FormData();
    data.append("id", localStorage.getItem("id"));
    axios
      .post("http://localhost:80/selectidhome.php", data)
      .then((response) => {
        // console.log(response);
        response.data.forEach((element) => {
          // this.datas.push(element);
          console.log(element);
          document.getElementById("bedroom").value = element.Bedroom + "ห้อง";
          document.getElementById("toilet").value = element.toilet + "ห้อง";
          document.getElementById("car").value = element.car + "ที่";
          document.getElementById("land").value = element.land;
          document.getElementById("price").value = element.price;
          document.getElementById("contract").value = element.contract + "ปี";
          document.getElementById("Advice").value = "ควรอ่าน: " + element.Advice;
          document.getElementById("equipment").value = element.equipment;
          document.getElementById("phone").value = element.phone;
          document.getElementById("line").value = element.line;
          document.getElementById("email").value = element.email;
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  components: {
    Menu,
  },
};
</script>

<style>
.f1 {
  margin-top: 50px;
}
.f2 {
  border-style: solid;
  width: 100px;
}
.card {
  width: 100%;
  /* border-radius: 50px; */
  /* background-image: url("https://cdn.hipwallpaper.com/i/73/6/WOlIqp.jpg"); */
}
.box {
  border-radius: 25px;
}
.box1 {
  /* background-color: rgb(177, 177, 177); */
  border-radius: 25px;
}
.color {
  background-color: rgb(196, 196, 196);
}
.bg {
  /* background-image: url("https://www.wallpaperflare.com/static/166/139/793/low-poly-red-white-area-wallpaper.jpg"); */
  /* background-color: rgb(177, 177, 177); */
}
.card-title {
  text-align: center;
}
input {
  width: 100%;
}
.sizephone {
  width: 30%;
}
.sizeline,
.sizeemail {
  width: 80%;
}
</style>