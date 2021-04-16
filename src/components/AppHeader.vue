<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light" >
    <a class="navbar-brand" href="#" @click="closeNav()">
      <router-link to="/" exact><img src="@/assets/img/logo.png" alt=""></router-link>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup" @click="closeNav()">
      <div class="navbar-nav">
        <a class="nav-item nav-link"><router-link to="/about">about</router-link></a>
        <a class="nav-item nav-link"><router-link to="/services">services</router-link></a>
        <a class="nav-item nav-link"><router-link to="/contact">contacts</router-link></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    closeNav: function(){
      document.getElementById('navbarNavAltMarkup').classList.remove('show');
    }
  }
};
</script>
