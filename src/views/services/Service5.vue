<template lang="html">
  <div>
    <Service 
      title="Flight planning" 
      serviceContent="We have a team of certified professionals that use advanced flight planning systems to provide consistent and precise flight plans that work in agreement with Air Traffic Control requirements around the world. Our dispatchers tailor the flight plans according to your needs by combining different flight planning systems that give the finest flight plans for our clients.">
    </Service>
    <p>At Grace Jet International Service we provide custom-made flight plans based on several considerations including flight destinations, aircraft performance, weather conditions. Ensuring fuel efficiency and time accuracy for flights, while putting safety and security first.</p>
    <p>our flight planning services include:</p>
    <ul class="list-unstyled extra-list">
      <li> Flight Crew Briefings</li>
      <li> ATC Filings</li>
      <li> Test Plans</li>
      <li> Route Analysis</li>
      <li> Route Analysis</li>
      <li> Flight Tracking</li>
    </ul>
  </div>
</template>

<script>

import Service from '@/components/Service.vue';

export default {
  name: 'service5',
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
  position: relative;
  padding-left: 20px;
  &:after{
    content: '';
    position:absolute;
    left: 0;
    top: 40%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #7DD900; 
  }
}
</style>
