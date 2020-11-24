<template>
  <div>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"
            ><i class="fas fa-bars"></i
          ></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block" v-if ="!islogin">
          <a href="userfirstpage" class="nav-link">Home</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block" v-else>
          <a href="adminedit" class="nav-link">Home</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block" v-if ="!islogin">
          <a href="usermain" class="nav-link">Rent Home</a>
        </li>
      </ul>
    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="usermain" class="brand-link">
        <img
          src="https://www.sukniwate.com/uploads/image/img_20160927051233_cover.png"
          alt="AdminLTE Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: 0.8"
        />
        <span class="brand-text font-weight-light">Censiri Town</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex" v-if="islogin">
          <div class="image">
            <!-- <img
              src="/src/image/0.jpg"
              class="img-circle elevation-4"
              alt="admin Image"
            /> -->
            <img
          src="../image/6030300644.jpg"
          alt="AdminLTE Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: 0.8"
        />
          </div>
          <div class="info" v-if="islogin">
            <a href="adminedit" class="d-block">Admin Censiri</a>
          </div>
        </div>
        <!-- <img id="Image1" src="/picnisit/6030300644.jpg" style="height:150px;width:125px;border-width:0px;"> -->

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
            <li class="nav-item has-treeview text-left">
              <a href=""  class="nav-link " style="color: orange">
                <i class="far fa-address-book nav-icon"></i>
                <p>
                  สถานะ
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="../usermainvar" class="nav-link active">
                    <i class="fas fa-door-open nav-icon"></i>
                    <p>ว่างให้เช่า</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="../usermainmaivar" class="nav-link active">
                    <i class="fas fa-door-closed nav-icon"></i>
                    <p>ไม่ว่างให้เช่า</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
            <li class="nav-item has-treeview text-left">
              <a href="#" class="nav-link" style="color: orange">
                <i class="fas fa-home nav-icon"></i>
                <p>
                  รูปแบบ
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="../userone" class="nav-link active">
                    <i class="fas fa-user nav-icon"></i>
                    <p>1ชั้น</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="../usertwo" class="nav-link active">
                    <!-- <i class="far fa-users nav-icon"></i> -->
                    <i class="fas fa-users nav-icon"></i>

                    <p>2ชั้น</p>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item text-left" v-if="islogin">
              <a href="../admininsert" class="nav-link" style="color: orange">
                <i class="fas fa-plus nav-icon"></i>
                <p>เพิ่ม</p>
              </a>
            </li>
            <li class="nav-item text-left" v-if="islogin">
              <a href="../adminlogout" class="nav-link" style="color: orange">
                <i class="fas fa-sign-out-alt nav-icon"></i>
                <p>Signout</p>
              </a>
            </li>
            
          </ul>
        </nav>
      </div>
    </aside>
  </div>
</template>

<script>
import firebase from 'firebase'
const axios = require("axios");
export default {
  data() {
    return {
      islogin:false,
      datas: []
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      // alert(user);
      if (!user) {
        // alert("No Logged /in");
       
      } else {
        // alert("Logged in");
        this.islogin = true;
      }
    });
    
  },
}
</script>

<style scope>
</style>