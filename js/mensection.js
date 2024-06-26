
const mensClothes = [
    {
        id: 111,
        Image: " /images/mencollection4.webp ",
        brandName: "BLIVE",
        description: "Men Solid Round Neck Cotton Casuals",
        price: 299,
        size: "all",
        quantity: 1,
        deliveryCharges: 20
    },
    {
        id: 112,
        Image: "/images/mencollection2.webp",
        brandName: "ADAMS",
        description: "Men Solid Round Neck Cotton T-Shirt ",
        price: 399,
        size: "all",
        quantity: 1,
        deliveryCharges: 10

    },
    {
        id: 113,
        Image: "/images/mencollection3.webp",
        brandName: "POLO",
        description: "Men Solid Round Neck Polo T-Shirt",
        price: 499,
        size: "all",
        quantity: 1,
        deliveryCharges: 0

    }
]

function addTocart(id) {
    let result = mensClothes.filter(item => item.id === id);
    // console.log(result)                                 
    // console.log(result[0])                                 

    let cartData = localStorage.getItem('cartList');    // cartList - local storage me data add karwane ke liye 
    if (cartData) {

        const newCart = JSON.parse(cartData)          //local storage me data ko as string ke form me lene ke liye
        let isAvailable = newCart.find(item => item.id === result[0].id);
        // console.log('new result',cartData  );
        // console.log('new result', isAvailable);
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

let mensclothesParent = document.getElementById("mensectionParentId")
mensClothes.map((data, index, arr) => {
    console.log(mensclothesParent, "data1")
    mensclothesParent.innerHTML += `
        <div class="card men_collection " style="width: 18rem;">
            <img src= ${data.Image} style="height:435px;">
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

console.log(mensclothesParent)
