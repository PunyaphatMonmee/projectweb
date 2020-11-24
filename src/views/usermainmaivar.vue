<template>
  <!-- <div class="container-fluid"> -->
  <div class="wrapper text-left">
    <Menu />
    <div class="content-wrapper">
      <div class="card text-center">
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
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="../image/Screenshot_1.png"
                  alt="Third slide"
                  width="250px"
                  height="300px"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="../image/Screenshot_3.png"
                  alt="Second slide"
                  width="250px"
                  height="300px"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://img.home.co.th/images/img_v/img_Directory/20180119-113844001-Big.jpg"
                  alt="First slide"
                  width="250px"
                  height="300px"
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
        <!-- <div class="card-footer text-muted"></div> -->
      </div>
      <!-- <div class="row mt-3 ml-3 mr-3">
        <div class="col-3">
          <div class="card" style="width: 18rem">
            <img
              class="card-img-top"
              src="https://img.home.co.th/images/img_v/img_Directory/20180119-113844001-Big.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="row">
                <div class="col text-center">
                  <a href="../userrent" class="btn btn-primary">รายละเอียด</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card" style="width: 18rem">
            <img
              class="card-img-top"
              src="https://img.home.co.th/images/img_v/img_Directory/20180119-113844001-Big.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="row">
                <div class="col text-center">
                  <a href="../userrent" class="btn btn-primary">รายละเอียด</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card" style="width: 18rem">
            <img
              class="card-img-top"
              src="https://img.home.co.th/images/img_v/img_Directory/20180119-113844001-Big.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="row">
                <div class="col text-center">
                  <a href="../userrent" class="btn btn-primary">รายละเอียด</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card" style="width: 18rem">
            <img
              class="card-img-top"
              src="https://img.home.co.th/images/img_v/img_Directory/20180119-113844001-Big.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div class="row">
                <div class="col text-center">
                  <a href="../userrent" class="btn btn-primary">รายละเอียด</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="card-body">
        <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4">
          <div class="row">
            <div class="col-sm-12">
              <table
                id="example1"
                class="table table-bordered table-striped dataTable dtr-inline"
                role="grid"
                aria-describedby="example1_info"
              >
                <thead>
                  <tr>
                    <th>รูปบ้าน</th>
                    <th>บ้านเลขที่</th>
                    <th>ชั้น</th>
                    <th>ราคา</th>
                    <th>สถานะ</th>
                    <th>สนใจ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" class="odd" v-for="x in datas">
                    <td tabindex="0" class="sorting_1" align="center">
                      <img
                        class="sizeimg"
                        src="https://img.home.co.th/images/img_v/img_Directory/20180119-113844001-Big.jpg"
                        alt="Card image cap"
                      />
                    </td>
                    <td>{{ x.numberhome }}</td>
                    <td>{{ x.class }}</td>
                    <td>{{ x.price }}</td>
                    <td>
                      <!-- <span class="badge badge-success" style="width: 50px">{{x.status}}</span> -->
                      <span  style="width: 50px">{{x.status}}</span>
                    </td>
                    <td>
                      <button class="btn btn-primary" @click="detail(x.id)">
                        รายละเอียด
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/menu.vue";
export default {
  data() {
    return {
      datas: [],
    };
  },
  components: {
    Menu,
  },
  async mounted() {
    const axios = require("axios");
    // let self = this;
    
    //   var data = 'ว่าง';
    //   console.log(data);
    await axios
    
      .get("http://localhost:80/selectpage2.php")
      .then((response) => {
        response.data.forEach((element) => {
          // console.log(element.first_name);
          this.datas.push(element);
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    $(function () {
      $("#example1").DataTable({
        responsive: true,
        autoWidth: false,
      });
    });
  },
  methods: {
    detail(idhome) {
      localStorage.setItem("id", idhome);
      console.log(idhome);
      window.location.href = "/userrent";
    },
  },
};
</script>

<style>
.f1 {
  margin-top: 50px;
}
.btn {
  background-color: orange;
  border: orange;
}
.bgcrad {
  /* background-color: orange; */
  border: orange;
}
.sizeimg {
  width: 200px;
}
th {
  width: 100px;
}
</style>