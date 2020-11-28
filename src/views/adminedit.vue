<template>
  <div class="wrapper text-left">
    <Menu />
    <div class="content-wrapper">
      <div class="card">
        <div class="card-body">
          <div id="example1_wrapper" class="dataTables_wrapper dt-bootstrap4 ">
            <div class="row">
              <div class="col-sm-12">
                <table
                  id="example1"
                  class="table table-bordered table-striped dataTable dtr-inline box"
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
                    <tr role="row" class="odd" v-for="x in datas">
                      <td tabindex="0" class="sorting_1" align="center">
                        <img
                          class="sizeimg"
                          :src="x.image1"
                          alt="Card image home"
                        />
                      </td>
                      <td>{{ x.numberhome }}</td>
                      <td>{{ x.class }}</td>
                      <td>{{ x.price }}</td>
                      <td>
                        <span  style="width: 50px" id="statuscolor" 
                          >{{x.status}}</span
                        >
                      </td>
                      <td>
                        <button class="btn btn-primary" @click="edit(x.id)">
                        เเก้ไข
                      </button>
                      </td>
                      <td class="text-left align-center">
                        <button @click="deletelist(x.id)" class="btn bg-danger"><i class="fas fa-trash"></i
                        ></button>
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
  data() {
    return {
      datas: [],
    };
  },
  components: {
    Menu,
  },
  beforeCreate() {
    
  },
  async mounted() {
    const axios = require("axios");
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
    await axios
      .get("http://localhost:80/selecthome.php")
      .then((response) => {
        response.data.forEach((element) => {
          this.datas.push(element);
          // console.log(element.status);
          
          if (element.status == 'ว่าง') {
              console.log(5555);
              // document.getElementById("statuscolor"). = "blue";
          } 
        });
      })
      .catch(function (error) {
        console.log(error);
      }
      );
      
      
    $(function () {
      $("#example1").DataTable({ 
        responsive: true,
        autoWidth: false,
      });
    });
    
  },
  methods: {
    edit(idhome) {
      localStorage.setItem("id", idhome);
      console.log(idhome);
      window.location.href = "/adminupdate";
    },
    deletelist(idhome) {
      const axios = require("axios").default;
      var data = new FormData();
      data.append("id",idhome);
      
      axios.post("http://localhost:80/deletehome.php", data).then((response) => {
        console.log(response);
      });
      // localStorage.setItem("id", idhome);
      console.log(idhome);
      swal(
                      "ลบข้อมูลเรียบร้อยเเล้ว",
                      "You clicked the button!",
                      "success"
                    ).then(() => {
                      setTimeout(function () {
                        window.location.href = "/adminedit";
                      }, 1800);
                      window.location.href = "/adminedit";
                    });
      
    }
    
  },
};
</script>

<style>
.box {
  border: 5px solid orange;
}
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