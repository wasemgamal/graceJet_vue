<template>
  <div id="app">
    <div class="h-100"  @mouseover=" showImage = 'block' " @mousemove="onMouseMove" @mouseleave=" showImage = 'none' ">
      <img id="mouse-follower"   src="@/assets/img/follower.png"  :style="{ left: page.left + 'px', top: page.top + 'px' , display : showImage}">
      <AppHeader/>
      <transition name="page" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
   </div>
</template>

<script type="text/javascript">
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
  data() {
    return {
      showImage: 'none',
      page: {
        	left: 0,
        top: 0,
      }
    };
  },
  methods: {
    onMouseMove(e) {
      this.page.left = e.pageX - 9;
      this.page.top = e.pageY - 9;
      const doc_height = document.body.clientHeight;
      const doc_width = document.body.clientWidth;
      if (this.page.left > (doc_width - 30) || this.page.top > (doc_height - 30)) {
        this.showImage = 'none';
      } else {
        this.showImage = 'block';
      }
    },
    mouseBubble() {
      const follower = document.getElementById('mouse-follower');
      follower.className = 'link-hover';
    },
    mouseBubbleStop() {
      const follower = document.getElementById('mouse-follower');
      follower.classList.remove('link-hover');
    },

  },

  updated() {
    const links = document.querySelectorAll('a , li');
    let i = 0;
    for (i; i < links.length; i++) {
      const a = links[i];
      a.addEventListener('mouseover', this.mouseBubble);
      a.addEventListener('mouseout', this.mouseBubbleStop);
    }
  },


};
</script>
