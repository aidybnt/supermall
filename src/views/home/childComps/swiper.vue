<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(item, index) in banners" :key="index" class="swiper-slide">
        <a href="#">
          <img :src="item.image" :alt="item.title">
        </a>
      </div>
    </div>
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import getSwiper from 'swiper/bundle';

const options = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2700,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    // hide: true,
  }
};

export default {
  name: 'swiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    },
  },
  mounted() {
    const homeSwiper = new Swiper('.swiper-container', options);
  },
  methods: {}
}
</script>

<style scoped>
.swiper-container {
  min-width: 100%;
  margin-top: 44px;
}

.swiper-container a {
  display: block;
  width: 100%;
}

.swiper-slide {
  min-width: 100%;
  min-height: 100%;
}

.swiper-slide img {
  width: 100%;
}


</style>