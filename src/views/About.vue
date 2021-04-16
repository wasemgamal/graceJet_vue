<template>
  <div class="about">
    <div class="bullets d-flex flex-column justify-content-between align-items-center">
        <a data-menuanchor="about1" class="active" @click="$refs.fullpage.api.moveTo(1)"><a href="#about1"></a></a>
        <a data-menuanchor="about2" @click="$refs.fullpage.api.moveTo(2)"><a href="#about2"></a></a>
        <a data-menuanchor="about3" @click="$refs.fullpage.api.moveTo(3)"><a href="#about3"></a></a>
    </div>
    
     <full-page ref="fullpage" :options="options" id="fullpage">
        <div class="about1 section">
          <img src="../assets/img/airplane.png" alt="">
          
          <div>
            <h2>Who we are</h2>
            <p>Established in 2014, We are introduced to meet the direct needs of the aviation industry. We have a team that is very trained and stays updated with all the new changes in the industry. Our only goal is to meet and exceed your requests and needs as customer satisfaction is a huge requirement for us and it’s what spreads our accomplishments in the industry. By keeping this firmly in mind we venture into a passionate, yet serious adventure to achieve world class professionalism in terms of World-wide aviation services. Our experience in the industry includes, route planning and analysis, aircraft scheduling and strategy, fleet planning, forecasting, and virtually all commercial facets of the airline industry. </p>
            <br>
            <p>Let’s meet up, tell us your needs and we can come up with solutions and services beyond your wildest dreams.</p>
          </div>
        </div>
        <div class="about2 section">
          <img src="../assets/img/birds.png" alt="">
          <div>
            <h2>Vision</h2>
            <p>Our vision is to be the number one aviation services provider in the region and the market.s</p>
          </div>
        </div>
        <div class="about3 section ">
          
          <img src="../assets/img/wing.png" alt="">
          <div>
            <h2>MISSION</h2>
            <p>Our mission is to provide the highest quality of services with a very competitive rate.</p>
          </div>
        </div>
    </full-page>
  </div>
</template>




<script type="text/javascript">



  export default {
    name: 'about',
    data() {
    return {
      titles: [
        '',
        '',
        ''
      ],
      options: {
        menu: '#menu',
        anchors: ['about1', 'about2', 'about3']
      },
    }
  }
  };
</script>



