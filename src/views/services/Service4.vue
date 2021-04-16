<template lang="html">
    <div>
      <Service 
        title="Charter services" 
        serviceContent="Through our 10 years of service in the industry and client relations, Grace Jet is on the hike on meeting customer demands when it comes to Charter Services. With efficient relationships of the markets we operate in. along with the relationships we have developed with a large base of operating partners over the years that has empowered us to provide high level and cost efficient air charter services to our clients. Our highly skilled service teams are well positioned to provide high levels of charter services tailored to our clients’ requirements.">
      </Service>
      <br>
      <p>We can provide the following types of charter services to any destination of your requirement:</p>
      <ul class="list-unstyled extra-list">
          <li><span class="fa fa-gift"></span>  VIP and Royal  </li>
          <li><span class="fa fa-briefcase"></span>  Business and corporate </li>
          <li><span class="fa fa-heartbeat"></span>  Medical</li>
      </ul>
    </div>
</template>

<script>

import Service from '@/components/Service.vue';

export default {
  name: 'service4',
  components: {
    Service
  },
};
</script>

<style lang="scss" scoped>
p{
  color: #fff;
}
li{
  line-height: 40px !important;
  span{
    color: #f26c4f;
    width: 20px;
  }
}
</style>
