
// ---------------------Increasing count of cart ----------------------//

function onCount() {                                              // we called a function oncount()
    // console.log("====1");                                       
    let cart = JSON.parse(localStorage.getItem('cartList'));          //we take cartlist from local storage in cart variable   
    // console.log("====2");
    // console.log("......", cart.length)

    const count = document.getElementById("itemCount");              //now we take count name constant in which we pass id of empty cart heading
    // console.log("====3");
    // console.log("====re", count)

    const navbarCount = document.querySelectorAll(".navCount");           //we take navbarcount constant in which we pass id of cart count icon which is in navbar 
    // console.log("====4");                                             // we used queryselectorall so that our cart count function can check every class element where id passed
    console.log("navCount=print", navbarCount)

    if (cart) {                                                           // if cart means ki agr cartlst me item present hai so 
        console.log("====5");
        count.innerHTML = cart.length;                                    //count will run and cart length calculate karega
        console.log("====6");

        for (let i = 0; i < navbarCount.length; i++) {                    // this is for queryselectorall() jisme we ca use any type of condition or loop 
            // console.log("====7", navbarCount);                          //for loop chalega, condition check hogi , 
            navbarCount[i].innerHTML = cart.length;                          //navbarcount[i] me cart ki length count hokar ajaegi
        }
    }
    else {                                                                    //else jab cart empty rahegi tab
        count.innerHTML = 0;
        // document.getElementById("itemCount").innerHTML = "Your cart is empty";               //when cart is empty this will show empty cart msg
        navbarCount.innerHTML = 0;
        // document.getElementById("navCount").innerHTML = "";                         //when cart is empty this will show nothing at cart icon
        // navcartCount.innerHTML=0;
    }
}
onCount()


// ---------------------increasing and decreasing item quantity function ----------------------//

const decreaseNumber = (quantityBox, item_id) => {                                     //quantityBox , item_id is using as variable 
    console.log("======dec", quantityBox, item_id);
    let itemval = document.getElementById(quantityBox);
    console.log("======-------", itemval);
    // console.log("decreased result:", itemval)                                        //this will print on console the whole div 
    // console.log("decreased result:", itemval.value)                                 //this will print value
    if (itemval.value <= 1) {
        alert("Item cannot be Zero")
    }
    else {
        removeItemsOfCart(item_id, quantityBox)                             //we created function removeitemsofcart downside and call the function in decrease function
        itemval.innerHTML = itemval - 1;

    }
}

const increaseNumber = (quantityBox, item_id) => {
    console.log("======inc", quantityBox, item_id);
    let itemval = document.getElementById(quantityBox);
    console.log("======-------", itemval);
    // console.log("increased result:", itemval)
    // console.log("added item :"itemprice)
    if (itemval.value >= 10) {
        alert("you reached to max-limit")
    }
    else {
        updateItemsOfCart(item_id, quantityBox)                               //we created function updateitemsofcart downside and call the function in increase function
        itemval.innerHTML = itemval + 1;

    }
}

// ---------------------adding item to cart + calculating amount + updating item quantity and amount also get add ----------------------//

