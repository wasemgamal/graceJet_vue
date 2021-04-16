<template>
  <!-- start main-page -->
    <div class="main-page" id="main-page">
      <video autoplay muted loop id="myVideo">
        <source src="../assets/video/bg.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
      <div class="layer"></div>
      <div class="d-flex justify-content-center align-items-center flex-column" style="height:100vh;">
        <div class="hello">
          <div class="text-center container">
            <h6 class="mb-0">welcome to</h6>
            <h1 class="my-2">grace jet</h1>
          </div>
        </div>
        <div class="discover-icon text-center white">
          <router-link to="/about" tag="a"><img src="../assets/img/discover.png" alt=""></router-link>
          <p>DISCOVER</p>
        </div>
      </div>

    </div>
    <!-- end main-page -->
</template>

<script>
export default {
  name: 'welcome',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
