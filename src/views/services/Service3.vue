<template lang="html">
  <div>
    <Service 
        title="Fuel services" 
        serviceContent="Absence of fuel can cause chaos and confusion; it’s what drives our engines. We run a worldwide aviation fuel services with an aim to offer you complete peace of mind.">
    </Service>
    <p>We pledge reliable, timely and efficient fuel supply. Benefiting from financial prudence of scale, we are able to offer very modest prices to our customers. Based on the fuel you purchase, it gives us the edge on negotiating in terms of pricing on behalf of our clients, and it allows us to quote competitive rates. In addition, we can also provide fuel in the most difficult locations on credit due to our long standing relationship with our suppliers.</p>
    <p>The team of aviation fuel services professionals is in hand 24/7 to provide up-to-date aviation fuel price quotations. They will also ensure your needs are met as quickly as possible.</p>
    <p>We accept world fuel and universal fuel card.</p>
  </div>
</template>

<script>

import Service from '@/components/Service.vue';

export default {
  name: 'service3',
  components: {
    Service
  },
};
</script>

<style lang="scss" scoped>
p{
  color: #fff;
}
</style>
