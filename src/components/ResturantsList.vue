<template>
	<div>
		<b-row>
			<b-col v-for="item in items"  sm="6" md="4" lg="3">
				{{ item.message }}
			</b-col>
		</b-row>
	</div>
	
</template>
<script>

export default {
    name: 'ResturantsList',
    data() {
	  return {
	    items: [{ message: 'food1' }, { message: 'food2' }, { message: 'food3' }, { message: 'food4' }, { message: 'food5' }, { message: 'food6' }]
	  }
	}
};
</script>