
const kidsClothes = [
    {
        id: 11,
        Image: " /images/kidscollection1.webp ",
        brandName: "BLIVE",
        description: "Baby Boys Casual Suit",
        price: 799,
        size: "all",
        quantity: 1,
        deliveryCharges:0
    },
    {
        id: 12,
        Image: "/images/kidscollection2.webp",
        brandName: "KINDERGARDENS",
        description: "Baby Boys & Baby Girls Casual Suit",
        price: 669,
        size: "all",
        quantity: 1,
        deliveryCharges:0

    },
    {
        id: 13,
        Image: "/images/kidscollection3.webp",
        brandName: "HIVE",
        description: "Baby Boys Party-Wear Suit",
        price:589,
        size: "all",
        quantity: 1,
        deliveryCharges:0

    }
]

function addTocart(id) {
    let result = kidsClothes.filter(item => item.id === id);
    // console.log(result)                                 
    // console.log(result[0])                                 

    let cartData = localStorage.getItem('cartList');    // cartList - local storage me data add karwane ke liye 
    if (cartData) {

        const newCart = JSON.parse(cartData)          //local storage me data ko as string ke form me lene ke liye
        let isAvailable = newCart.find(item => item.id === result[0].id);
        // console.log('new result',cartData  );
        console.log('new result', isAvailable);
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

function kidsSectionData()
{
    let kidsclothesParent = document.getElementById("kidscollectionId")
    kidsClothes.map((data, index, arr) => {
        console.log(kidsclothesParent, "data1")
        kidsclothesParent.innerHTML += `
            <div class="card kids_collection" style="width: 18rem;">
                <img src=${data.Image} style="height: 288px;">
                <div class="card-body">
                    <h5 class="card-title ">${data.brandName}</h5>
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
    
}
// console.log()
console.log(kidsSectionData())

// document.getElementById("kidscollectionId").innerHTML = kidsSectionData();
 