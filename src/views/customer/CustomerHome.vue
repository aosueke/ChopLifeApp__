<template>
  <div>
    <Navbar></Navbar>
    <br>
    <b-container>
      <HighlightCarousel></HighlightCarousel>
      <ResturantsList></ResturantsList>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import ResturantsList from '../../components/ResturantsList.vue'
import HighlightCarousel from '../../components/HighlightCarousel.vue'
export default {
  name: 'CustomerHome',

  components: {
    Navbar,
    HighlightCarousel,
    ResturantsList
  },
};
</script>