function reloadCartPageItem() {
    let addItemTocart = document.getElementById("cartItemParentid")
    addItemTocart.innerHTML = " ";
    let amount = 0;                                                              //declaring amount as zero bydefault
    let amount_div = document.getElementById("amountId")                         //calling amount by amountId(parent class) in amount_div 

    let deliveryCharges = 0;
    let deliveryCharges_div = document.getElementById("DeliveryChargesId")

    let totalAmountofCart = 0;
    let grandTotal = document.getElementById("total_cart_amount")

    let cartItem = localStorage.getItem('cartList');
    if (cartItem) {
        const newCartitem = JSON.parse(cartItem)
        console.log("output:", newCartitem)
        newCartitem.map((item, index) => {

            amount += item.price * item.quantity                      //we multiply price and quantity in amount  //concatination - adding amount of the added item in cart 
            deliveryCharges += item.deliveryCharges                               //concatination - adding deliverycharge of the added item in cart 
            totalAmountofCart = amount + deliveryCharges                              //- adding amount and deliverycharge  

            let newId = item.price + index                             //print on console item price + index

            addItemTocart.innerHTML += `<div class="card p-4 border-0">
        <div class="row">
            <div
                class="col-md-5 col-11 mx-auto justify-content-center align-items-center product_img">
                <img src=${item.Image} style="width: 250px;">
            </div>
                <div class="col-md-7 col-11 mx-auto px-4 mt-2 text-start">
                <div class="row">
                    <div class="col-6 col-md-6 card-title">
                        <h5 class="mb-4 fw-bold">${item.brandName}</h5>
                        <p class="mb-2"> ${item.description} </p>
                        <p class="mb-3 "> ${item.size} </p>
                        <p class="mb-2 fw-bold"> ₹ ${item.price} </p>
                        <p class="mb-2 text-success"> delivery charges: ₹ ${item.deliveryCharges} </p>
                    </div>
                    <div class="col-6">
                        <nav aria-label="Page navigation example ">
                            <ul class="pagination justify-content-end set_quantity">
                                <li class="page-item">
                                    <button class="page-link "onclick="decreaseNumber(${newId},${item.id} )"> <i class="bi bi-dash-lg"></i></button>
                                </li>
                                <li class="page-item "><input type="number" class="page-link" value= ${item.quantity}  id=${newId} style="width:60px;">
                                </li>
                                <li class="page-item">
                                <button class="page-link" onclick="increaseNumber( ${newId}, ${item.id} )"> <i class="bi bi-plus-lg"></i></button>
                                </li>                 
                            </ul>
                        </nav>
                    </div>
               
                    <div class="row">
                        <div class="price_money">
                        <button class="btn btn-info" href="html"><i
                        class="bi bi-heart"></i> Add To Wishlist
                </button>
                <button class="btn btn-info" href="removeItem.html" onclick="deleteItemfromCart(${item.id})" id="deleteitemId"><i
                        class="bi bi-trash"></i> 
                </button>
                    </div>
                </div>
            </div>
        </div>
        </div> `
        })
    }
    amount_div.innerHTML = amount;                                                 //calling amount_div and printing the total calculated amount
    deliveryCharges_div.innerHTML = deliveryCharges;                                 //calling deliverycharges_div and printing the total deliverycharges
    grandTotal.innerHTML = totalAmountofCart;                                     //calling  grandtotal and printing the totalamountofcart 


}

reloadCartPageItem()

// ----------------------------------------updating the quantity of cartitems by passing arguements-------------------------------------------------//

async function updateItemsOfCart(productId, productQuantity) {
    let cart = JSON.parse(localStorage.getItem('cartList'));
    // console.log("listofitem :", cart)

    for (let product of cart) {
        console.log("=====", product.id, " ", productId);
        if (product.id == productId) {

            product.quantity++;
            console.log("===1=1=1=1=", product);
        }

    }
    await localStorage.setItem("cartList", JSON.stringify(cart));
    let Newcart = JSON.parse(localStorage.getItem('cartList'));
    console.log("updated item and its quantity:", Newcart, " ", productQuantity)

    reloadCartPageItem()   //calling function  so that when we increase quantity updated item will be shown

}

// updateItemsOfCart( )   //we need to call this function insided increase number function before condition so that quantity of item increase equally on runtime + in local storage


async function removeItemsOfCart(productId, productQuantity) {
    let cart = JSON.parse(localStorage.getItem('cartList'));
    // console.log("listofitem :", cart)

    for (let product of cart) {
        console.log("=====", product.id, " ", productId);
        if (product.id == productId) {

            product.quantity--;
            console.log("===1=1=1=1=", product);
        }

    }
    await localStorage.setItem("cartList", JSON.stringify(cart));
    let Newcart = JSON.parse(localStorage.getItem('cartList'));
    console.log("updated item and its quantity:", Newcart, " ", productQuantity)

    reloadCartPageItem()   //calling function again so that when we decrease quantity updated item will be shown

}

// ----------------deleting single item from cart---------------------//

function deleteItemfromCart(productId) {

    let cart = JSON.parse(localStorage.getItem('cartList'));

    console.log("==tst", typeof (cart))
    let DEV = cart.filter(item => item.id != productId);
    // console.log("=======", DEV)
    localStorage.removeItem('cartList')

    localStorage.setItem("cartList", JSON.stringify(DEV));

    onCount()
    reloadCartPageItem()

}

// ----------------deleting all item from cart---------------------//

function deleteAllfromCart() {
    // let cart = document.getElementById('cartList') ;
    // console.log("==tst",typeof(cart))
    // console.log("----",cart)
    localStorage.removeItem('cartList')

    reloadCartPageItem()
    onCount()

}

