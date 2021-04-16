<template lang="html">
  <div>
    <Service
      title="Ground handling"
      serviceContent="Ground handling excellence is crucial. We organize handling services in the most assorted locations anywhere around the world. Wherever you go in the world, we can offer reliable on-demand ground handling with speed, efficiency and accuracy. Our topographical spread is unequaled; we are devoted to delivering value to our clients. ">
    </Service>
    <ul class="list-unstyled extra-list">
      <li><span></span>  Passenger handling</li>
      <li><span></span>  Customs and immigration</li>
      <li><span></span>  Ramp handling</li>
      <li><span></span>  Cargo and baggage services</li>
      <li><span></span>  Catering</li>
      <li><span></span>  Crew visa arrangements</li>
      <li><span></span>  Security arrangements</li>
      <li><span></span>  FPL filing</li>
      <li><span></span>  Provision of transport for crew and passengers</li>
      <li><span></span>  Hotel accommodation for crew and passengers</li>
      <li><span></span>  Meet&assist</li>
    </ul>
  </div>
  
</template>

<script>

import Service from '@/components/Service.vue';

export default {
  name: 'service2',
  components: {
    Service
  },
};
</script>

<style lang="scss" scoped>
  li{
    position:relative;
    padding-left: 20px;
    span{
      position:absolute;
      width:8px;
      height: 8px;
      border-radius: 50%;
      background-color:#0083D9;
      top:35%;
      left:0;
    }
  }
</style>
