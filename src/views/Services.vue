<template lang="html">
  <div class="services" id="services">
    <div class="layer h-100">
      <section class="container h-100 p-5 position-relative">
        <div class="d-flex">
          <transition name="remove" mode="out-in">
            <div class="mt-5" v-if="this.$route.path == '/services'">
              <ul class="m-0 pl-0 list-unstyled services-list">
                <li><router-link to="/services/service1" tag="a">Flight permits</router-link></li>
                <li><router-link to="/services/service2" tag="a">Ground handling</router-link></li>
                <li><router-link to="/services/service3" tag="a">FUEL SERVICES</router-link></li>
                <li><router-link to="/services/service4" tag="a">CHARTER SERVICES</router-link></li>
                <li><router-link to="/services/service5" tag="a">FLIGHT PLANNING</router-link></li>
                <li><router-link to="/services/service6" tag="a">CATERING</router-link></li>
                <li><router-link to="/services/service7" tag="a">HOTEL ACCOMMODATION</router-link></li>
              </ul>
            </div>
          </transition>
          <div class="service-details">
            <transition name="remove" mode="out-in">
                <router-view></router-view>
            </transition>
          </div>

          <div class="services-pagination" v-if="this.$route.path !== '/services'">
            <ul class="m-0 pl-0 list-unstyled d-flex justify-content-center">
                <router-link to="/services/service1" tag="li" exact> <a href=""></a> </router-link>
                <router-link to="/services/service2" tag="li" > <a href=""></a> </router-link>
                <router-link to="/services/service3" tag="li" > <a href=""></a> </router-link>
                <router-link to="/services/service4" tag="li" > <a href=""></a> </router-link>
                <router-link to="/services/service5" tag="li" > <a href=""></a> </router-link>
                <router-link to="/services/service6" tag="li" > <a href=""></a> </router-link>
                <router-link to="/services/service7" tag="li" > <a href=""></a> </router-link>
                
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

import Service from '@/components/Service.vue';

export default {
  name: 'services',
  components: {
    Service
  },
  methods:{
    updateBg: function(){
      //  var services_page = document.getElementsByClassName('services')[0];
      //  services_page.classList.add = 'service1';
        var currentPath = this.$route.path;
            document.getElementById("services").className =  currentPath.slice(-8) ;
      }
    },
    beforeUpdate: function () {
        this.updateBg();
    },
    mounted: function () {
        this.updateBg();
    }
  
}
</script>

<style lang="scss">
   
</style>
