<template>
  <div class="container-fluid">
    <div class="col-12">
      <!-- <img
        class="mt-5 mb-5 col-sm-6 mx-auto"
        src="../image/logocensiri.png"
        alt=""
        width="300"
        height="150"
      /> -->
      <img
        src="../image/logowin.png"
        width="400"
        height="350"
        alt=""
      />
    </div>
    <div class="row">
      <div class="col-6" align="center">
        <a href="/usermain">
          <div class="polaroid">
            <img
              class="radius"
              src="../image/censiri1.jpg"
              alt="5 Terre"
              style="width: 70%"
            />
            <div class="container">
              <p>Censiri Town 1</p>
            </div>
          </div>
        </a>
      </div>
      <div class="col-6" align="center">
        <a href="/usermain">
          <div class="polaroid">
            <img
              class="radius"
              src="../image/censiri3.png"
              alt="5 Terre"
              style="width: 70%"
            />
            <div class="container1">
              <p>Censiri Town 2</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
body {
  background-image: url("https://www.wallpaperflare.com/static/166/139/793/low-poly-red-white-area-wallpaper.jpg");
}
button {
  border: 20px;
  width: 300px;
  height: 300px;
}
.f1,
.f2 {
  width: 550px;
  height: 350px;
}
.radius {
  border-radius: 10%;
}
p{
  color: white;
  font-size: 150%;
}
a:hover {
  text-decoration: none;
}
</style>