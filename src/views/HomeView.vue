<template>
  <div class="home">
    <TopNav />
    <SwiperTop />
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/Home/TopNav.vue';
import SwiperTop from '@/components/Home/SwiperTop.vue';

export default {
  name: 'HomeView',
  components: {
    TopNav,
    SwiperTop
  }
}
</script>
