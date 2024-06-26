
const womensClothes = [
    {
        id: 1111,
        Image: " /images/womencollection1.webp ",
        brandName: "ANKUR",
        description: "Women ethenic wear-cotton kurta set",
        price: 299,
        size: "all",
        quantity: 1,
        deliveryCharges: 11
    },
    {
        id: 1112,
        Image: "/images/womencollection2.webp",
        brandName: "LILAS",
        description: "Women ethenic wear-cotton kurta set",
        price: 399,
        size: "all",
        quantity: 1,
        deliveryCharges: 0
    },
    {
        id: 1113,
        Image: "/images/womencollection3.webp",
        brandName: "SABERAS",
        description: "Women ethenic wear-cotton kurta set",
        price: 499,
        size: "all",
        quantity: 1,
        deliveryCharges: 13

    }
]


function addTocart(id) {
    let result = womensClothes.filter(item => item.id === id);
    // console.log(result)                                 
    // console.log(result[0])                                 

    let cartData = localStorage.getItem('cartList');    // cartList - local storage me data add karwane ke liye 
    if (cartData) {

        const newCart = JSON.parse(cartData)          //local storage me data ko as string ke form me lene ke liye
        let isAvailable = newCart.find(item => item.id === result[0].id);
        // console.log('new result',cartData  );
        // console.log('new result', isAvailable);    //result - undefined aaega
        if (!isAvailable) {
            result.quantity = 1;
            newCart.push(result[0]);
            console.log("cartItem:", newCart);
            localStorage.setItem('cartList', JSON.stringify(newCart));
            alert("Item added to cart");
        }
        else {
            alert("Item already added in the cart");
        }
    }
    else {
        result.quantity = 1;
        localStorage.setItem('cartList', JSON.stringify(result))
    }
    // // getCartCount();
}

let womensclothesParent = document.getElementById("womensectionParentId")
womensClothes.map((data, index, arr) => {
    console.log(womensclothesParent, "data1")
    womensclothesParent.innerHTML += `
        <div class="card women_collection " style="width: 18rem;">
            <img src= ${data.Image} style="height: 435px;">
            <div class="card-body">
                <h5 class="card-title">${data.brandName}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${data.description}</h6>
                <p class="card-text priceTags"> ₹ ${data.price}</p>
                <p class="card-text "> Delivery charges: ₹ ${data.deliveryCharges}</p>
                <div class="d-flex justify-content-evenly">
                <button class="btn btn-info"  type ="button" onclick='addTocart(${data.id})'><i class="bi bi-cart"></i>Add To Cart</button>
                <button class="btn btn-info" type ="button" onclick='' href="/pages/wishList.html"><i class="bi bi-heart"></i></button>
                 </div>
            </div>
        </div>`

});

console.log(womensclothesParent)
