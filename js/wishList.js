// // function addToWishList(){
// //     document.getElementById("wishlistbutton").innerHTML="add to wishlist";
// // }
// let addItemTowishList = document.getElementById("wishListItemParentid")

// let amount = 0;                                                              //declaring amount as zero bydefault
// let amount_div = document.getElementById("amountId")                         //calling amount by amountId(parent class) in amount_div 

// let deliveryCharges = 0;
// let deliveryCharges_div = document.getElementById("DeliveryChargesId")

// let totalAmountofCart = 0;
// let grandTotal = document.getElementById("total_cart_amount")

// let quantity = 0;
// let increaseQuantity = document.getElementById("amountId ")


// function addToWishListcart() {
//     let wishlistItem = localStorage.getItem('WishList');
//     if (wishlistItem) {
//         const newwishlistItem = JSON.parse(wishlistItem)
//         console.log("output:", newwishlistItem)
//         newwishlistItem.map((item, index) => {

//             // amount += item.price * item.quantity                      //we multiply price and quantity in amount  //concatination - adding amount of the added item in cart 
//             // deliveryCharges += item.deliveryCharges                               //concatination - adding deliverycharge of the added item in cart 
//             // totalAmountofCart = amount + deliveryCharges                              //- adding amount and deliverycharge  

//             // let newId = item.price + index                             //print on console item price + index

//             addItemTocart.innerHTML += `
//             <div class="card p-4 border-0">
//                                 <div class="row">
//                                     <div
//                                         class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
//                                         <img src="${item.Image} " style="width: 250px;">
//                                     </div>
//                                     <div class="col-md-7 col-11 mx-auto px-4 mt-2 text-start">
//                                         <div class="row">
//                                             <div class="col-6 card-title">
//                                             <h5 class="mb-4 fw-bold">${item.brandName}</h5>
//                                             <p class="mb-2"> ${item.description} </p>
//                                             <p class="mb-3 "> ${item.size} </p>
//                                             <p class="mb-2 fw-bold"> ₹ ${item.price} </p>
//                                             <p class="mb-2 text-success"> delivery charges: ₹ ${item.deliveryCharges} </p>
//                                             </div>
//                                             <div class="col-6">
//                                                 <div class="col-12 d-flex justify-content-evenly price_money">
//                                                     <button class="btn btn-info" href="/pages/wishList.html"><i
//                                                             class="bi bi-trash"></i>Remove From Wishlist
//                                                     </button>
//                                                     <button class="btn btn-info" href="/pages/cart.html"><i
//                                                             class="bi bi-cart"></i>Add To Cart</button>
//                                                 </div>
//                                             </div>

//                                         </div>
//                                     </div>
//                                 </div>
//                             </div> 
//                            `
//         })
//     }
//     amount_div.innerHTML = amount;                                                 //calling amount_div and printing the total calculated amount
//     deliveryCharges_div.innerHTML = deliveryCharges;                                 //calling deliverycharges_div and printing the total deliverycharges
//     grandTotal.innerHTML = totalAmountofCart;                                     //calling  grandtotal and printing the totalamountofcart 


// }
// addToWishListcart()
