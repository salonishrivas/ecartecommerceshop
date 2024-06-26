
//footwear section cart 

const shoes = [
    {
        id: 1,
        Image: "/images/shoecollection1.webp",
        brandName: "LIBERTY",
        description: "Textured White Casual Sneaker-Shoes ",
        name: "sneakers",
        price: 699,
        size: "all",
        quantity: 1,
        deliveryCharges: 0


    },
    {
        id: 2,
        Image: "/images/shoecollection2.webp",
        brandName: "FILA",
        description: "Textured White Casual Sneaker-Shoes ",
        name: "sneakers",
        price: 459,
        size: "all",
        quantity: 1,
        deliveryCharges: 10

    },
    {
        id: 3,
        Image: "/images/shoecollection3.webp",
        brandName: "BONKERS",
        description: "Textured White Casual Sneaker-Shoes ",
        name: "sneakers",
        price: 345,
        size: "all",
        quantity: 1,
        deliveryCharges: 10

    }
]


function addTocart(id) {
    let result = shoes.filter(item => item.id === id);
    // console.log(result)                                   // when click on add to cart - print on console -array of object
    // console.log(result[0])                                // when click on add to cart - print on console -object


    let cartData = localStorage.getItem('cartList');          // cartList - local storage me data add karwane ke liye 
    if (cartData) {

        const newCart = JSON.parse(cartData)                 //local storage me data ko as string ke form me lene ke liye
        let isAvailable = newCart.find(item => item.id === result[0].id);
        // console.log('new result',cartData  );

        console.log('new result', isAvailable);

        if (!isAvailable) {
            result.quantity = 1;
            newCart.push(result[0]);
            //  // console.log('======1 : ', newCart)
            console.log("output:", newCart);

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


let parent = document.getElementById("footwearparentId")
shoes.map((data, index, arr) => {
    console.log(parent, "data1")
    parent.innerHTML += `
        <div class="card footwear_collection " style="width: 18rem;">
            <img src= ${data.Image} style="height: 330px;">
            <div class="card-body">
                <h5 class="card-title">${data.brandName}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${data.description}</h6>
                <p class="card-text priceTags"> ₹ ${data.price}</p>
                <p class="card-text "> Delivery charges: ₹ ${data.deliveryCharges}</p>
               <!--- <a href="kidsSection/kidsProduct01.html">Know More</a>--->
                <div class="d-flex justify-content-evenly">
                    <button class="btn btn-info"  type ="button" onclick='addTocart(${data.id})'><i class="bi bi-cart"></i>Add To Cart</button>
                    <button class="btn btn-info" type ="button" onclick='' href="/pages/wishList.html"><i class="bi bi-heart"></i></button>
                </div>
            </div>
        </div>`
});

console.log(parent)


