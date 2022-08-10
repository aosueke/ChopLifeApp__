<template>
<b-icon-cart4></b-icon-cart4>
<body>
    Choose your favorite foods!
    <div>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="5">
        <b-card-img src="https://pixabay.com/get/gd18fcfd0e56a0d09f406924c563920c24514d2cb02020990a21f82b3322cf863b1383296cfe0845b8277a6ee6c5997ed_640.jpg" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Meal of the Week!">
          <html>
          </html>
          <b-card-text>
            Strawberry Eclair
          </b-card-text>
        <b-button href="#" variant="primary">Order Now</b-button>
    <div class="w-100"></div>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
</body>
</template>
</template>

<br>


<template #heading>Popular</template>See the most popular food on order


<b-container class="bv-row">
  <b-row>
    <b-col><div>
  <b-card
    title="Card Title"
    img-src="https://pixabay.com/get/g90fd83414d40f4dfdff0a370ce585e16df00ea567ac9fe7379c38213eb9b9c14a000e3f3633666e70ad48976f3f696ba_640.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>With or without powdered sugar</b-card-text>
    <b-card-text>$6.95</b-card-text>

<!-- FIGURE OUT HOW TO POSITION THESE ICONS! HEART GOES ON THE TOP-RIGHT, PLUS-CIRCLE DOTTED GOES ON LOWER-RIGHT -->
<div class="position-relative">
    <b-button><b-icon icon="heart" aria-hidden="true"></b-icon></b-button>
    <b-button>
    <b-icon icon="plus-circle-dotted" aria-hidden="true"></b-icon>
    </b-button>  </b-card>
</div>
</b-col>
    <b-col><div>


<template>
	<div>
		<b-row>
			<b-col v-for="item in items" sm="6" md="4" lg="3" style="padding-top: 1%">
				<b-card no-body class="overflow-hidden" style="max-width: 540px;">
					<b-row no-gutters>
						<b-col md="5">
							<b-card-img
								src="https://pixabay.com/get/gd18fcfd0e56a0d09f406924c563920c24514d2cb02020990a21f82b3322cf863b1383296cfe0845b8277a6ee6c5997ed_640.jpg"
								alt="Image" class="rounded-0"></b-card-img>
						</b-col>
						<b-col md="6">
							<b-card-body title="Meal options">
								<html>

								</html>
								<b-card-text>
									Meal Name
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
	name: 'FoodList',
	data() {
		return {
			items: [{ message: 'food1' }, { message: 'food2' }, { message: 'food3' }, { message: 'food4' }, { message: 'food5' }, { message: 'food6' }]
		}
	}
};
</script>
