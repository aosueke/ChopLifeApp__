<template>
  <div>
    <Navbar></Navbar>
    <br>
    <b-container>
      <HighlightCarousel></HighlightCarousel>
      <CuisineBar></CuisineBar>
      <RestaurantsList></RestaurantsList>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
import RestaurantsList from '../../components/ResturantsList.vue'
import HighlightCarousel from '../../components/HighlightCarousel.vue'
import CuisineBar from '../../components/CuisineHome.vue'
export default {
  name: 'CustomerHome',

  components: {
    Navbar,
    HighlightCarousel,
    RestaurantsList,
    CuisineBar
},
};
</script>