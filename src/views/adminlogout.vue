<template></template>

<script>
import firebase from "firebase";
export default {
    beforeCreate(){
    // localStorage.clear();
    firebase
      .auth()
      .signOut()
      .then(() => {
          swal("LOGOUT!", "You clicked the button!", "success");
        this.$router.replace("/");
      });
  },
  mounted() {},
};
</script>

<style></style>