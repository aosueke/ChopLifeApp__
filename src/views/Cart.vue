<template>
<b-container fluid>
 <b-row>
		<b-col  align-self="center">
            <!-- sm="9" md="3" lg="6" style="padding-top: 4%; padding-bottom: 2%" -->
        <b-card>
            <div class="row">
                <div class="col-md-8 cart">
                    <div class="title">
                        <div class="row">
                            <div class="col"><h4><b>Cart</b></h4></div>
                            <div class="col align-self-center text-right text-muted"># items</div>
                        </div>
                    </div>    
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="../assets/scott-eckersley-bXP4ijL9BrY-unsplash.jpg"></div>
                            <!-- <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" /> https://i.imgur.com/1GrakTl.jpg-->
                            <div class="col"> 
                                <div class="row text-muted">Meal</div>
                                <div class="row">Meat Pie - Beef</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">&dollar; 1.50 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="../assets/michele-blackwell-rAyCBQTH7ws-unsplash.jpg"></div>
                            <div class="col">
                                <div class="row text-muted">Meal</div>
                                <div class="row">Ramen with Shrimp, Soft-boiled egg, and snow peas</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">&dollar; 12.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="../assets/jacob-thomas-6jHpcBPw7i8-unsplash.jpg"></div>
                            <div class="col">
                                <div class="row text-muted">Meal</div>
                                <div class="row">Black Forest Cake - 1 slice</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">&dollar; 7.50 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div class="back-to-shop"><a href="#">&leftarrow;</a><span class="text-muted">Back to shop</span></div>
                </div>
                <div class="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr>
                    <div class="row">
                        <div class="col" style="padding-left:0;">ITEMS 3</div>
                        <div class="col text-right">&dollar; 21.00</div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select><option class="text-muted">Standard-Delivery- &dollar;5.75</option></select>
                        
                        <p>GIVE CODE</p>
                        <input id="code" placeholder="Enter your code">
                    </form>
                    <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                        <div class="col">TOTAL PRICE</div>
                        <div class="col text-right">&dollar; 26.75</div>
                    </div>
                    <button class="btn">CHECKOUT</button>
                </div>
            </div>
            
        </b-card>
        </b-col>
 </b-row>
 </b-container>
        </template>