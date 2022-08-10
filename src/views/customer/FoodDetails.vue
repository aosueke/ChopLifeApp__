
<template>
<b-icon icon="chevron-left" aria-hidden="true"></b-icon> Food Details
<b-icon icon="three-dots" aria-hidden="true"></b-icon>
 
<div>
    
  <b-card v-for="item in items" sm="6" md="4" lg="3" 
    title="Abacha"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem padding-top: 1%;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
</template>

<script>

export default {
	name: 'FoodList',
	data() {
		return {
			items: [{ message: 'food1' }, { message: 'food2' }, { message: 'food3' }, { message: 'food4' }, { message: 'food5' }, { message: 'food6' }]
		}
	}
};
</script>