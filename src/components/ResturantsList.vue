<template>
	<div>
		<b-row>
			<b-col v-for="Restaurant in restaurantOpt" sm="6" md="4" lg="3" style="padding-top: 1%">
				<b-card no-body class="overflow-hidden" style="max-width: 540px;">
					<b-row no-gutters>
						<b-col md="5">
							<b-card-img
								src="https://pixabay.com/get/gd18fcfd0e56a0d09f406924c563920c24514d2cb02020990a21f82b3322cf863b1383296cfe0845b8277a6ee6c5997ed_640.jpg"
								alt="Image" class="rounded-0"></b-card-img>
						</b-col>
						<b-col md="6">
							<b-card-body title="Restaurant options (1-6)">
								<html>

								</html>
								<b-card-text>
									Restaurant Name
								</b-card-text>
								<b-button href="#" variant="primary">Order Now</b-button>
								<div class="w-100"></div>
							</b-card-body>
						</b-col>
					</b-row>
				</b-card>
			</b-col>
		</b-row>
	</div>

</template>
<script>

export default {
	name: 'RestaurantsList',
	data() {
		return {
			restaurantOpt: [{ message: "Alexis' African Restaurant" }, { message: "Chi Chi's Market and Restuarant" }, { message: "Kamsi's Caribbean Grill" }, { message: "Let's Go Vegan" }, { message: "Good For the Soul: Thai Restaurant" }, { message: "J'adore!: French Bakery" }]
		}
	}
};
</script>