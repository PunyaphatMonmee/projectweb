<template>
  <div class="wrapper text-left">
    <Menu />
    <div class="content-wrapper">
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
      <div class="card">
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
                      <th>ลบ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr role="row" class="odd">
                      <td tabindex="0" class="sorting_1" align="center">
                        <img
                          class="sizeimg"
                          src="https://img.home.co.th/images/img_v/img_Directory/20180119-113844001-Big.jpg"
                          alt="Card image cap"
                        />
                      </td>
                      <td>204/139</td>
                      <td>1</td>
                      <td>8000</td>
                      <td>
                        <span class="badge badge-success" style="width: 50px"
                          >ว่าง</span
                        >
                      </td>
                      <td>
                        <a href="adminupdate" class="btn btn-primary">เเก้ไข</a>
                      </td>
                      <td class="text-left align-center">
                        <a href="#" class="btn bg-danger"
                          ><i class="fas fa-trash"></i
                        ></a>
                      </td>
                    </tr>
                    <tr role="row" class="odd">
                      <td tabindex="0" class="sorting_1" align="center">
                        <img
                          class="sizeimg"
                          src="https://img.home.co.th/images/img_v/img_Directory/20180119-113844001-Big.jpg"
                          alt="Card image cap"
                        />
                      </td>
                      <td>204/239</td>
                      <td>1</td>
                      <td>7500</td>
                      <td>
                        <span class="badge badge-danger" style="width: 50px"
                          >เช่าเเล้ว</span
                        >
                      </td>
                      <td>
                        <a href="adminupdate" class="btn btn-primary">เเก้ไข</a>
                      </td>
                      <td class="text-left align-center">
                        <a href="#" class="btn bg-danger"
                          ><i class="fas fa-trash"></i
                        ></a>
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
  </div>
</template>

<script>
import Menu from "@/components/menu.vue";
import firebase from "firebase";
export default {
  components: {
    Menu,
  },
  beforeCreate() {
    
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        // alert(555555);
        window.location.href = "/adminLogin";
        // this.$router.replace("/Login");
        //alert("You don't have a permission")
      } else {
        // alert(666666);
        // this.$router.replace("/adminedit");
        //  window.location.href = "/adminedit";
        console.log(user.refreshToken);
      }
    });
    $(function () {
      $("#example1").DataTable({ 
        responsive: true,
        autoWidth: false,
      });
    });
  },
};
</script>

<style>
.f1 {
  margin-top: 50px;
}
.petch {
  background: red;
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