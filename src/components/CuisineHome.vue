<template>
	<div>
		<b-row>
		<b-col v-for="item in items" sm="6" md="4" lg="3" style="padding-top: 1%">
		<!-- <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" /> -->
            <img style="width: 75; height: 75;" rounded="circle" :src="require(`../assets/logo.svg`)"><img>

        </b-col>
		</b-row>
	</div>

</template>
<script>
export default {
	name: 'CuisineBar',
	data() {
		return {
			items: [{ message: 'Asian' }, { message: 'African' }, { message: 'Caribbean' }, { message: 'American' }, { message: 'Vegan' }, { message: 'Mexican' }, { message: 'Seafood' }, { message: 'Fast Food'}, { message: 'Desserts' }, { message: 'Bakery' }, {message: 'Salad'}]
		}
	}
};

</script>