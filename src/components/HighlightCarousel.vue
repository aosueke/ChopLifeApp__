
<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Chi Chi's Market and Restuarant"
       
        img-src="https://picsum.photos/id/351/3994/2443"
     
   
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide 
      caption="Let's Go Vegan!"
      img-src="https://picsum.photos/id/488/1772/1181">
      </b-carousel-slide>

      <b-carousel-slide 
      caption= "Alexis' African Restaurant"
      img-src="https://picsum.photos/id/395/4080/2720">
      </b-carousel-slide>

      <b-carousel-slide 
      caption= "Kamsi's Caribbean Grill"
      img-src="https://picsum.photos/id/49/1280/792">
      </b-carousel-slide>

      <b-carousel-slide 
      caption= "Good For the Soul: Thai Restaurant"
      img-src="https://picsum.photos/id/686/4462/2975">
      </b-carousel-slide>

      <b-carousel-slide 
      caption= "J'adore!: French Bakery"
      img-src="https://picsum.photos/id/431/5398/3599">
      </b-carousel-slide>

    </b-carousel>

   
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
